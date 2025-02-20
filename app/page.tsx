"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, ChevronDown } from "lucide-react";

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      title: "Veterinary Care",
      description: "Complete health checkups and treatments",
    },
    { title: "Grooming", description: "Professional pet grooming services" },
    { title: "Boarding", description: "Safe and comfortable pet boarding" },
    { title: "Training", description: "Behavioral training and socialization" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.header
        className="relative h-screen bg-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              className="text-5xl font-bold text-gray-800 mb-6"
              {...fadeIn}
            >
              Caring for Your Pets Like Family
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Professional pet care services with love and dedication. Your
              pet&apos;s health and happiness is our top priority.
            </motion.p>
            <motion.div
              className="space-x-4"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Our Services
              </button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </motion.div>
      </motion.header>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">contact@petcare.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">
                    123 Pet Care Street, City, State
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">
                    Mon-Sat: 8:00 AM - 8:00 PM
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Pet Care Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
