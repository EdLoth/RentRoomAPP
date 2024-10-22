import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";

const font = Nunito({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "RentRoom",
  description: "Ache o lugar ideal para sua aventura! ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
