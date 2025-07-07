import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import SchematicProvider from "@/components/SchematicProvider";
import DMButton from "@/components/DMButton";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patreo NextJS Build",
  description: "Patreo NextJS Build Educational Build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <SchematicProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header />
            {children}

            <div className="fixed bottom-4 right-4">
              <DMButton />
            </div>

            <Toaster position="bottom-center" />
          </body>

          <SanityLive />
        </SchematicProvider>
      </html>
    </ClerkProvider>
  );
}
