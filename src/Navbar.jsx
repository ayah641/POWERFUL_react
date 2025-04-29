import React from "react";
import logo from "/images/logo.svg";

function Navbar() {
  return (
    <div className="grid grid-cols-2 items-center justify-between py-10 px-10">
      {/* <div className="">
        <img src={logo} alt="Logo" className="h-8" />
      </div> */}
      {/* <div className="bg-gray-500"> */}
      <nav className="text-align-text-top justify-end items-end flex w-full">
        <ul className="flex justify-between gap-14 space-x-3">
          <li>
            <a
              href="#"
              className="text-gray-60 hover:text-blue-500 font-semibold"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-60 hover:text-blue-500 font-semibold"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-60 hover:text-blue-500 font-semibold"
            >
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 font-semibold">
              *
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 font-semibold ml-auto"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
    // </div>
  );
}

export default Navbar;
