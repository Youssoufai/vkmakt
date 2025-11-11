"use client";

import { FaTools, FaHammer, FaPaintRoller, FaBolt, FaCogs, FaWrench } from "react-icons/fa";

export default function FeaturedCategories() {
    const categories = [
        {
            icon: <FaTools size={35} />,
            title: "Power Tools",
            desc: "Drills, grinders, and more for your construction needs.",
        },
        {
            icon: <FaHammer size={35} />,
            title: "Hand Tools",
            desc: "Durable tools for every craftsman and builder.",
        },
        {
            icon: <FaPaintRoller size={35} />,
            title: "Painting & Finishing",
            desc: "Paints, rollers, and coatings for smooth finishes.",
        },
        {
            icon: <FaBolt size={35} />,
            title: "Electrical Supplies",
            desc: "Wires, switches, and circuit accessories.",
        },
        {
            icon: <FaCogs size={35} />,
            title: "Machinery",
            desc: "Heavy-duty machines and workshop equipment.",
        },
        {
            icon: <FaWrench size={35} />,
            title: "Plumbing Tools",
            desc: "Pipes, fittings, and plumbing essentials.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Featured Categories
                </h2>
                <p className="text-gray-600 mb-12">
                    Explore our top categories and find quality hardware tools faster.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-8 flex flex-col items-center text-center group"
                        >
                            <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {cat.title}
                            </h3>
                            <p className="text-gray-500 text-sm">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
