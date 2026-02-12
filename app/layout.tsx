import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zenith Pulse - AI Automation & Development Services',
  description: 'Expert AI development services: voice assistants, automation systems, and cloud infrastructure. Reduce costs by 90%, deploy in 2-4 weeks. Book a free consultation.',
  generator: 'v0.app',
  icons: {
    icon: '/zenith-pulse-logo.png',
    apple: '/zenith-pulse-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
