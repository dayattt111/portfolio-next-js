/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/assets/',
              outputPath: 'static/assets/',
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  