import Image from 'next/image';

interface PlaceholderImageProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export default function PlaceholderImage({ width, height, alt, className = '' }: PlaceholderImageProps) {
  // Generate a data URL for a placeholder image
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1A1A1A');
    gradient.addColorStop(1, '#2A2A2A');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add some abstract shapes
    ctx.fillStyle = '#FF4D4D';
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 100 + 50,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }

  const dataUrl = canvas.toDataURL('image/jpeg');

  return (
    <Image
      src={dataUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
} 