import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Script from "next/script"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Harshitha Silver Works - Best Silverware Shop in Tenali, Andhra Pradesh",
    template: "%s | Harshitha Silver Works"
  },
  description: "Premium silverware crafted in Tenali. Best silver shop for plates, glasses, and custom designs in Andhra Pradesh. Top supplier in Guntur district.",
  keywords: ["silverware", "silver shop", "Tenali", "Andhra Pradesh", "silver plates", "silver glasses", "custom silver designs", "Guntur district"],
  authors: [{ name: "Harshitha Silver Works" }],
  creator: "Harshitha Silver Works",
  publisher: "Harshitha Silver Works",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-vercel-project-name.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Harshitha Silver Works - Premium Silverware in Tenali",
    description: "Best silverware shop in Tenali, Andhra Pradesh. Traditional and modern silver designs for plates, glasses, and custom orders.",
    url: 'https://your-vercel-project-name.vercel.app',
    siteName: 'Harshitha Silver Works',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Harshitha Silver Works - Premium Silverware in Tenali",
    card: 'summary_large_image',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your Google verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen bg-gradient-to-br from-background via-accent/5 to-background"
      )}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

