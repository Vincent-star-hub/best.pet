"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Heart,
  ChevronDown,
  ChevronUp,
  PawPrint,
} from "lucide-react";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer for pets?",
      answer:
        "We offer a comprehensive range of pet care services including pet sitting, dog walking, grooming, training, and emergency care. All our services are provided by certified professionals who love working with animals.",
    },
    {
      question: "How do I schedule a first appointment?",
      answer:
        "You can schedule your first appointment by filling out the contact form below, calling us directly, or using our live chat. We'll match you with the best service provider for your pet's needs.",
    },
    {
      question: "What are your rates for different services?",
      answer:
        "Our rates vary depending on the service, duration, and specific needs of your pet. We offer competitive pricing and package deals for regular clients. Contact us for a detailed quote.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we provide 24/7 emergency pet care services. In case of an emergency, you can reach our emergency support line immediately for immediate assistance and guidance.",
    },
  ];

  const petCareTips = [
    {
      tip: "Keep Your Pet Hydrated",
      description:
        "Ensure your pet has access to fresh, clean water at all times to stay healthy and hydrated.",
    },
    {
      tip: "Regular Vet Checkups",
      description:
        "Schedule routine vet visits to monitor your pet’s health and catch any issues early.",
    },
    {
      tip: "Exercise and Playtime",
      description:
        "Daily exercise keeps your pet fit, prevents obesity, and strengthens the bond between you and your pet.",
    },
    // {
    //   tip: "Balanced Nutrition",
    //   description:
    //     "Provide a well-balanced diet based on your pet’s age, breed, and dietary needs.",
    // },
    {
      tip: "Safe and Comfortable Shelter",
      description:
        "Create a clean, safe, and comfortable space for your pet to rest and feel secure.",
    },
  ];

  return (
    <div
      id="contact"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-orange-100 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-orange-50/50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-blue-900">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="text-orange-500 w-5 h-5" />
                    ) : (
                      <ChevronDown className="text-orange-500 w-5 h-5" />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 py-4 text-gray-600 bg-orange-50/30"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-5 bg-orange-50 rounded-2xl">
              <div className="pt-4 pb-6 px-6">
                <div className="container mx-auto px-4 max-w-5xl">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-center text-blue-900 mb-8"
                  >
                    🐾 Pet Care Tips
                  </motion.h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {petCareTips.map((tip, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 border-l-4 border-orange-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {/* <div className="bg-orange-500 text-white p-3 rounded-full">
                        <PawPrint size={24} />
                      </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900">
                            {tip.tip}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {tip.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-orange-500 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Still Have Questions?
            </h2>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name*"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 border border-orange-100 focus:outline-none focus:ring-2 focus:ring-white text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Enter your phone number*"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 border border-orange-100 focus:outline-none focus:ring-2 focus:ring-white text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Pet's name and age*"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 border border-orange-100 focus:outline-none focus:ring-2 focus:ring-white text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <select className="w-full px-4 py-3 rounded-lg bg-white/90 border border-orange-100 focus:outline-none focus:ring-2 focus:ring-white text-black">
                  <option value="">Select service*</option>
                  <option value="sitting">Pet Sitting</option>
                  <option value="training">Dog Training</option>
                  <option value="walking">Dog Walking</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-orange-500 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200"
              >
                Send
              </motion.button>
            </motion.form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center bg-white/10 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email Us</h3>
                  <p className="text-gray-100">info@best.pet</p>
                </div>
              </div>

              <div className="flex items-center bg-white/10 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Call Us</h3>
                  <p className="text-orange-100">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center bg-white/10 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Live Chat</h3>
                  <p className="text-gray-100">
                    Available 24/7 for your questions
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-white/10 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Emergency Care</h3>
                  <p className="text-orange-100">24/7 Emergency Pet Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
