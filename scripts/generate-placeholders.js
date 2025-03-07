const fs = require('fs');
const { createCanvas } = require('canvas');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate hero background
const heroCanvas = createCanvas(1920, 1080);
const heroCtx = heroCanvas.getContext('2d');

// Create gradient background
const gradient = heroCtx.createLinearGradient(0, 0, 1920, 1080);
gradient.addColorStop(0, '#1A1A1A');
gradient.addColorStop(1, '#2A2A2A');
heroCtx.fillStyle = gradient;
heroCtx.fillRect(0, 0, 1920, 1080);

// Add some abstract shapes
heroCtx.fillStyle = '#FF4D4D';
heroCtx.globalAlpha = 0.1;
for (let i = 0; i < 5; i++) {
  heroCtx.beginPath();
  heroCtx.arc(
    Math.random() * 1920,
    Math.random() * 1080,
    Math.random() * 200 + 100,
    0,
    Math.PI * 2
  );
  heroCtx.fill();
}

// Save hero image
const heroBuffer = heroCanvas.toBuffer('image/jpeg');
fs.writeFileSync(path.join(imagesDir, 'hero-bg.jpg'), heroBuffer);

// Generate about image
const aboutCanvas = createCanvas(800, 600);
const aboutCtx = aboutCanvas.getContext('2d');

// Create gradient background
const aboutGradient = aboutCtx.createLinearGradient(0, 0, 800, 600);
aboutGradient.addColorStop(0, '#2A2A2A');
aboutGradient.addColorStop(1, '#1A1A1A');
aboutCtx.fillStyle = aboutGradient;
aboutCtx.fillRect(0, 0, 800, 600);

// Add some abstract shapes
aboutCtx.fillStyle = '#FFD700';
aboutCtx.globalAlpha = 0.1;
for (let i = 0; i < 3; i++) {
  aboutCtx.beginPath();
  aboutCtx.arc(
    Math.random() * 800,
    Math.random() * 600,
    Math.random() * 100 + 50,
    0,
    Math.PI * 2
  );
  aboutCtx.fill();
}

// Save about image
const aboutBuffer = aboutCanvas.toBuffer('image/jpeg');
fs.writeFileSync(path.join(imagesDir, 'about-image.jpg'), aboutBuffer);

console.log('Placeholder images generated successfully!'); 