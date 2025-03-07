import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json();

    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: to
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      templateParams
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 