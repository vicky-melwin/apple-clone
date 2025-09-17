import React from "react";

export default function FeatureGrid() {
  const features = [
    "Fast & free delivery",
    "EMI available",
    "AppleCare+ protection",
    "Trade in your old device"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feat, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">{feat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
