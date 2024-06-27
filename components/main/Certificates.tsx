"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Certificates: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: '/st.png', alt: 'st certificate' },
        { src: '/cs.png', alt: 'cs certificate' },
        { src: '/sap.png', alt: 'st certificate' },
        { src: '/itquiz.png', alt: 'st certificate' },
        { src: '/nptel.png', alt: 'st certificate' },
        { src: '/wc.png', alt: 'wc certificate' }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]); // Include images.length in the dependency array



    return (
        <div className="w-full max-w-5xl mx-auto mb-20"> {/* Center the carousel with max width */}
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative h-96 md:h-128 overflow-hidden rounded-lg"> {/* Fixed height */}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    ))}
                </div>
                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/50 dark:bg-white/30 dark:group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-gray-800 dark:group-focus:ring-white group-focus:outline-none"
                    onClick={handlePrev}
                >
                    <svg
                        className="w-6 h-6 text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                            stroke="currentColor"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/50 dark:bg-white/30 dark:group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-gray-800 dark:group-focus:ring-white group-focus:outline-none"
                    onClick={handleNext}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                            stroke="currentColor"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Certificates;
