import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Family Hub',
  description: 'A simple Fresno and Clovis family events MVP.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
