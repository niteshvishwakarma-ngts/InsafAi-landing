import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2f2f2f] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-18">

        {/* Logo */}
        <div className="flex items-start gap-2">
  <Link to="/">
    <img
      src="/logo.png" 
      alt="logo"
      className="w-15 h-15 object-contain cursor-pointer"
    />
  </Link>
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">
  <Link to="/about" className="hover:text-gray-300 duration-200">About Us</Link>
  <Link to="/vision" className="hover:text-gray-300 duration-200">Vision</Link>
  <Link to="/contact" className="hover:text-gray-300 duration-200">Contact Us</Link>
</div>


        {/* Login Button */}
        <button className="hidden md:block px-5 py-1.5 rounded-md text-sm hover:border border-[#FF954D] hover:text-[#FF954D] transition">
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
  <div className="md:hidden absolute top-16 left-0 w-full 
      bg-[#2f2f2f] px-6 pb-4 space-y-4 text-sm z-50 shadow-lg">
      
    <Link to="/about" className="block">About Us</Link>
    <Link to="/vision" className="block">Vision</Link>
    <Link to="/contact" className="block">Contact Us</Link>

    <button className="border border-orange-500 px-5 py-1.5 rounded-md text-sm 
            hover:bg-orange-500 hover:text-black transition w-full mt-2">
      Login
    </button>
  </div>
)}

    </nav>
  );
}
