// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';

// font variables created by next
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata = {
  title: 'Jamelle Messinger',
  description: 'Official Portfolio by Jamelle Messinger',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // ${geistSans.variable} ${geistMono.variable} may use these to import fonts later mayber?
        className={`antialiased bg-[#f5f5f5]`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
