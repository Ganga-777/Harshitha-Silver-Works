import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { products } from "@/data/products"
import Script from "next/script"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Harshitha Silver Works",
  "image": "https://your-vercel-project-name.vercel.app/images/logo.jpg",
  "@id": "https://your-vercel-project-name.vercel.app",
  "url": "https://your-vercel-project-name.vercel.app",
  "telephone": "+919052011805",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gandhi Chowk Rd",
    "addressLocality": "Tenali",
    "postalCode": "522201",
    "addressRegion": "Andhra Pradesh",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 16.2433,
    "longitude": 80.6333
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/harshithasilverworks",
    "https://www.instagram.com/harshithasilverworks"
  ]
}

export default function Home() {
  return (
    <>
      <Script
        id="structured-data-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex flex-col gap-8">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Premium Silverware in Tenali
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-primary-foreground/90 md:text-xl">
                Traditional and modern silver designs crafted with excellence. Best silverware shop in Tenali, Andhra Pradesh.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">View Our Collection</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-6 py-8">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </section>

        <section className="container px-4 md:px-6 py-8 bg-muted">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p>Premium quality silver products with certification</p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
              <p>Personalized designs as per your requirements</p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="text-xl font-bold mb-2">Wholesale Available</h3>
              <p>Special prices for bulk orders and wholesale</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

