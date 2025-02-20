"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, PawPrint } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const PetTypes = () => {
  const pets = [
    {
      icon: "🐱",
      name: "Cats",
      description: "Your cat will purr with pleasure in our hands.",
      benefits: ["Grooming", "Health Check", "Playing Time"],
    },
    {
      icon: "🐕",
      name: "Dogs",
      description: "Tasty food, running, and playing with your dog.",
      benefits: ["Walking", "Training", "Socialization"],
    },
    {
      icon: "🐰",
      name: "Rabbits",
      description: "We will look after your favorite ball of fur.",
      benefits: ["Cage Cleaning", "Diet Planning", "Health Monitor"],
    },
    {
      icon: "🐠",
      name: "Fish",
      description: "The inhabitants of your aquarium will be happy.",
      benefits: ["Water Quality", "Feeding", "Tank Maintenance"],
    },
  ];

  return (
    <section
      id="pet-types"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            We Care For All Pets
          </h2>
          <p className="text-blue-600/80 max-w-2xl mx-auto">
            Our experienced team provides specialized care for various types of
            pets, ensuring their health and happiness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pets.map((pet, index) => (
            <motion.div
              key={pet.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-orange-100"
            >
              <motion.div
                className="text-5xl mb-4 bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {pet.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {pet.name}
              </h3>
              <p className="text-blue-600/80 mb-4">{pet.description}</p>
              <ul className="space-y-2 mb-4">
                {pet.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center text-blue-600/80 text-sm"
                  >
                    <PawPrint className="w-4 h-4 text-orange-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-orange-500 font-medium flex items-center gap-2 group-hover:text-orange-600"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetTypes;
