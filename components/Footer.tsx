import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Veterinary Care", href: "#" },
    { name: "Professional Grooming", href: "#" },
    { name: "Luxury Boarding", href: "#" },
    { name: "Behavioral Training", href: "#" },
    { name: "Pet Day Care", href: "#" },
    { name: "Pet Nutrition", href: "#" },
  ];

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "123 Main St, Anytown, PH" },
    { icon: Phone, text: "(+63) 123-4567890" },
    { icon: Mail, text: "care@best.pet" },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-orange-400/30">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-orange-100">
                Stay updated with pet care tips and special offers!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-orange-400/30 focus:border-white focus:outline-none text-white placeholder:text-orange-100"
              />
              <button className="px-6 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-100 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Best.Pet</h3>
            <p className="text-orange-100 leading-relaxed">
              Providing exceptional pet care services with love and expertise.
              Your pet&apos;s happiness is our priority.
            </p>
            <div className="flex gap-4 pt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <nav>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-orange-100 hover:text-white transition duration-300 flex items-center gap-2"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-orange-100"
                >
                  <Icon size={20} className="mt-1 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Section */}
          <div>
            <h4 className="text-xl font-bold mb-6">Business Hours</h4>
            <ul className="space-y-3 text-orange-100">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-orange-400/30 text-center text-orange-100">
          <p>
            &copy; {new Date().getFullYear()} Best.Pet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
