import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google';
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

const font = Nunito({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "RentRoom | O lugar perfeito para você!",
  description: "Ache o lugar ideal para sua aventura!",
  icons: {
    icon: '/images/logo1x.png', // Verifique se o caminho está correto
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo1x.png" />
      </head>
      <body className={`${font.className} antialiased`}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
