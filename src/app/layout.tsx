import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Rey Street Food",
  description: "Authentic Mexican street food website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
