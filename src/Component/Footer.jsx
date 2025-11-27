import { FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div>
          {/* Logo */}
          <div className="mb-3">
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
          </div>

          {/* <h3 className="text-white font-semibold mb-3">INSAAF AI</h3> */}

          <p className="text-sm leading-relaxed mb-4">
            Build your AI twin and engage <br />
            with your audience 24/7.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-[#FF954D] text-xl">
            <FaTwitter className="cursor-pointer hover:text-[#e6853b]" />
            <FaInstagram className="cursor-pointer hover:text-[#e6853b]" />
            <FaYoutube className="cursor-pointer hover:text-[#e6853b]" />
            <FaTiktok className="cursor-pointer hover:text-[#e6853b]" />
          </div>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex flex-col gap-3 text-sm">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 mb-3">
            <FiPhone className="text-[#FF954D] text-lg" />
            <span className="text-sm">+91 1098273459</span>
          </div>

          <div className="flex items-center gap-3">
            <FiMail className="text-[#FF954D] text-lg" />
            <span className="text-sm">abale123@gmail.com</span>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-start text-sm text-gray-300">
        © 2023 PersonaAI. All rights reserved.
      </div>

      </div>

      {/* COPYRIGHT */}
      
    </footer>
  );
}
