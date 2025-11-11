// app/components/Partners.jsx
import React from 'react';
import Image from 'next/image';

export default function Partners() {
    const partners = [
        '/images/partners/google.png',
        '/images/partners/amazon.png',
        '/images/partners/microsoft.png',
        '/images/partners/meta.png',
    ];

    return (
        <section className="bg-white py-20 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Trusted by Leading Brands
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-10">
                {partners.map((logo, index) => (
                    <div key={index} className="relative w-32 h-12 grayscale hover:grayscale-0 transition">
                        <Image
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
