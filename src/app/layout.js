import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'AKNIMELIST',
  description: 'WEBSITE LIST ANIME',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
      
      <Navbar />
      {children}
    </body>
    </html>
  )
}
