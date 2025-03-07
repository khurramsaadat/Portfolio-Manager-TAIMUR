'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            Taimur Saadat
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white hover:text-[#FF4D4D] transition-colors">
              About
            </Link>
            <Link href="#services" className="text-white hover:text-[#FF4D4D] transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-white hover:text-[#FF4D4D] transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-white hover:text-[#FF4D4D] transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-black/90">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="text-white hover:text-[#FF4D4D] transition-colors">
                About
              </Link>
              <Link href="#services" className="text-white hover:text-[#FF4D4D] transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-white hover:text-[#FF4D4D] transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="text-white hover:text-[#FF4D4D] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 