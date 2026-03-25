import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FeatureCard from './FeatureCard';
import VehicleTypeCard from './VehicleTypeCard';
import DriverBenefitCard from './DriverBenefitCard';
import TestimonialCard from './TestimonialCard';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import DownloadAppModal from './DownloadAppModal';
import DriverRegistrationModal from './DriverRegistrationModal';
import { Button } from './ui/button';
import { features, stats, driverBenefits, testimonials, vehicleTypes } from '../mockData';
import { ArrowRight, Truck } from 'lucide-react';

const HomePage = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showDriverModal, setShowDriverModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 pt-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-zinc-900 space-y-8 animate-in fade-in slide-in-from-left duration-500">
              <div className="inline-block">
                <span className="bg-purple-100 text-[#3c096c] px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                  🚛 Pune's Complete Transport Solution
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                All Types of <span className="text-[#7209b7]">Transport</span> Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From bike parcels to large tempos - CarryGo provides complete transportation solutions for passengers and goods across Pune & PCMC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => setShowDownloadModal(true)}
                  size="lg"
                  className="bg-[#3c096c] hover:bg-[#5a189a] text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Download App
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => setShowDriverModal(true)}
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#3c096c] text-[#3c096c] hover:bg-[#3c096c] hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                >
                  Drive With Us
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-3xl font-bold text-[#7209b7] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image - Multi-vehicle Fleet */}
            <div className="relative animate-in fade-in slide-in-from-right duration-500">
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_fast-bike-service/artifacts/9up5ps3w_c1.jpg"
                  alt="CarryGo - Choose vehicle from a fleet that fits your needs"
                  className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                  loading="eager"
                  style={{ display: 'block' }}
                />
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#3c096c] flex items-center justify-center">
                    <Truck className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">All Vehicles</div>
                    <div className="text-gray-300 text-sm">One Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
              About <span className="text-[#3c096c]">CarryGo</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              CarryGo is Pune's comprehensive transport service platform. We connect customers with a complete fleet of vehicles - from bikes for quick parcel delivery to large tempos for heavy goods transportation. Our mission is to make transportation accessible, affordable, and reliable for everyone.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-[#3c096c] mb-2">5+ Vehicle Types</h3>
                <p className="text-gray-600">Complete transport solutions</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-[#3c096c] mb-2">Passenger & Cargo</h3>
                <p className="text-gray-600">People and goods transport</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-[#3c096c] mb-2">24/7 Service</h3>
                <p className="text-gray-600">Always available when you need</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Our <span className="text-[#3c096c]">Fleet</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right vehicle for your needs - from small parcels to large cargo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vehicleTypes.map((vehicle) => (
              <VehicleTypeCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Why Choose <span className="text-[#3c096c]">CarryGo</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the best transport service with unmatched benefits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              What Our <span className="text-[#3c096c]">Users</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied riders and drivers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Driver Section */}
      <section id="driver" className="py-24 bg-gradient-to-br from-purple-50 to-white text-zinc-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Drive Any Vehicle, <span className="text-[#7209b7]">Earn More</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Join CarryGo as a driver partner with any vehicle - bike, auto, cab, or tempo. Enjoy flexible hours, low commission, and high earning potential.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {driverBenefits.map((benefit) => (
                  <DriverBenefitCard key={benefit.id} benefit={benefit} />
                ))}
              </div>

              <Button
                onClick={() => setShowDriverModal(true)}
                size="lg"
                className="bg-[#3c096c] hover:bg-[#5a189a] text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-lg"
              >
                Join Now as Driver
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_fast-bike-service/artifacts/ktvuhkak_c2.jpg"
                  alt="CarryGo Driver - Puneri pace, CarryGo grace"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                  loading="lazy"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />

      {/* Modals */}
      <DownloadAppModal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} />
      <DriverRegistrationModal isOpen={showDriverModal} onClose={() => setShowDriverModal(false)} />
    </div>
  );
};

export default HomePage;
