import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../mockData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Get In <span className="text-[#3c096c]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you 24/7.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3c096c] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Address</h4>
                    <p className="text-gray-600">Pune, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3c096c] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Phone</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-[#3c096c] transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3c096c] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-[#3c096c] transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Operating Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Sunday</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  We're always available to serve you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
