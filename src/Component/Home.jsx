import AboutSection from "./About";
import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Vision from "./Vision";
import Contact from "./Contact";
  


export default function HeroSection() {
  const [openIndex, setOpenIndex] = useState(0);
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
  return (
    <>
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-28">
        <div className="max-w-2xl text-white mb-6">
          <h1 className="text-4xl md:text-7xl font-bold leading-snug mb-3">
            Insaaf AI- <br />
            Revolutionizing <br />
            Justice
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed tracking-wide">
            Building first AI powered legal operation system
          </p>

          <button className="bg-[#FF954D] text-white px-12 py-3 rounded-md font-medium text-xl hover:bg-[#e6853b] transition">
            Notify me
          </button>
        </div>
      </div>
      

    </section>
    <AboutSection />
    <section className="w-full bg-linear-to-r from-[#fff5ef] to-[#fde9d2] h-auto  py-20">
    
      <div className="text-center mb-12 px-4">
        <h2 className="text-[#FF954D] text-3xl font-semibold mb-3">What Drives Us</h2>
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
            <img src="/image3.png" className="w-9 h-9"/>
          </div>
    
          <h3 className="text-2xl font-semibold mt-8">Impact</h3>
          <p className="text-gray-600 mt-6">Empowering legal professionals and citizens alike.</p>
        </div>
    
      </div>
    </section>
     <Vision/>
     <section className="w-full bg-linear-to-r from-[#fff5ef] to-[#fde9d2] py-20">
        {/* Section Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-[#FF954D] text-3xl md:text-4xl font-semibold">
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
            <p className="text-gray-800 lg:leading-8 text-start">
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
            <p className="text-gray-800 lg:leading-8 text-start">
              Advanced legal research capabilities that analyze case law,
              statutes, and precedents to provide comprehensive insights.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-linear-to-r from-[#f9c08c] to-[#f6a86a] shadow-lg rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
              <img src="/vector1.png" alt="Compliance" className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">Compliance</h3>
            <p className="text-gray-800 lg:leading-8 text-start">
              Ensure adherence to regulatory requirements with automated
              compliance checks and documentation workflows.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-linear-to-r from-[#fff5ef] to-[#fde9d2] py-20">
        <h2 className="text-center text-[#FF954D] text-3xl md:text-4xl font-semibold mb-10">
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
       <Contact/>
    </>
  );
}
