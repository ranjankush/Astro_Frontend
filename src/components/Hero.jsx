
import React, { useState, useRef, useEffect } from "react";

export default function Hero() {
  const videos = [
    "Calming Devotional Background.mp4", // sample 1
    "How Planets revolve.mp4",   // sample 2
    "zodiac background.mp4" // sample 3
  ];

  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  // When video ends → go to next
  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };
const preloadedVideos = useRef([]);

useEffect(() => {
  // Preload videos
  preloadedVideos.current = videos.map((src) => {
    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.load();
    return video;
  });
}, []);

useEffect(() => {
  if (videoRef.current && preloadedVideos.current[current]) {
    videoRef.current.src = preloadedVideos.current[current].src;
    videoRef.current.play();
  }
}, [current]);




  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      {/* Background Video */}
     
      <video
        ref={videoRef}
        src={videos[current]}
        className="absolute inset-0 w-full h-full opacity-90 object-cover"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        preload="auto" // preload for faster switching
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Discover Your Rashi & Fortune
        </h2>
        <p className="mt-4 text-lg md:text-2xl">
          Get personalized astrology insights using AI
        </p>
        <a
          href="/chat"
          className="mt-6 inline-block bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition"
        >
          Chat with AI
        </a>
      </div>

      {/* Controls */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + videos.length) % videos.length)
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 
           bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full z-20"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % videos.length)}
className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full z-20"
>
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
