import { NextResponse } from 'next/server';

const PIXEL_ID = '1311974850832120';
const TOKEN = 'EAAMXN9ZCAu7sBRUDL4p2l82velrbZAgzAbCvAQ5uQXZB5XWRKnpU5GIYbmZBkGfBIOl1Lz88ZC5xRuVMWgrwUq38CCV9h58rHYBBtnDvMAJlu1tOtQKcADZBkx7ZBpGeRQK0wMpftXwkjIAZB17v2cZBy35mY0twgHUZClElyOF60hkXUDAg5gl3L1YDCQPprMUQpbhAZDZD';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventUrl, userAgent, clientIp } = body;

    const data = [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: eventUrl,
      action_source: 'website',
      user_data: {
        client_ip_address: clientIp || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
        client_user_agent: userAgent || request.headers.get('user-agent') || '',
      }
    }];

    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    });

    const result = await response.json();
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('CAPI Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
