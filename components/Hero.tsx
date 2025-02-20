"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 min-h-screen flex items-center bg-gradient-to-b from-white to-orange-50"
    >
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-medium rounded-full mb-6">
            #1 Pet Care in Philippines
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
            Your Pet Deserves <br />
            <span className="relative">
              the Best Care
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-lg">
            Professional pet care services with a personal touch. Trusted by
            thousands of pet owners for over a decade.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-orange-500/30"
              onClick={(e) => handleScroll(e, "services")}
            >
              Book Appointment <Calendar className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-900 hover:text-white transition-colors"
            >
              Call Us <Phone className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mt-8">
            <Stat number="5k" text="Happy Pets" />
            <Stat number="15" text="Expert Vets" />
            <Stat number="15" text="Years of Care" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-square">
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-400/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-400/20 rounded-full"
              animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Main Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-orange-100 to-orange-50">
              <Image
                src="/dog.jpg"
                alt="Happy pet"
                width={800}
                height={800}
                priority
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4 pr-6"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Next Available</div>
                  <div className="font-semibold text-blue-900">
                    Today, 2:00 PM
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/** Small Stats Component */
const Stat = ({ number, text }: { number: string; text: string }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    <div className="text-3xl font-bold text-blue-900">{number}+</div>
    <div className="text-sm text-gray-600">{text}</div>
  </motion.div>
);

export default Hero;
