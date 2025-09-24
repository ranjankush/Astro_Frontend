// import { useState } from "react";
// import { getRashi } from "../api/ApiService";
// import React, { useState } from "react";

// export default function RashiSection() {
//   const [name, setName] = useState("");
//   const [rashi, setRashi] = useState(null);
//    const [loading, setLoading] = useState(false);

//   const handleFetch = async () => {
//     setLoading(true);
//     const data = await getRashi(name);
//     setRashi(data);
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 m-2 bg-white rounded-xl shadow-md max-w-md mx-auto">
//       <input
//         type="text"
//         value={name}
//         placeholder="Enter your name"
//         onChange={(e) => setName(e.target.value)}
//         className="border p-2 rounded w-full mb-3"
//       />
//       {/* <button onClick={handleFetch} className="bg-purple-500 text-white px-4 py-2 rounded w-full">
//         Get My Rashi
//       </button> */}

//      <button
//   onClick={handleFetch}
//   disabled={loading}
//   className={`w-full sm:w-auto px-4 py-2 rounded text-sm sm:text-base transition-colors duration-200 
//     ${loading 
//       ? "bg-gray-400 cursor-not-allowed text-white" 
//       : "bg-purple-500 hover:bg-purple-600 text-white"
//     }`}
// >
//   {loading ? "Getting..." : "Get Rashi"}
// </button>


//       {rashi && (
//         <div className="mt-4 p-4 border rounded bg-gray-50">
//           <h2 className="font-bold">Your Rashi: {rashi.rashi}</h2>
//           <p>{rashi.description}</p>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import { getRashi } from "../api/ApiService";

export default function RashiSection() {
  const [name, setName] = useState("");
  const [rashi, setRashi] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!name.trim()) return; // prevent empty fetch
    setLoading(true);
    try {
      const data = await getRashi(name);
      setRashi(data);
    } catch (error) {
      console.error("Failed to fetch Rashi:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 m-2 bg-white rounded-xl shadow-md max-w-md mx-auto">
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-3"
        required
      />

      <button
        onClick={handleFetch}
        disabled={loading}
        className={`w-full px-4 py-2 rounded  items-center mx-auto transition-colors duration-200 
          ${loading 
            ? "bg-gray-400 cursor-not-allowed text-white" 
            : "bg-purple-500 hover:bg-purple-600 text-white"
          }`}
      >
        {loading ? "Getting..." : "Get Rashi"}
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
