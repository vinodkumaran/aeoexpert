/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/experience/saas-ecommerce',
        destination: '/experience/saas',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
