import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScreenFrame } from '@/components/layout/screen-frame';

export const metadata: Metadata = {
  title: 'Intern Us',
  description: 'Intelligently matching students with their future careers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ScreenFrame>
          <Header />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          <Footer />
        </ScreenFrame>
        <Toaster />
      </body>
    </html>
  );
}
