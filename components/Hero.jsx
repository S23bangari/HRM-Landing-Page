import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Hero = () => {
  return (
    <main className="relative flex w-full min-h-screen flex-col items-center justify-center px-8 py-40">
      <BackgroundBeams />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Heading */}
        <h1 className="
          text-center font-bold mb-6 text-[#374053]
          text-xl sm:text-xl md:text-3xl lg:text-5xl leading-tight
        ">
          Empowering Businesses with 
          <br  />
          Smart & Scalable HR Solutions
        </h1>

        {/* Paragraph */}
        <p className="
          text-center text-[#535c78] mb-8 
          text-xs sm:text-lg md:text-xl
        ">
          Ktechnoit simplifies and automates HR operations with
          <br className="hidden sm:block" />
          intelligent end-to-end solutions for businesses of all sizes.
        </p>

        {/* Buttons */}
        <div className="
          flex flex-col sm:flex-row gap-4 justify-center
        ">
          <button
            className="
              px-14 py-2 bg-black text-white font-bold rounded-lg 
              transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-800
              w-full sm:w-auto
            "
          >
            Get Started
          </button>

          <button
            className="
              px-14 py-2 border border-gray-300 shadow-lg text-black font-semibold rounded-lg 
              transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-200
              w-full sm:w-auto
            "
          >
            Learn More
          </button>
        </div>

        {/* Hero Image */}
        <div className="
          max-w-7xl mx-auto mt-12 p-4 sm:p-6 
          bg-[#f5f5f5] border border-[#e6e4e4] rounded-3xl
        ">
          <img
            src="/hero-image.webp"
            alt="Hero Image"
            className="
              w-full h-auto rounded-3xl shadow-lg
            "
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
