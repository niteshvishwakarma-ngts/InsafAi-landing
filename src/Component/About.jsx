export default function AboutSection() {
  return (
    <section className="relative z-">
      
      {/* 🔥 BLUR CIRCLE TOP LEFT */}
      {/* <div className="absolute top-17 left-18 w-64 h-64 
        rounded-full bg-[#1bd511] opacity-100 blur-[100px] z-0">
      </div> */}

      {/* 🔥 BLUR CIRCLE BOTTOM RIGHT */}
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 
        rounded-full bg-[#FF954D] opacity-30 blur-[120px] z-0">
      </div> */}

      {/* --- MAIN CONTENT (UI UNCHANGED) --- */}
      <section className="relative z-2 w-full h-auto bg-linear-to-r from-[#fff5ef] to-[#fde9d2] py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-[#FF954D] text-lg sm:text-xl md:text-3xl font-semibold mb-4">
              About Us
            </h2>

            <p
              className="
                whitespace-pre-line
                text-gray-900 mb-2 
                text-sm sm:text-base md:text-xl
                leading-7 sm:leading-8 md:leading-8 lg:leading-10 
                tracking-wide
              "
            >
              <span className="font-bold">
                {`Insaaf AI is building the future
of justice with Artificial Intelligence.`}
              </span>
              {`
We’re creating India’s first AI-powered
Legal Operating System — where lawyers,
firms, and citizens can draft, research,
and automate legal workflows seamlessly.
Our mission is to democratize access to
justice and make the legal system
more transparent, efficient, and 
intelligent through technology.`}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/about.png"
              alt="about"
              className="
                rounded-md shadow-lg 
                w-[80%] sm:w-[70%] md:w-[95%]
              "
            />
          </div>

        </div>
      </section>

    </section>
  );
}
