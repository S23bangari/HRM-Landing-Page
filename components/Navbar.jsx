"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const list = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Contact",
    href: "#contact",
  }
];

const Navbar = () => {
  const ref = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const handleFormToggle = () => {
    setFormOpen(!formOpen);
  };

  return (
    <nav
      className={`
        fixed w-full top-0 left-0 z-50 
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? darkMode
              ? " py-2"
              : " py-2"
            : darkMode
            ? "bg-black py-4"
            : "bg-white py-4"
        }
      `}
    >
      <div
        ref={ref}
        className={`
          flex items-center justify-between mx-auto transition-all duration-500
          px-4 md:px-8 border
          ${
            scrolled
              ? "max-w-4xl py-2 mt-2 rounded-full backdrop-blur-md"
              : "max-w-7xl border-transparent"
          }
          ${scrolled && darkMode ? "bg-zinc-900/80 border-transparent" : ""}
          ${scrolled && !darkMode ? "bg-white shadow-2xl border-gray-200" : ""}
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/kTch.png"
            alt="Logo"
            className={`transition-all duration-500 ${
              scrolled ? "h-6 w-6" : "h-8 w-8"
            }`}
          />
          <Link href="/">
          <h1
            className={`${
              darkMode ? "text-white" : "text-black"
            } font-semibold`}
          >
            Ktechnoit
          </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {list.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  text-lg px-3 py-2 rounded-full transition-all cursor-pointer
                  ${
                    darkMode
                      ? "text-white hover:bg-zinc-800"
                      : "text-black hover:bg-gray-200"
                  }
                `}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Login Btn */}
          {!scrolled && (
            <button
              className={`
                px-4 py-2 font-bold rounded transition-transform duration-300 hover:-translate-y-1
                ${darkMode ? "text-white" : "text-black"}
              `}
            >
              Login
            </button>
          )}

          {/* CTA */}
          <button
            className={`px-6 py-2 font-bold rounded-lg border border-[#d4d5d6] shadow-2xl
              transition-transform duration-300 hover:-translate-y-1`}
            onClick={handleFormToggle}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? (
            <X className={`${darkMode ? "text-white" : "text-black"}`} />
          ) : (
            <Menu className={`${darkMode ? "text-white" : "text-black"}`} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden transition-all duration-500 overflow-hidden
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          ${darkMode ? "bg-black/90" : "bg-white/90"}
        `}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {list.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  text-lg px-3 py-2 rounded-full transition-all cursor-pointer
                  ${
                    darkMode
                      ? "text-white hover:bg-zinc-800"
                      : "text-black hover:bg-gray-200"
                  }
                `}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Login button */}
          {!scrolled && (
            <button
              className={`
                w-40 py-2 rounded font-semibold
                ${darkMode ? "text-white" : "text-black"}
              `}
            >
              Login
            </button>
          )}

          {/* CTA button */}
          <button
            className={`
              w-40 py-2 rounded-lg font-bold
              ${darkMode ? "bg-white text-black" : "bg-black text-white"}
            `}
            onClick={handleFormToggle}
          >
            Book a Call
          </button>
        </ul>
      </div>

      {/* Form Modal */}
      {formOpen && <ContactForm isModal={true} onClose={handleFormToggle} />}
    </nav>
  );
};

export default Navbar;
