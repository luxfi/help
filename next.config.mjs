/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/help',
  assetPrefix: '/help/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
