'use client';

import Image from 'next/image';

interface StaticImageProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
  category: 'webdev' | 'marketing' | 'design' | 'hero' | 'about' | 'portfolio';
}

const imageUrls = {
  hero: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop&q=80", // Financial district
  about: "/pic.jpg",
  webdev: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop&q=80", // Trading charts
  marketing: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop&q=80", // Market analysis
  design: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop&q=80", // Risk management
  portfolio: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80" // Portfolio growth
};

export default function StaticImage({ width, height, alt, className = '', category }: StaticImageProps) {
  return (
    <div className="relative">
      <Image
        src={imageUrls[category]}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
} 