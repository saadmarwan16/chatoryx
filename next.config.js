/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        root: ["."],
        alias: {
          "@app": "./app",
        },
      },
    ],
    "babel-plugin-macros",
    "superjson-next",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
};

module.exports = nextConfig;
