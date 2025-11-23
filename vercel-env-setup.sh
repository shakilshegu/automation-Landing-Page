#!/bin/bash
# Run these commands to set up Vercel environment variables

vercel env add GOOGLE_CLIENT_EMAIL production
# When prompted, enter: sheet-editor@skl-autospace.iam.gserviceaccount.com

vercel env add GOOGLE_PRIVATE_KEY production
# When prompted, paste the entire private key from .env.local

vercel env add GOOGLE_SHEET_ID production
# When prompted, enter: 1EOX6CzwOv7a4NUZKYro4EqXO95Cmi9j_HMLLeogpZa4

# Then redeploy
vercel --prod
