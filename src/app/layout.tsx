import type { Metadata } from "next";
import "./globals.css";

// Note: Acumin Variable Condensed needs to be loaded via Adobe Fonts or local files
// For now, using system fallbacks that closely match Acumin's condensed style

export const metadata: Metadata = {
  title: "Healthyogi Store",
  description: "Healthyogi Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
