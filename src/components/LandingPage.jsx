import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./Hero";
import RashiSection from "./RashiSection";
import { FaComments } from "react-icons/fa";

export default function LandingPage() {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/chat");
  };

  return (
    <div id="home" className="bg-[url('/bg2.png')] bg-cover bg-center min-h-screen flex flex-col ">
      <HeroSection />
      <RashiSection />

      {/* Chat Button */}
      <div className="w-full flex justify-center items-center">
        <button
          onClick={goToChat}
          className="w-fit mx-auto m-8 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition"
        >
          <FaComments /> Chat with Astrologer
        </button>
      </div>

  <h1 className=" w-fit mx-auto mt-8 flex font-bold items-center gap-2w-fit gap-2  text-orange-600 px-8 py-3 text-2xl shadow-lg transition">
    More From AI Astrologer
    </h1>


     <div className="mx-2 py-4 sm:mx-2 lg:mx-8">
  <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
    {/* Image stays left; size scales by breakpoint */}
    <img
      src="as1-removebg-preview.png"
      alt="Astrologer"
      className="w-26 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-80 lg:h-100 object-contain"
    />

    {/* Bubble with responsive text */}
    <div className="relative flex-1 md:max-w-2xl">
      <div className="border-2 border-blue-400 bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
        <p className="text-gray-700 text-xs text-justify sm:text-base lg:text-l">
          ✨ Life is a cosmic journey, guided by the rhythm of the stars and the energies of the planets. 
          Every soul is born with a unique chart that reveals lessons, blessings, and challenges meant to shape destiny. 
          The Sun lights the path of purpose, the Moon reflects emotions and inner truth, while Saturn teaches patience and resilience through trials. 
          Just as seasons change, life too moves in cycles—times of growth, times of pause, and times of renewal. 
          By aligning with these celestial patterns, one can find balance, strength, and a deeper understanding of their true self. 
          Remember, the universe does not send obstacles to break you, but to awaken your hidden potential. 🌌 </p>
      </div>

      {/* Tail left for side-by-side layout; size adjusts */}
      <span className="absolute -left-2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-white border-l-2 border-t-2 border-blue-400 rotate-315" />
    </div>
  </div>
</div>


 <div className="mx-2 pt-18 py-4 sm:mx-6 lg:mx-8">
  <div className="flex flex-row-reverse items-start gap-3 sm:gap-4 md:gap-2">
    <img
      src="as2.png"
      alt="Astrologer"
      className="w-32 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-80 lg:h-140 object-contain"
    />
    <div className="relative flex-1 md:max-w-2xl">
      <div className="border-2 border-blue-400 bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
        {/* <h2 className="font-bold mb-1 text-base sm:text-xl lg:text-2xl">Welcome to Ai Astrologer</h2> */}
        <p className="text-gray-700 text-xs sm:text-base text-justify lg:text-lg">
       🌟 Career success comes when patience and passion work together. Saturn teaches discipline and steady effort, while Mercury helps with intelligence, communication, and adaptability. Jupiter blesses careers built on honesty and wisdom. Challenges may come, but they shape skills and strength. 
       True prosperity comes from focus, dedication, and courage to accept change. Every determined step takes you closer to the success written in the stars. ✨</p>
      </div>
      {/* Tail now points to the right side */}
      <span className="absolute -right-2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-white border-r-2 border-t-2 border-blue-400 rotate-45" />
    </div>
  </div>
</div>

 <div className="mx-2 py-4 sm:mx-2">
  <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
    {/* Image stays left; size scales by breakpoint */}
    <img
      src="ptrika_image.png"
      alt="Astrologer"
      className="w-40 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-100 lg:h-80 object-contain"
    />

    {/* Bubble with responsive text */}
    <div className="relative flex-1 md:max-w-2xl">
      <div className="border-2 border-blue-400 bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
        <p className="text-gray-700 text-xs text-justify sm:text-base lg:text-l">
         Fortune is the blessing of life that brings success and happiness.
It helps opportunities come at the right time with less struggle.
True fortune is having health, peace, and positivity around you.
</p>
      </div>

      {/* Tail left for side-by-side layout; size adjusts */}
      <span className="absolute -left-2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-white border-l-2 border-t-2 border-blue-400 rotate-315" />
    </div>
  </div>
</div>

 <div className="mx-2 pt-18 py-4 sm:mx-6 lg:mx-8">
  <div className="flex flex-row-reverse items-start gap-3 sm:gap-4 md:gap-2">
    <img
      src="kundali.png"
      alt="Astrologer"
      className="w-32 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-80 lg:h-80 object-contain"
    />
    <div className="relative flex-1 md:max-w-2xl">
      <div className="border-2 border-blue-400 bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-sm">
        {/* <h2 className="font-bold mb-1 text-base sm:text-xl lg:text-2xl">Welcome to Ai Astrologer</h2> */}
        <p className="text-gray-700 text-xs sm:text-base text-justify lg:text-lg">
     A positive kundali reflects a birth chart filled with favorable planetary alignments that support growth, harmony, and success in life. 
     It signifies balance, good health, inner strength, prosperity, and fulfilling relationships.
     </p>
      </div>
      {/* Tail now points to the right side */}
      <span className="absolute -right-2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-white border-r-2 border-t-2 border-blue-400 rotate-45" />
    </div>
  </div>
</div>
    </div>
  );
}
