export const emailConfig = {
  from: 'magren.cc',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://magren.cc`
      : 'http://localhost:3000',
}
