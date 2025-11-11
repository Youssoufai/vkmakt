// app/components/CTASection.jsx
import React from 'react';

export default function CTASection() {
    return (
        <section className="bg-blue-600 text-white py-20 px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to start your journey?
            </h2>
            <p className="text-lg md:text-xl mb-8">
                Join our community and get access to the best products and deals.
            </p>
            <a
                href="/signup"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
                Get Started
            </a>
        </section>
    );
}
