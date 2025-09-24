// import axios from "axios";

// const API_BASE = "http://localhost:8088/api/astrologer";

// export const getRashi = async (name) => {
//   const res = await axios.get(`${API_BASE}/rashi`, { params: { name } });
//   return res.data;
// };

// export const chatWithAstrologer = async (payload) => {
//   const res = await axios.post(`${API_BASE}/chat`, payload);
//   return res.data;
// };

// export const resetChat = async (sessionId) => {
//   const res = await axios.delete(`${API_BASE}/chat/${sessionId}/reset`);
//   return res.data;
// };


import axios from "axios";

const API_BASE = "http://localhost:8088/api/astrologer"; // change if backend runs elsewhere

export const getRashi = async (name) => {
  const res = await axios.get(`${API_BASE}/rashi`, { params: { name } });
  return res.data;
};

// Send message
// export const chatWithAstrologer = async ({ sessionId, message }) => {
//   const params = { message };
//   if (sessionId) params.sessionId = sessionId;

//   const res = await axios.get(`${API_BASE}/chat`, { params });
//   return res.data;
//   // Backend returns: "Session: <id>\nBot: <reply>"
//   const [sessionLine, botLine] = res.data.split("\n");
//   const session = sessionLine.replace("Session: ", "").trim();
//   const reply = botLine.replace("Bot: ", "").trim();

//   return { sessionId: session, reply };
// };

export const chatWithAstrologer = async ({ sessionId, name, dob, place, message }) => {
  const payload = { sessionId, name, dob, place, message };

  const res = await axios.post(`${API_BASE}/chat`, payload);
  return res.data; 
};

// Reset chat
export const resetChat = async (sessionId) => {
  const res = await axios.delete(`${API_BASE}/chat/${sessionId}/reset`);
  return res.data;
};
