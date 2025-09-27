import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import { getRashi } from "../api/ApiService";


export default function ChatPage() {
  const [userDetails, setUserDetails] = useState(null);
  const [form, setForm] = useState({
    name: "",
    dob: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setUserDetails(form);
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  // fetch rashi here if needed
  let rashiData = null;
  try {
    rashiData = await getRashi(form.name);
  } catch (err) {
    console.error("Rashi fetch failed at landing:", err);
  }

  setUserDetails({ ...form, rashi: rashiData });
};


  const handleReset = () => {
    setUserDetails(null);
    setForm({
      name: "",
      dob: "",
      place: "",
    });
  };

  return (
    <div className="bg-[url('/bg2.png')] min-h-screen bg-cover bg-center">
      <h2 className="text-3xl text-orange-500 p-4 font-bold text-center max-w-screen">
        Chat with AI Astrologer
      </h2>

      {!userDetails ? (
        // User Input Form
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="place"
            placeholder="Enter place of birth"
            value={form.place}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Start Chat
          </button>
        </form>
      ) : (
        // ChatBox with user details
        <ChatBox user={userDetails} onReset={handleReset} />
      )}

      {/* <div className="flex justify-center m-4">
  <img
    src="/Guruji.png"
    alt="Guruji"
    className="shadow-2xl rounded-2xl max-w-xs sm:max-w-sm md:max-w-md  object-contain hover:scale-105 transition-transform duration-300"
  />
</div> */}

    </div>
  );
}
