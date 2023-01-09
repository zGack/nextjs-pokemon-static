/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, /* duplicidad de impresiones en el log */
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
