// app/components/Newsletter.jsx
import React from 'react';

export default function Newsletter() {
    return (
        <section className="bg-gray-100 py-20 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Stay Updated
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter and never miss out on new products, updates, and offers.
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
}
