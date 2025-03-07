/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/random/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
    unoptimized: true, // This allows using local images
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
  // Disable the loading indicator
  loading: false,
};

module.exports = nextConfig; 