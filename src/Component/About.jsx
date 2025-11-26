

import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import React, { useState } from "react";


export default function AboutSection() {
    


    const faqs = [
    {
      question: "What is Insaaf AI?",
      answer:
        "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations.",
    },
    {
      question: "When will Insaaf AI launch?",
      answer: "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
    {
      question: "Who can use Insaaf AI?",
      answer: "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
    {
      question: "How does Insaaf AI ensure accuracy?",
      answer: "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
    {
      question: "Is my legal data secure?",
      answer: "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
  ];
    const [openIndex, setOpenIndex] = useState(0);


  return (
     <section>
    <section  className="w-full  h-[85vh] bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] py-24 ">


        
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          {/* Heading */}
          <h2 className="text-orange-400 text-2xl md:text-4xl font-semibold mb-4">
            About Us
          </h2>

          <h3 className="text-xl md:text-3xl font-bold leading-snug mb-6">
            Insaaf AI is building the future <br />
            of justice with Artificial Intelligence.
          </h3>

          <p className="text-gray-700 leading-relaxed mb-2 ">
            We’re creating India’s first AI-powered Legal  Operating System — 
            where lawyers, firms, and  citizens can draft, research, and 
            automate legal workflows seamlessly.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to democratize access to justice and make the legal 
            system more transparent, efficient, and intelligent through technology.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/about.png"
            alt="about"
            className="rounded-md shadow-lg w-full md:w-[85%]"
          />
        </div>

      </div>
    </section>  

    <section className="w-full bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] py-16">
      
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-orange-500 text-3xl font-semibold mb-3">
          What Drives Us
        </h2>

        <p className="text-gray-700 text-lg">
          Our core values guide every decision we make and every solution we build
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

  {/* Card 1 */}
  <div className="rounded-2xl p-8 text-center shadow-md bg-gradient-to-r from-[#e5e7eb] to-[#fde9d2] relative">

    {/* Floating Icon */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center">
      <img src="/image1.png" alt="Innovation" className="w-7 h-7" />
    </div>

    <h3 className="text-xl font-semibold mt-10">Innovation</h3>
    <p className="text-gray-600 mt-2">
      Pioneering AI for legal transformation.
    </p>
  </div>


  {/* Card 2 */}
  <div className="rounded-2xl p-8 text-center shadow-md bg-gradient-to-r from-[#e5e7eb] to-[#fde9d2] relative">

    {/* Floating Icon */}
    <div className="absolute -top-6  left-1/2 transform -translate-x-1/2  w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center">
      <img src="/image2.png" alt="Integrity"className="w-7 h-7" />
    </div>

    <h3 className="text-xl font-semibold mt-10">Integrity</h3>
    <p className="text-gray-600 mt-2">
      Ensuring fairness and accuracy in every output.
    </p>
  </div>


  {/* Card 3 */}
  <div className="rounded-2xl p-8 text-center shadow-md bg-gradient-to-r from-[#e5e7eb] to-[#fde9d2] relative">

    {/* Floating Icon */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center">
      <img src="/image3.png" alt="Impact" className="w-7 h-7" />
    </div>

    <h3 className="text-xl font-semibold mt-10">Impact</h3>
    <p className="text-gray-600 mt-2">
      Empowering legal professionals and citizens alike.
    </p>
  </div>

</div>


    </section>

    <section className="w-full bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] py-16 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-orange-500 mb-10">
        Our Vision
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            A world where legal 
            assistance is{" "}
            <span className="text-orange-500">accessible</span>,{" "}
            <span className="text-orange-500">automated</span>, and{" "}
            <span className="text-orange-500">affordable</span>{" "}
            — for everyone.
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            We believe technology should democratize access to justice,
            breaking down barriers that prevent people from getting the
            legal help they need. Through intelligent automation and
            AI-driven insights, we're making legal services more efficient
            and equitable.
          </p>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6 mt-6 md:mt-0">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 w-45 ml-auto">
            <img
              src="/image6.png"
              className="w-10 h-10 mb-3 mx-auto"
              alt=""
            />
            <p className="font-medium text-gray-700 text-center">Justice for all</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 w-45 ml-8">
            <img
              src="/image1.png"
              className="w-10 h-10 mb-3 mx-auto"
              alt=""
            />
            <p className="font-medium text-gray-700 text-center">Smart Solutions</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 w-45 ml-auto">
            <img
              src="/image7.png"
              className="w-10 h-10 mb-3 mx-auto"
              alt=""
            />
            <p className="font-medium text-gray-700 text-center">Innovation First</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="w-full bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] py-20">

      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-orange-500 text-3xl md:text-4xl font-semibold">
          Powerful Legal AI Features
        </h2>

        <p className="mt-3 text-gray-700 text-lg">
          Transform your legal practice with intelligent automation and AI-driven insights.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-gradient-to-r from-[#f9c08c] to-[#f6a86a] shadow-lg rounded-xl p-8 text-center">
          <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
            <img src="/vector2.png" alt="Drafting" className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-semibold mb-3">Drafting</h3>
          <p className="text-gray-800 leading-relaxed">
            AI-powered document generation and editing tools that help legal
            professionals create accurate contracts and agreements in minutes.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-[#f9c08c] to-[#f6a86a] shadow-lg rounded-xl p-8 text-center">
          <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
            <img src="/vector3.png" alt="Research" className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-semibold mb-3">Research</h3>
          <p className="text-gray-800 leading-relaxed">
            Advanced legal research capabilities that analyze case law, statutes,
            and precedents to provide comprehensive insights.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-[#f9c08c] to-[#f6a86a] shadow-lg rounded-xl p-8 text-center">
          <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
            <img src="/vector1.png" alt="Compliance" className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-semibold mb-3">Compliance</h3>
          <p className="text-gray-800 leading-relaxed">
            Ensure adherence to regulatory requirements with automated compliance
            checks and documentation workflows.
          </p>
        </div>

      </div>
    </section>
    


  

  
    <section className="w-full bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] py-20">
      <h2 className="text-center text-orange-500 text-3xl md:text-4xl font-semibold mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#f7f7f7] rounded-2xl shadow-md p-12 cursor-pointer transition-all duration-300"
            onClick={() => setOpenIndex(i === openIndex ? null : i)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>

              {openIndex === i ? (
                <HiChevronUp className="text-2xl" />
              ) : (
                <HiChevronDown className="text-2xl" />
              )}
            </div>

            {/* Answer */}
            {openIndex === i && faq.answer && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
  </section>

  <section className="w-full bg-[#f6cba3] py-16 md:py-20">
  <div className="max-w-3xl mx-auto text-center px-4 md:px-6">

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
      Be First to Know
    </h2>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-gray-800 mb-8 md:mb-10">
      Be part of the legal revolution.
    </p>

    {/* Form */}
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
      
      {/* Name Input */}
      <input
        type="text"
        placeholder="Name"
        className="bg-black text-white px-5 py-3 rounded-lg w-full md:w-1/2 outline-none placeholder-gray-300 text-sm md:text-base"
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="bg-black text-white px-5 py-3 rounded-lg w-full md:w-1/2 outline-none placeholder-gray-300 text-sm md:text-base"
      />
    </div>

    {/* Button */}
    <button className="bg-orange-500 text-white px-10 py-3 text-base md:text-lg rounded-lg hover:bg-orange-600 transition w-full md:w-auto">
      Notify me
    </button>

  </div>
</section>

    
   </section>
  );
}
