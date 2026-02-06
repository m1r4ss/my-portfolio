import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "MIrasz Zhandosov. UX/UI Designer based in Almaty.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/portfolio/favicon.svg",
    shortcut: "/assets/portfolio/favicon.svg",
    apple: "/assets/portfolio/favicon.svg",
  },
  openGraph: {
    title: "My Portfolio",
    description: "MIrasz Zhandosov. UX/UI Designer based in Almaty.",
    images: [
      {
        url: "https://framerusercontent.com/images/QJCtVfL4Wzh0iQKomwQGMiJQrys.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "MIrasz Zhandosov. UX/UI Designer based in Almaty.",
    images: ["https://framerusercontent.com/images/QJCtVfL4Wzh0iQKomwQGMiJQrys.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N5S938EQ20"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N5S938EQ20');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
