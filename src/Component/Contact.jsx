import React from 'react';

export default function Contact(){
    return (
        <section className="w-full bg-linear-to-b h-auto from-[#FFC499] via-[#FFB07A] to-[#C1C1C1] py-20">
  <div className="max-w-2xl mx-auto text-center px-4">

    {/* Heading */}
    <h2 className="text-3xl md:text-3xl font-semibold mb-3">
      Be First to Know
    </h2>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-gray-900 mb-6">
      Be part of the legal revolution.
    </p>

    {/* Form */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">

      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        className="bg-black text-white text-base px-4 py-3 rounded-lg w-60 md:w-43 placeholder-gray-400"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="bg-black text-white text-base px-4 py-3 rounded-lg w-60 md:w-43 placeholder-gray-400"
      />
    </div>

    {/* Button */}
    <button className="bg-[#FF954D] text-white px-16 py-3 text-base rounded-lg md:w-89 hover:bg-[#e6853b] transition">
      Notify me
    </button>

  </div>
</section>

    );
}

 