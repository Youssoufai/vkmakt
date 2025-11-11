"use client";

import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Adebayo Johnson",
            role: "Contractor, Abuja",
            comment:
                "VKMakt is my go-to platform for all construction tools. The quality and delivery speed are unmatched!",
            rating: 5,
            image:
                "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Grace Uche",
            role: "Interior Designer, Lagos",
            comment:
                "Amazing experience! I ordered paint supplies, and everything arrived exactly as described.",
            rating: 4,
            image:
                "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            name: "Musa Ibrahim",
            role: "Workshop Owner, Kano",
            comment:
                "Very reliable vendors. I always get genuine power tools at great prices. Highly recommend!",
            rating: 5,
            image:
                "https://randomuser.me/api/portraits/men/20.jpg",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-gray-600 mb-12">
                    Real feedback from builders, contractors, and professionals using VKmakt daily.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                        >
                            <div className="text-left mb-4 text-orange-500">
                                <FaQuoteLeft size={24} />
                            </div>

                            <p className="text-gray-700 text-sm mb-6 italic">
                                `{testi.comment}`
                            </p>

                            <div className="flex justify-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < testi.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <div className="flex flex-col items-center mt-4">
                                <div className="w-16 h-16 relative rounded-full overflow-hidden mb-2">
                                    <Image
                                        src={testi.image}
                                        alt={testi.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-800">{testi.name}</h3>
                                <p className="text-sm text-gray-500">{testi.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
