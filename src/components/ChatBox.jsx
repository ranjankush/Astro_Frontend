
// ChatBox.jsx
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { chatWithAstrologer, resetChat } from "../api/ApiService";

export default function ChatBox({ user, onReset }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    if (!input || loading) return;
    const payload = { name: user.name, dob: user.dob, place: user.place, message: input, sessionId: sessionId || undefined };
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setLoading(true);
    try {
      const response = await chatWithAstrologer(payload);
      setMessages((prev) => [...prev, { from: "bot", text: response.reply }]);
      setSessionId(response.sessionId);
    } catch (e) {
      setMessages((prev) => [...prev, { from: "bot", text: "⚠️ Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (sessionId) await resetChat(sessionId);
    setMessages([]); setSessionId(null); onReset();
  };

  return (
    <div className="p-2 bg-white opacity-85 shadow-2xl rounded-xl max-w-screen mx-auto">
      <div className="text-center mb-2">
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm text-gray-500">{user.dob} | {user.place}</p>
      </div>

      <div ref={chatRef} className="h-134 overflow-y-auto p-2 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            {msg.from === "user" ? (
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[90%] sm:max-w-[70%] md:max-w-[60%] break-words text-sm sm:text-base">
                {msg.text}
              </span>
            ) : (
              <div className="bg-white px-3 py-2 rounded-2xl shadow-xl max-w-[85%] sm:max-w-[75%] md:max-w-[65%] break-words text-sm sm:text-base prose prose-sm sm:prose lg:prose-lg">
                <ReactMarkdown remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({node, ...props}) => <p className="font-bold text-base mb-1" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-1" {...props} />,
                    p: ({node, ...props}) => <p className="mb-2" {...props} />
                  }}>
                  {msg.text}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2 max-w-screen">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask the astrologer..."
          className="flex-1 border p-2 rounded"
        />
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button onClick={sendMessage} disabled={loading}
            className={`w-full sm:w-auto px-4 py-2 rounded text-white text-sm sm:text-base transition-colors duration-200 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}>
            {loading ? "Sending..." : "Send"}
          </button>
          <button onClick={handleReset}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm sm:text-base transition-colors duration-200">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

