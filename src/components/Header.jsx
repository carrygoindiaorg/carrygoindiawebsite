import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-lg'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="text-3xl font-bold">
              <span className="text-zinc-900">Carry</span>
              <span className="text-[#7209b7]">Go</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-zinc-900 hover:text-[#7209b7] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-zinc-900 hover:text-[#7209b7] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-zinc-900 hover:text-[#7209b7] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('driver')}
              className="text-zinc-900 hover:text-[#7209b7] transition-colors font-medium"
            >
              Drivers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-zinc-900 hover:text-[#7209b7] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-zinc-900 hover:text-[#7209b7] transition-colors font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-zinc-900 hover:text-[#7209b7] transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-zinc-900 hover:text-[#7209b7] transition-colors font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('driver')}
              className="block w-full text-left text-zinc-900 hover:text-[#7209b7] transition-colors font-medium py-2"
            >
              Drivers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-zinc-900 hover:text-[#7209b7] transition-colors font-medium py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
