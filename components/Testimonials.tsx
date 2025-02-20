"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, PawPrint, Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jokie",
      pet: "Parrot",
      text: "My parents were worried about my health as I didn't want to eat at all. After visiting Best.Pet, I got my appetite back!",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Axel",
      pet: "Dog",
      text: "When Mummy traveled abroad, she couldn't take me with her. So, Best.Pet became my second home!",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Milo",
      pet: "Cat",
      text: "I have to take medications regularly. When my parents decided to go on vacation, Best.Pet took great care of me.",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 uppercase font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-blue-600/80 max-w-2xl mx-auto">
            If pets could talk, here&apos;s what they&apos;d tell about us
            (according to their owners).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow relative border border-orange-100"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200" />
              <div className="flex items-center mb-6">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-1 rounded-full">
                    <PawPrint className="w-4 h-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-blue-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600/80 text-sm">{testimonial.pet}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-orange-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-600/80 italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
