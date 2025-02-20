"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Pet Sitting",
      description:
        "We will sit with your pet and even stay overnight if needed.",
      price: "from $15/hour",
      image: "/pet-sitting.jpg",
      features: ["24/7 Care", "Daily Updates", "Emergency Support"],
    },
    {
      title: "Dog Training",
      description:
        "Professional dog handlers can train dogs of any breed and consult their owners.",
      price: "from $35/hour",
      image: "/dog-training.jpg",
      features: ["Behavior Training", "Obstacle Course", "Social Training"],
    },
    {
      title: "Dog Walking",
      description:
        "We can take your dog for a walk on schedule and bring it back home.",
      price: "from $10/hour",
      image: "/dog-walking.jpg",
      features: ["Flexible Schedule", "GPS Tracking", "Group Walks"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 uppercase font-medium">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2 mb-4">
            Professional Pet Care
          </h2>
          <p className="text-blue-600/80 max-w-2xl mx-auto">
            Choose from our range of professional pet care services tailored to
            meet your pet's needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-orange-100"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-blue-600/80 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-blue-600/80 text-sm"
                    >
                      <Star className="w-4 h-4 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-orange-500 font-medium">{service.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
