export const emailConfig = {
  from: 'zhuhenglin21@gmail.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://magren.cc`
      : 'http://localhost:3000',
}
