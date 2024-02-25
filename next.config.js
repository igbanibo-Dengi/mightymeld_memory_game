// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// Base plugin config needed by Next.js
const { pluginoptions } = require("@mightymeld/runtime");

const nextConfig = {
  experimental: {
    swcPlugins: [
      ["@mightymeld/runtime/swc-plugin-mightymeld", pluginoptions()],
    ],
  },
};

module.exports = process.env.MIGHTYMELD ? nextConfig : {};
