import "./globals.css";

export const metadata = {
  title: "VkMakt",
  description: "VKMakt - Building the future through innovation and technology.",
  icons: {
    icon: "/hardware.png", // standard favicon
    shortcut: "/hardware.png", // optional smaller icon
    apple: "/hardware.png", // for iOS
  },
  manifest: "/site.webmanifest", // optional, for PWA setup
  openGraph: {
    title: "VkMakt",
    description: "VKMakt - Building the future through innovation and technology.",
    url: "https://yourwebsite.com",
    siteName: "VkMakt",
    images: [
      {
        url: "/hardware.png", // social share image
        width: 1200,
        height: 630,
        alt: "Website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
