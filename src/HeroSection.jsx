import React from "react";

function HeroSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-left max-w-auto">
        <div className=" text-gray py-1 px-3 text-sm font-bold mb-4 inline-block">
          <span className="bg-black text-amber-50 rounded-xl m-7 font-bold mb-4 inline-block px-4 py-2 text-center">
            NEW
          </span>
          MONOGRAPH DASHBOARD
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          POWERFUL INSIGHTS INTO YOUR TEAM
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Project planning and time tracking for agile teams
        </p>
        <div className="flex space-x-4">
          <button className="w-2/4">
            <span className="bg-red-500 hover:bg-blue-700 w-full text-white font-bold py-3 px-6 rounded-lg">
              SCHEDULE A DEMO
            </span>
          </button>
          <button className="bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-md border-2 border-gray-500">
            TO SEE A PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
