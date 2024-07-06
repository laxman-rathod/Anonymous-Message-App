import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anonymous Message - Tell them what you really think. Anonymously. 😉",
  description:
    "Send anonymous messages to anyone - confessions, jokes, feedback - the possibilities are endless! 😉 Sign up is quick & easy, and your identity stays hidden.🤫 Start messaging anonymously now! ➡️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
