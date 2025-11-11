"use client";

import { FaCertificate, FaTruck, FaShieldAlt, FaUsers } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export default function WhyChoose() {
    const reasons = [
        {
            icon: <FaCertificate size={28} className="text-blue-700" />,
            bg: "bg-blue-100",
            title: "Verified Quality",
            desc: "All tools are tested and certified for professional use.",
        },
        {
            icon: <FaTruckFast size={28} className="text-orange-500" />,
            bg: "bg-orange-100",
            title: "Fast Delivery",
            desc: "Nationwide delivery within 24–48 hours.",
        },
        {
            icon: <FaShieldAlt size={28} className="text-green-600" />,
            bg: "bg-green-100",
            title: "Secure Payments",
            desc: "Safe and secure payment processing.",
        },
        {
            icon: <FaUsers size={28} className="text-purple-600" />,
            bg: "bg-purple-100",
            title: "Trusted Vendors",
            desc: "Carefully vetted suppliers and manufacturers.",
        },
    ];

    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Why Choose VKmakt?
                </h2>
                <p className="text-gray-600 mb-12">
                    Your trusted partner for quality tools and materials
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 ${item.bg}`}
                            >
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm max-w-[250px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
