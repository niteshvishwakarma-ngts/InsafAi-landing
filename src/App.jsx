import { Routes, Route } from "react-router-dom";

import Footer from "./Component/Footer";
import AboutSection from "./Component/About";
import Vision from "./Component/Vision";
import Contact from "./Component/Contact";
import HeroSection from "./Component/Home";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
