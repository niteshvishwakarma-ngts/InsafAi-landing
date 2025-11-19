export default function HeroSection() {
  return (
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

          <button className="bg-orange-400 text-white px-12 py-3 rounded-md font-medium text-xl hover:bg-orange-600 transition">
            Notify me
          </button>
        </div>
      </div>
    </section>
  );
}
