import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import PromoStrip from './components/PromoStrip';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductSection type="iPhone" />
        <PromoStrip text="Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*" />
        <ProductSection type="Mac" />
        <ProductSection type="iPad" />
        <ProductSection type="Watch" />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
