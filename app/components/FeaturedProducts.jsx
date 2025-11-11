"use client";

import Image from "next/image";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function FeaturedProducts() {
    const products = [
        {
            id: 1,
            name: "Cordless Drill Machine",
            price: "₦45,000",
            rating: 4.8,
            image:
                "https://images.unsplash.com/photo-1603808033192-082d6919e4b3?auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 2,
            name: "Professional Hammer",
            price: "₦8,000",
            rating: 4.6,
            image:
                "https://images.unsplash.com/photo-1588776814546-84a6c83c4d29?auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 3,
            name: "Electric Angle Grinder",
            price: "₦32,000",
            rating: 4.9,
            image:
                "https://images.unsplash.com/photo-1629810055294-22f6d84c404d?auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 4,
            name: "Safety Helmet",
            price: "₦6,500",
            rating: 4.5,
            image:
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=60",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Featured Products
                </h2>
                <p className="text-gray-600 mb-12">
                    Explore some of our best-selling tools and materials.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 group"
                        >
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="rounded-xl object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {product.name}
                            </h3>
                            <div className="flex justify-center items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < Math.round(product.rating)
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-orange-500 font-bold text-lg mb-3">
                                {product.price}
                            </p>
                            <button className="flex items-center justify-center gap-2 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition">
                                <FaShoppingCart /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
