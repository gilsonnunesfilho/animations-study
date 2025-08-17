import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/**",
      ),
    ],
  },
}

export default nextConfig
