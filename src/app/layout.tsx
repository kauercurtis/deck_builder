import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deck Builder",
  description: "Magic the Gathering and Yugioh deck builder. By Curtis Kauer",
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
