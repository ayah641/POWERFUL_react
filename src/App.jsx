import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MockupSection from "./MockupSection";
// import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <div className="bg-gray-700">
        <Navbar />
        <div className="content-wrapper">
          <HeroSection />
          <MockupSection />
        </div>
      </div> */}
      <div className="grid grid-cols-2">
        <div className="">
          {/* <Navbar /> */}
          <div className="px-30 py-8">
            <img src={"/images/logo.svg"} alt="Logo" className="h-8" />
          </div>
          <div className="content-wrapper">
            <HeroSection />
          </div>
        </div>
        <div className="relative px-0 py-0">
          <div className="w-full h-[400px] bg-gray-200 rounded-bl-[30px]"></div>
          <div className="absolute top-0 right-0 w-[200px] text-gray-60">
            <Navbar />
            <div className="mt-36 mr-8">
              <MockupSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
