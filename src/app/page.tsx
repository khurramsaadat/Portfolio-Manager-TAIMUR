'use client';

import Image from "next/image";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StaticImage from '@/components/StaticImage';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:getanim0@yahoo.com?subject=Contact Form Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <StaticImage
            width={1920}
            height={1080}
            alt="Hero Background"
            className="object-cover opacity-20"
            category="hero"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Strategic investing with a focus on growth and risk control
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          "Driving smart investments, ensuring sustainable growth, and strategically managing risk for long-term financial success."
          </p>
          <button className="bg-[#FF4D4D] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all hover-scale">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                I am a seasoned Senior Investment Professional with over 15 years of experience in Operations and Investment across global markets. My expertise spans FX, Treasury, International Capital Markets, Risk Management, Policy Implementation, Structured Derivatives, Private Equity, and Financial Planning. With a strong foundation in qualitative and quantitative analysis, I specialize in crafting strategic investment solutions that balance growth and risk management.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Throughout my career, I have successfully translated corporate vision into measurable results by leveraging people, processes, and technology. I have a proven ability to develop, manage, and optimize investment portfolios, ensuring maximum shareholder value while maintaining prudent risk controls.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                As a motivational leader and collaborative team player, I excel in decision-making, problem-solving, and effective communication. My results-driven mindset, combined with a strong corporate focus, enables me to drive business growth and create long-term financial success.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden hover-scale pt-0">
              <StaticImage
                width={400}
                height={600}
                alt="Investment Professional"
                className="object-cover"
                category="about"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover-scale">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <StaticImage
                    width={400}
                    height={300}
                    alt={service.title}
                    className="object-cover"
                    category={service.imageCategory}
                  />
                </div>
                <div className="w-12 h-12 bg-[#FF4D4D] text-white rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Investment Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Market Growth Strategy",
                image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop&q=80"
              },
              {
                title: "Risk Management Success",
                image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop&q=80"
              },
              {
                title: "Portfolio Optimization",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden hover-scale">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#FF4D4D]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#FF4D4D]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#FF4D4D]"
                ></textarea>
              </div>
              <p className="text-sm text-gray-300">Clicking "Send Message" will open your email client to send the message.</p>
              <button
                type="submit"
                className="w-full bg-[#FF4D4D] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all hover-scale"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const services = [
  {
    title: "Investment Management",
    description: "Strategic portfolio management and investment solutions tailored to your financial goals.",
    icon: "📈",
    imageCategory: "hero" as const
  },
  {
    title: "Market Analysis",
    description: "Comprehensive market research and trend analysis for informed investment decisions.",
    icon: "📊",
    imageCategory: "about" as const
  },
  {
    title: "Risk Management",
    description: "Expert risk assessment and mitigation strategies to protect your investments.",
    icon: "🛡️",
    imageCategory: "portfolio" as const
  }
];
