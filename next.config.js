/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:"http://65.0.71.73:4000/:path*"
      }
    ]
  }
};

module.exports = nextConfig
