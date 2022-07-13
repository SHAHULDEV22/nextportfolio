/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: false,
    },
  },
  basePath: '/nextportfolio',
  assetPrefix: '/nextportfolio'
}