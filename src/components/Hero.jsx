import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gray-100 text-center py-20">
      <h1 className="text-5xl font-bold mb-4">iPhone Air</h1>
      <p className="text-xl text-gray-600 mb-6">The thinnest iPhone ever. With the power of pro inside.</p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Learn More</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full">Buy</button>
      </div>
      {/* Placeholder for product image */}
      <div className="w-full max-w-4xl mx-auto mt-12 aspect-[18/9] bg-gray-300 rounded-lg flex items-center justify-center">
        <span className="text-gray-500"><img src="./hero.jpg" alt="" /></span>
      </div>
    </section>
  );
}
