/** @type {import('next').NextConfig} */
const nextConfig = {};
const config = {
    reactStrictMode: true,
    experimental: { externalDir: true, topLevelAwait: true },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      })
      return config
    }
  }

export default nextConfig;
