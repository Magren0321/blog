export const emailConfig = {
  from: 'Magren <onboarding@resend.dev>',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://magren.cc`
      : 'http://localhost:3000',
}
