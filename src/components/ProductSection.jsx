import React from "react";

const products = [
  {
    title: "MacBook Pro",
    subtitle: "Supercharged by M3",
    img: "./product2.jpg",
  },
  {
    title: "MacBook Air",
    subtitle: "Light. Speed.",
    img: "./product3.jpg",
  },
  {
    title: "iPhone 15",
    subtitle: "New camera. New design.",
    img: "./product1.jpg",
  },
  {
    title: "iPad Pro",
    subtitle: "Supercharged by M2",
    img: "./product4.jpg",
  },
  {
    title: "Apple Watch",
    subtitle: "Smarter. Brighter. Mightier.",
    img: "./product5.jpg",
  },
  {
    title: "AirPods Pro",
    subtitle: "Immersive sound.",
    img: "./product6.jpg",
  },
];

export default function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden text-center"
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Image {i + 1}</span>
              )}
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-600 mt-1">{p.subtitle}</p>
              <div className="mt-4 flex justify-center gap-6 text-blue-600 font-medium">
                <a href="#">Learn More</a>
                <a href="#">Buy</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
