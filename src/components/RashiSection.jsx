import { useState } from "react";
import { getRashi } from "../api/ApiService";

export default function RashiSection() {
  const [name, setName] = useState("");
  const [rashi, setRashi] = useState(null);

  const handleFetch = async () => {
    const data = await getRashi(name);
    setRashi(data);
  };

  return (
    <div className="p-6 m-2 bg-white rounded-xl shadow-md max-w-md mx-auto">
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <button onClick={handleFetch} className="bg-purple-500 text-white px-4 py-2 rounded w-full">
        Get My Rashi
      </button>

      {rashi && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="font-bold">Your Rashi: {rashi.rashi}</h2>
          <p>{rashi.description}</p>
        </div>
      )}
    </div>
  );
}
