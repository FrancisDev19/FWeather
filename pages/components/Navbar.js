import React, { useState, useContext } from "react";
import IsDayContext from '../Context/isDay'

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const IsDay = useContext(IsDayContext);

  const toggleMenu = (value) => setisOpen(value);

  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="navbar-brand">
        <a href="">
          <img src="/logo.png" alt="" className="w-20 h-20" />
        </a>
      </div>
      <div>
        <button
          onClick={() => toggleMenu(!isOpen)}
          className="w-10 h-10 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            className={
              isOpen
                ? `h-screen w-full fixed z-10 top-0 left-0 bg-opacity-75 ${IsDay[0] ? "bg-yellow-500" : "bg-gray-800"} overflow-x-hidden transition-all duration-700 ease-in `
                : "w-0 transition-all duration-1000"
            }
          >
            <div className="container mx-auto mt-5 px-20 flex justify-end">
              <button onClick={() => toggleMenu(!isOpen)}>
                <svg
                  className="text-white w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="menu-content h-4/5 flex flex-col justify-center items-center">
              <a href="#" className={`p-8 text-4xl text-white ${IsDay[0] ? "hover:text-gray-900" : "hover:text-gray-400" } tracking-wider font-semibold block transition duration-700 ease-in-out`}>
                Location
              </a>
              <a href="#" className="p-8 text-4xl text-white hover:text-gray-900 tracking-wider font-semibold block transition duration-700 ease-in-out">
                Location
              </a>
              <a href="#" className="p-8 text-4xl text-white hover:text-gray-900 tracking-wider font-semibold block transition duration-700 ease-in-out">
                Location
              </a>
              <a href="#" className="p-8 text-4xl text-white hover:text-gray-900 tracking-wider font-semibold block transition duration-700 ease-in-out">
                Location
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
