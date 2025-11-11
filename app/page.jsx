"use client";

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import FeaturedCategories from "./components/Featured";
import WhyChoose from "./components/WhyChoose";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CtaSection";
import Newsletter from "./components/NewsLetter";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-800">VKmakt</h1>

          {/* Links */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-700">Home</a></li>
            <li><a href="#" className="hover:text-blue-700">Shop</a></li>
            <li><a href="#" className="hover:text-blue-700">Categories</a></li>
            <li><a href="#" className="hover:text-blue-700">About</a></li>
            <li><a href="#" className="hover:text-blue-700">Contact</a></li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <div className="relative flex items-center text-gray-700">
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full px-1.5">
                0
              </span>
            </div>

            <button className="bg-blue-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800">
              Login
            </button>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full h-[90vh] flex items-center justify-start">
          {/* Background image */}
          <Image
            src="/hardware.jpg" // replace with your actual image
            alt="Construction workers"
            fill
            className="object-cover brightness-75"
            priority
          />

          {/* Overlay content */}
          <div className="relative z-10 text-white max-w-3xl px-10">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Quality Tools. Delivered Fast.
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              The world&apos;s most reliable platform for power tools, hand tools, and
              building materials.
            </p>

            <div className="flex gap-5">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg">
                Shop Now
              </button>
              <button className="border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-md transition">
                Become a Vendor
              </button>
            </div>
          </div>
        </div>

        {/* Help button */}
        <div className="fixed bottom-5 right-5">
          <button className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800">
            ?
          </button>
        </div>
      </div>
      <FeaturedCategories />
      <WhyChoose />
      <FeaturedProducts />
      <Testimonials />
      <CTASection />
      <Newsletter />
      <Partners />
      <Footer />
    </>
  );
}
