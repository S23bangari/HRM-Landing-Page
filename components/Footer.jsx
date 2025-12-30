import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverEffectDemo() {
  return (
    <div className="flex items-center justify-center">
      <TextHoverEffect text="KTECH" />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="w-full text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img src="/kTch.png" alt="KTECH Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl text-black font-bold tracking-wide">KTECHNOIT</span>
          </div>

          <p className="text-gray-600">
            © 2025 KTECHNOIT. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-300">

          <ul className="space-y-2">
            <h1 className="text-gray-600 font-bold mb-2">Pages</h1>
            <li className="text-gray-400 cursor-pointer">Home</li>
            <li className="text-gray-400 cursor-pointer">Features</li>
            <li className="text-gray-400 cursor-pointer">Pricing</li>
            <li className="text-gray-400 cursor-pointer">Contact</li>
            <li className="text-gray-400 cursor-pointer">Blog</li>
          </ul>

          <ul className="space-y-2">
            <h1 className="text-gray-600 font-bold mb-2">Socials</h1>
            <li className="text-gray-400 cursor-pointer">Facebook</li>
            <li className="text-gray-400 cursor-pointer">Instagram</li>
            <li className="text-gray-400 cursor-pointer">X</li>
            <li className="text-gray-400 cursor-pointer">LinkedIn</li>
          </ul>

          <ul className="space-y-2">
            <h1 className="text-gray-600 font-bold mb-2">Legal</h1>
            <li className="text-gray-400 cursor-pointer">Privacy Policy</li>
            <li className="text-gray-400 cursor-pointer">Terms of Service</li>
            <li className="text-gray-400 cursor-pointer">Cookie Policy</li>
          </ul>

          <ul className="space-y-2">
            <h1 className="text-gray-600 font-bold mb-2">Register</h1>
            <li className="text-gray-400 cursor-pointer">Sign Up</li>
            <li className="text-gray-400 cursor-pointer">Login</li>
            <li className="text-gray-400 cursor-pointer">Book a Demo</li>
          </ul>

        </div>
      </div>

      {/* Animated Text Section */}
      <div className="mt-16">
        <TextHoverEffectDemo />
      </div>
    </footer>
  );
};

export default Footer;
