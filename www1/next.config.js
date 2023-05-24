/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  output: "standalone",

  pageExtensions: [ "page.tsx", "api.ts" ],

  i18n: {
    locales: ["en", "ru", "bg"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig
