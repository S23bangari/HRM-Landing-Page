import React from "react";
import { PhoneIcon, Mail, Rocket } from "lucide-react";

const CallToAction = () => {
  return (
    <div id="contact" className="w-full flex flex-col items-center justify-center px-6 sm:px-8 py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#374053] mb-4">
          Ready to Transform Your HR?
        </h2>

        <p className="text-[#535c78] mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Looking to upgrade your HR management with a modern, scalable solution?  
          <br className="hidden sm:block" />
          Let’s build it together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Call Button */}
          <a
            href="tel: +917678553137"
            className="
              inline-flex items-center justify-center px-8 py-3 
              bg-gradient-to-r from-blue-500 to-blue-700 
              text-white font-semibold rounded-lg shadow-md
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1
            "
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            Call Us: +91 76785 53137


          </a>

          {/* Email Button */}
          <a
            href="mailto:ktechnoit@gmail.com"
            className="
              inline-flex items-center justify-center px-8 py-3 
              bg-gradient-to-r from-gray-800 to-black 
              text-white font-semibold rounded-lg shadow-md
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1
            "
          >
            <Mail className="mr-2 h-5 w-5" />
            Email: ktechnoit@gmail.com
          </a>
        </div>

        {/* Demo Request */}
        <div className="flex flex-col items-center mt-10">
          <Rocket className="h-10 w-10 text-blue-500 animate-bounce" />
          <h1 className="mt-3 text-lg font-semibold text-[#374053]">
            Request a free Demo / Quote
          </h1>
        </div>

        {/* Footer line */}
        <p className="mt-6 text-gray-600 font-medium">
          Optimize HR. Boost Productivity. Grow Faster.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
