
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const getRashi = async (name) => {
  const res = await axios.get(`${API_BASE}/rashi`, { params: { name } });
  return res.data;
};

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
