"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Partners = () => {
  // Sample partner logos (Replace with actual brand logos)
  const partners = [
    { id: 1, name: "Partner 1", logo: "/api/placeholder/200/100" },
    { id: 2, name: "Partner 2", logo: "/api/placeholder/200/100" },
    { id: 3, name: "Partner 3", logo: "/api/placeholder/200/100" },
    { id: 4, name: "Partner 4", logo: "/api/placeholder/200/100" },
    { id: 5, name: "Partner 5", logo: "/api/placeholder/200/100" },
    { id: 6, name: "Partner 6", logo: "/api/placeholder/200/100" },
  ];

  // Duplicate the array for infinite scrolling effect
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 font-semibold uppercase tracking-wide">
            Our Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2 mb-4">
            Partnering with Leading Pet Care Brands
          </h2>
          <p className="text-blue-600/80 max-w-2xl mx-auto">
            We collaborate with the most trusted brands in pet care to bring you
            and your furry friends the best services and products.
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Sliding Animation Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-10"
              animate={{
                x: ["0%", "-100%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md border border-gray-200 p-4 flex items-center justify-center group hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    width={200}
                    height={100}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
