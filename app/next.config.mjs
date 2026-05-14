/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export — site has no SSR/API routes, all pages prerender.
  // Lets Amplify host it as plain S3+CloudFront (cheaper than WEB_COMPUTE).
  output: "export",

  // next/image needs the default loader OR unoptimized for static export.
  // Our images are already pre-optimised webp at the right sizes via cwebp.
  images: {
    unoptimized: true,
  },

  trailingSlash: false,
};

export default nextConfig;
