"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Shield, Users } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: "Passionate Care",
      description:
        "Our team of dedicated professionals treats every pet with genuine love and attention, ensuring they feel comfortable and happy.",
      color: "text-rose-500",
      bg: "bg-rose-100",
    },
    {
      icon: Shield,
      title: "Certified Experts",
      description:
        "All our staff members are certified professionals with years of experience in pet care and animal behavior.",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: Star,
      title: "Premium Service",
      description:
        "We provide top-quality services using the best products and techniques to ensure your pets receive exceptional care.",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "We're proud to be part of the local pet lover community, organizing events and supporting animal welfare initiatives.",
      color: "text-green-500",
      bg: "bg-green-100",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Pets" },
    { number: "15+", label: "Years Experience" },
    { number: "20+", label: "Expert Staff" },
    { number: "100%", label: "Satisfaction" },
  ];

  return (
    <section
      id="About-us"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Welcome to Best.Pet
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Since 2009, we've been dedicated to providing exceptional care for
              your beloved pets. Our mission is to ensure every pet receives the
              love, attention, and professional care they deserve.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 ${feature.bg} rounded-full flex items-center justify-center mb-4`}
                >
                  <feature.icon className={feature.color} size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-500 rounded-xl p-8 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-orange-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl text-blue-900 italic">
              "Our passion is creating a world where every pet receives the care
              and love they deserve. We're more than just a pet care service -
              we're your pet's second family."
            </blockquote>
            <div className="mt-4 text-gray-600">- The Best.Pet Team</div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300"
            >
              Book an Appointment
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
