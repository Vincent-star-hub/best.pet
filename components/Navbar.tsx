"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/hero" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-900 flex items-center gap-2"
          >
            <span className="text-orange-500">❤️</span>
            Best.Pet
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={(e) => handleScroll(e, "hero")}
            className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
          >
            Home
          </button>
          <button
            onClick={(e) => handleScroll(e, "About-us")}
            className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
          >
            About Us
          </button>
          {/* <button
            onClick={(e) => handleScroll(e, "FAQ")}
            className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
          >
            FAQ
          </button> */}
          <button
            onClick={(e) => handleScroll(e, "testimonials")}
            className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
          >
            Happy Clients
          </button>
          <button
            onClick={(e) => handleScroll(e, "contact")}
            className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                <button
                  onClick={(e) => handleScroll(e, "About-us")}
                  className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
                >
                  About Us
                </button>
                <button
                  onClick={(e) => handleScroll(e, "FAQ")}
                  className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
                >
                  FAQ
                </button>
                <button
                  onClick={(e) => handleScroll(e, "testimonials")}
                  className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
                >
                  Happy Clients
                </button>
                <button
                  onClick={(e) => handleScroll(e, "contact")}
                  className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
                >
                  Contact
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md shadow-orange-500/20"
                  onClick={(e) => handleScroll(e, "services")}
                >
                  Order Services
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Order Services Button */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md shadow-orange-500/20"
            onClick={(e) => handleScroll(e, "services")}
          >
            Order Services
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

// interface NavLinkProps {
//   href: string;
//   children: React.ReactNode;
//   onClick?: () => void;
// }

// const NavLink = ({ href, children, onClick }: NavLinkProps) => (
//   <Link href={href} onClick={onClick}>
//     <motion.span
//       whileHover={{ scale: 1.05 }}
//       className="text-gray-600 hover:text-blue-900 cursor-pointer font-medium"
//     >
//       {children}
//     </motion.span>
//   </Link>
// );

export default Navbar;
