// app/api/subscribe/route.ts (App Router)
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, name, message } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Your Telegram Bot Token and Chat ID (store in .env.local)
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials missing');
      // Still return success to not expose configuration issues
      return NextResponse.json({ 
        success: true, 
        message: 'Subscribed (demo mode)' 
      });
    }

    // Format message for Telegram
    const telegramMessage = `
📧 **New Newsletter Subscriber!**

👤 **Name:** ${name || 'Not provided'}
📩 **Email:** ${email}
💬 **Message:** ${message || 'No message'}
🕐 **Time:** ${new Date().toLocaleString()}
    `;

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error('Telegram API error');
    }

    // Store in your database (optional)
    // await saveToDatabase({ email, name, subscribedAt: new Date() });

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}