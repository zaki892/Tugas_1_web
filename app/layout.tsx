import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sistem Pakar Jurusan Kuliah",
  description: "Temukan jurusan yang tepat berdasarkan minat dan bakat Anda",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
