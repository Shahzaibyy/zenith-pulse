import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Zenith Pulse - AI Automation & Development Services',
  description: 'Expert AI development services: voice assistants, automation systems, and cloud infrastructure. Reduce costs by 90%, deploy in 2-4 weeks. Book a free consultation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
