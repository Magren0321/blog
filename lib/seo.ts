export const seo = {
  title:`Magren's Blog`,
  description:
    'Idealist & Garbage maker 🛸',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://magren.cc'
      : 'http://localhost:3000'
  ),
} as const
