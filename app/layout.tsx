import './globals.css'
import type { Metadata } from 'next'
import { Navbar,Footer} from '@/components'
export const metadata: Metadata = {
  title: 'CarFlix',
  description:'Discover best cars in pakistan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
