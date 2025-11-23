import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Allowed origins for CORS
const allowedOrigins = [
  'http://maddy-ai.com',
  'https://maddy-ai.com',
  'http://www.maddy-ai.com',
  'https://www.maddy-ai.com',
];

// Function to get CORS headers based on request origin
function getCorsHeaders(origin: string | null) {
  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };

  if (origin && allowedOrigins.includes(origin)) {
    corsHeaders['Access-Control-Allow-Origin'] = origin;
  }

  return corsHeaders;
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  return NextResponse.json({}, { headers: getCorsHeaders(origin) });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Google Sheets setup
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Get current timestamp in IST (India Standard Time)
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'LeadsEmail!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, message]],
      },
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully!' },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
