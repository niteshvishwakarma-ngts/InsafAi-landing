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
      answer:
        "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
    {
      question: "Who can use Insaaf AI?",
      answer:
        "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
    {
      question: "How does Insaaf AI ensure accuracy?",
      answer:
        "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
    {
      question: "Is my legal data secure?",
      answer:
        "Insaaf AI is India's first AI-powered Legal Operating System designed to help lawyers, law firms, and citizens automate legal workflows, conduct research and ensure compliance with regulations",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section>
      <section className="w-full  h-auto bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div>
            {/* Heading */}
            <h2 className="text-orange-400 text-2xl md:text-3xl font-semibold mb-4">
              About Us
            </h2>

            <p className="text-gray-900  mb-2 leading-10 tracking-wide text-xl"> 
              <span className=" font-bold leading-10 tracking-wide">
                Insaaf AI is building the future <br />
                of justice with Artificial Intelligence.
              </span>{" "}
              <br />
              We’re creating India’s first AI-powered <br />
              Legal Operating System — where lawyers, <br />
              firms, and citizens can draft, research, <br /> and automate legal
              workflows seamlessly. <br />
              Our mission is to democratize access to <br />
              justice and make the legal system <br />
              more transparent, efficient, and <br /> intelligent through
              technology.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/about.png"
              alt="about"
              className="rounded-md shadow-lg w-full md:w-[95%]"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] h-auto  py-20">

  <div className="text-center mb-12 px-4">
    <h2 className="text-orange-500 text-3xl font-semibold mb-3">What Drives Us</h2>
    <p className="text-gray-700 text-lg">
      Our core values guide every decision we make and every solution we build
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-10">

    {/* CARD 1 */}
    <div className="relative h-[320px] bg-linear-to-r
  from-[#D1D5DB] from-30% to-[#FFC499]
        rounded-2xl shadow-[6px_6px_4px_#FF954DFF]
         pt-16 pb-20 w-full flex flex-col justify-evenly items-center text-center">

      <div className="absolute top-[25px] left-1/2 -translate-x-1/2 
          w-16 h-16 bg-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.15)]
          flex items-center justify-center">
        <img src="/image1.png" className="w-9 h-9" />
      </div>

      <h3 className="text-2xl font-semibold mt-8">Innovation</h3>
      <p className="text-gray-900 mt-6">Pioneering AI for legal <br /> transformation.</p>
    </div>

    {/* CARD 2 */}
    <div className="relative h-[320px] bg-linear-to-r from-[#D1D5DB] from-30% to-[#FFC499]
        rounded-2xl shadow-[6px_6px_4px_#FF954DFF]
        p-10 pt-16 pb-20 w-full flex flex-col justify-evenly items-center text-center">

      <div className="absolute top-[25px] left-1/2 -translate-x-1/2
          w-16 h-16 bg-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.15)]
          flex items-center justify-center">
        <img src="/image2.png" className="w-9 h-9" />
      </div>

      <h3 className="text-2xl font-semibold mt-8">Integrity</h3>
      <p className="text-gray-600 mt-6">Ensuring fairness and accuracy in <br /> every output.</p>
    </div>

    {/* CARD 3 */}
    <div className="relative  h-[320px] bg-linear-to-r from-[#D1D5DB] from-30% to-[#FFC499]
        rounded-2xl shadow-[6px_6px_4px_#FF954DFF]
        px-8 pt-16 pb-20 w-full flex flex-col justify-evenly items-center  text-center">

      <div className="absolute top-[25px] left-1/2 -translate-x-1/2
          w-16 h-16 bg-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.15)]
          flex items-center justify-center">
        <img src="/image3.png" className="w-9 h-9" />
      </div>

      <h3 className="text-2xl font-semibold mt-8">Impact</h3>
      <p className="text-gray-600 mt-6">Empowering legal professionals and citizens alike.</p>
    </div>

  </div>
</section>


      <section className="w-full bg-gradient-to-r from-[#fff5ef] to-[#fde9d2] py-16 px-6 md:px-16">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-orange-500 mb-10">
          Our Vision
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-4xl font-semibold leading-12">
              A world where legal <br />
              assistance is <span className="text-orange-500">
                accessible
              </span>, <br />
              <span className="text-orange-500">automated, and </span>
              <span className="text-orange-500">affordable</span> <br />— for
              everyone.
            </h1>

            <p className="text-gray-900 mt-6 leading-12 max-w-lg">
              We believe technology should democratize access to justice,
              breaking down barriers that prevent people from getting the legal
              help they need. Through intelligent automation and AI-driven
              insights, we're making legal services more efficient and
              equitable.
            </p>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 mt-8 md:mt-0">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-[4px_4px_13px_rgba(0,0,0,0.4)] p-10 w-60 ml-30 mt-4">
              <img src="/image6.png" className="w-10 h-10 mb-3 mx-auto" />
              <p className="font-medium text-gray-700 text-center">
                Justice for all
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-[4px_4px_13px_rgba(0,0,0,0.4)] p-10 w-60 ml-auto mt-8">
              <img src="/image1.png" className="w-10 h-10 mb-3 mx-auto" />
              <p className="font-medium text-gray-700 text-center">
                Smart Solutions
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-10 w-60 ml-8 shadow-[4px_4px_13px_rgba(0,0,0,0.4)]">
              <img src="/image7.png" className="w-10 h-10 mb-3 mx-auto" />
              <p className="font-medium text-gray-700 text-center">
                Innovation First
              </p>
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
            Transform your legal practice with intelligent automation and
            AI-driven insights.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-linear-to-r from-[#f9c08c] to-[#f6a86a] shadow-lg rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
              <img src="/vector2.png" alt="Drafting" className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">Drafting</h3>
            <p className="text-gray-800 leading-8 text-start">
              AI-powered document generation and editing tools that help legal
              professionals create accurate contracts and agreements in minutes.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-linear-to-r from-[#f9c08c] to-[#f6a86a] shadow-lg rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
              <img src="/vector3.png" alt="Research" className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">Research</h3>
            <p className="text-gray-800 leading-8 text-start">
              Advanced legal research capabilities that analyze case law,
              statutes, and precedents to provide comprehensive insights.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-[#f9c08c] to-[#f6a86a] shadow-lg rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
              <img src="/vector1.png" alt="Compliance" className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">Compliance</h3>
            <p className="text-gray-800 leading-8 text-start">
              Ensure adherence to regulatory requirements with automated
              compliance checks and documentation workflows.
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
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>

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

      <section className="w-full bg-[#f6cba3] py-20">
  <div className="max-w-2xl mx-auto text-center px-4">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold mb-3">
      Be First to Know
    </h2>

    {/* Subheading */}
    <p className="text-xl text-gray-800 mb-10">
      Be part of the legal revolution.
    </p>

    {/* Form */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">

      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        className="bg-black text-white text-base px-6 py-3 rounded-lg w-60 md:w-56 
                   placeholder-gray-300"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="bg-black text-white text-base px-6 py-3 rounded-lg w-60 md:w-56 
                   placeholder-gray-300"
      />
    </div>

    {/* Button (same width as screenshot) */}
    <button className="bg-orange-500 text-white px-16 py-3 
                       text-lg rounded-lg hover:bg-orange-600 transition">
      Notify me
    </button>

  </div>
</section>

    </section>
  );
}
