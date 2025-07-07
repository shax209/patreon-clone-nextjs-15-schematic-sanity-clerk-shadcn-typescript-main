import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patreo NextJS Build - Admin",
  description: "Patreo NextJS Build Educational Build - Admin",
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
