import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white text-black text-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
        {/* Apple Logo */}
        <div className="font-bold text-lg cursor-pointer"><img src="./apple-logo.png" alt="" className="h-6"/></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <li
              key={i}
              className="hover:text-gray-300 cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-4">
          <span className="cursor-pointer"><img src="./search.png" alt="" className="h-4"/></span>
          <span className="cursor-pointer"><img src="./shopping-bag.png" alt="" className="h-4"/></span>

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {links.map((link, i) => (
              <li
                key={i}
                className="hover:text-gray-300 cursor-pointer transition"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
