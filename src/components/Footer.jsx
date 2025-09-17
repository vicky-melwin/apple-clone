import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-2">Shop and Learn</h4>
          <ul className="space-y-1">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>Apple Music</li>
            <li>iCloud</li>
            <li>Apple TV+</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Apple Store</h4>
          <ul className="space-y-1">
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Today at Apple</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">About Apple</h4>
          <ul className="space-y-1">
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-8">© 2025 Apple Clone. All rights reserved.</div>
    </footer>
  );
}
