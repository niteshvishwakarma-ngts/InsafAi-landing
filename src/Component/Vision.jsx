import React from 'react';

export default function Vision() {
    return (
        <section className="w-full bg-linear-to-r from-[#fff5ef] to-[#fde9d2] py-16 px-6 md:px-16">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#FF954D] mb-10">
          Our Vision
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
<div className="flex flex-col justify-center h-full text-center md:text-left">

  {/* Heading */}
  <h1 className="
      text-2xl sm:text-3xl md:text-4xl 
      font-semibold 
      leading-8 sm:leading-10 md:leading-12
  ">
    A world where legal <br />
    assistance is <span className="text-[#FF954D]">accessible</span>, <br />
    <span className="text-[#FF954D]">automated, and </span>
    <span className="text-[#FF954D]">affordable</span> <br />
    — for everyone.
  </h1>

  {/* Paragraph */}
  <p className="
      text-gray-900 
      mt-4 sm:mt-6 
      text-sm sm:text-base md:text-lg 
      leading-6 sm:leading-7 md:leading-10
      max-w-full md:max-w-lg 
      mx-auto md:mx-0
  ">
    We believe technology should democratize access to justice,
    breaking down barriers that prevent people from getting the
    legal help they need. Through intelligent automation and 
    AI-driven insights, we're making legal services more 
    efficient and equitable.
  </p>

</div>


          {/* Right Cards */}
         
<div className="flex flex-col gap-6 mt-8 md:mt-0">

  {/* Card 1 — left aligned (desktop) */}
  <div className="
    bg-white rounded-xl shadow-[4px_4px_13px_rgba(0,0,0,0.4)] 
    p-10 
    w-full md:w-62 
    self-center md:self-start lg:translate-x-23

 
    mt-4 
  ">
    <img src="/image6.png" className="w-10 h-10 mb-3 mx-auto" />
    <p className="font-medium text-gray-700 text-center">Justice for all</p>
  </div>

  {/* Card 2 — right aligned (desktop) */}
  <div className="
    bg-white rounded-xl shadow-[4px_4px_13px_rgba(0,0,0,0.4)] 
    p-10 
    w-full md:w-62 
    self-center md:self-start lg:self-end lg:-translate-x--32
    lg:mt-4 
  ">
    <img src="/image1.png" className="w-10 h-10 mb-3 mx-auto" />
    <p className="font-medium text-gray-700 text-center">Smart Solutions</p>
  </div>

  {/* Card 3 — slight left shift (desktop) */}
  <div className="
    bg-white rounded-xl shadow-[4px_4px_13px_rgba(0,0,0,0.4)] 
    p-10 
    w-full md:w-62 
    self-center md:self-start lg:-translate-y-5 lg:translate-x-2

    
  ">
    <img src="/image7.png" className="w-10 h-10 mb-3 mx-auto" />
    <p className="font-medium text-gray-700 text-center">Innovation First</p>
  </div>

</div>

        </div>
      </section>
    );
}

 