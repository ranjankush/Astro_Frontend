
import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full opacity-90 object-cover"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="/Calming Devotional Background.mp4" type="video/mp4" />
      </video>

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
    </section>
  );
}

 