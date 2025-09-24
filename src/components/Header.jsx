import React from "react";

export default function Header() {
  return (
    <header className="bg-purple-700 px-4 text-white flex text-center align-middle items-center justify-between">
      {/* <h1 className="text-xl font-bold"><a href="/" className="mx-2"></a></h1> */}
       <img src="/Logo.png" alt="logo" className="h-20 w-20 rounded-full" />
      <nav className="mr-4 gap-2">
        <a href="/" className="mx-2 text-center align-middle ">Home</a>
        <a href="/chat" className="mx-2 text-center align-middle ">Chat with AI</a>
      </nav>
    </header> 
  );
}
