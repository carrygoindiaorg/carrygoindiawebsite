import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">Carry</span>
              <span className="text-[#7209b7]">Go</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted transport service in Pune & PCMC. Complete fleet for all your passenger and cargo needs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AfFgaymMc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#3c096c] flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/carrygoindia?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#3c096c] flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/carrygo_india?igsh=MWIyaGVxeG9tdGo5NQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#3c096c] flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/carrygo-india-a99b813b3/?trk=public-profile-join-page"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#3c096c] flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#driver" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  Drive With Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#7209b7] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Pune, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#7209b7] flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#7209b7] flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-[#7209b7] transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} CarryGo. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#7209b7] transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
