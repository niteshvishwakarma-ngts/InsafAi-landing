import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2f2f2f] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-18">

        {/* Logo */}
        <div className="flex items-start gap-2">
          <img
            src="./public/logo.png" 
            alt="logo"
            className="w-15 h-15 object-contain "
          />
          {/* <span className="text-lg font-semibold tracking-wide">INSAAF AI</span> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <a href="#" className="hover:text-gray-300 duration-200">About Us</a>
          <a href="#" className="hover:text-gray-300 duration-200">Vision</a>
          <a href="#" className="hover:text-gray-300 duration-200">Contact Us</a>
        </div>

        {/* Login Button */}
        <button className="hidden md:block px-5 py-1.5 rounded-md text-sm hover:bg-orange-500 hover:text-black transition">
          Login
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#2f2f2f] px-6 pb-4 space-y-4 text-sm z-10">
          <a href="#" className="block">About Us</a>
          <a href="#" className="block">Vision</a>
          <a href="#" className="block">Contact Us</a>

          <button className="border border-orange-500 px-5 py-1.5 rounded-md text-sm hover:bg-orange-500 hover:text-black transition w-full mt-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
