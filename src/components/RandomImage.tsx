'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface RandomImageProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
  query?: string;
}

export default function RandomImage({ width, height, alt, className = '', query = 'business' }: RandomImageProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const getImageUrl = () => {
    // Format query by replacing commas with proper encoding
    const formattedQuery = query.split(',').join(',');
    // Add timestamp to prevent caching
    const timestamp = new Date().getTime();
    return `https://source.unsplash.com/random/${width}x${height}?${formattedQuery}`;
  };

  useEffect(() => {
    setIsLoading(true);
    setImageUrl(getImageUrl());
    setIsLoading(false);
  }, [width, height, query]);

  if (isLoading) {
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`} style={{ width, height }} />
    );
  }

  return (
    <div className="relative group">
      <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className={className}
        unoptimized // Required for dynamic URLs
      />
      <button
        onClick={() => {
          setIsLoading(true);
          setImageUrl(getImageUrl());
          setIsLoading(false);
        }}
        className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        title="Get new image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  );
} 