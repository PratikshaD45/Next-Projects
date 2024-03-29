import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMenu } from "@/components/header/HeaderMenu";
import { FooterLinks } from "@/components/FooterLinks";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratiksha Darekar",
  description: "My first next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider><HeaderMenu />{children}<FooterLinks /></MantineProvider>
      </body>
    </html>
  );
}
