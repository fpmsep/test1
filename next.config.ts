/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This tells Next.js to generate HTML files
  basePath: "/test1", // Replace 'test1' with your exact repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

module.exports = nextConfig;
