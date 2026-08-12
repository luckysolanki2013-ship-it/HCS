import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'HCS | Hubooze Consultancy Services', template: '%s | HCS' },
  description: 'Hubooze Consultancy Services — business advisory, e-commerce consulting, performance marketing and digital transformation.',
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
