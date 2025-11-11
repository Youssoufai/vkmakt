// app/components/Footer.jsx
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                {/* Brand Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">VKMakt</h3>
                    <p className="text-sm text-gray-400">
                        Building the future through innovation and technology. <br />
                        Stay connected and join our journey.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
                    <ul className="flex gap-4 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
        </footer>
    );
}
