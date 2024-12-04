import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: "Wholesale - Harshitha Silver Works",
  description: "Exclusive wholesale offers for silver products. Best deals for retailers and bulk buyers in Tenali, Vijayawada, and Guntur district.",
}

const wholesaleOffers = [
  {
    title: "Silver Starter Pack",
    description: "Perfect for new retailers",
    price: 49999,
    items: [
      "10 Silver Water Glasses",
      "10 Traditional Silver Plates",
      "5 Designer Silver Bowls",
      "5 Silver Serving Spoons"
    ]
  },
  {
    title: "Silver Pro Bundle",
    description: "Ideal for established businesses",
    price: 99999,
    items: [
      "20 Silver Water Glasses",
      "20 Traditional Silver Plates",
      "10 Designer Silver Bowls",
      "10 Silver Serving Spoons",
      "5 Decorative Silver Vases",
      "2 Silver Tea Cup Sets"
    ]
  },
  {
    title: "Custom Wholesale Package",
    description: "Tailored to your specific needs",
    price: null,
    items: [
      "Choose your own product mix",
      "Customizable quantities",
      "Option for custom designs",
      "Flexible pricing based on order size"
    ]
  }
]

export default function WholesalePage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Wholesale Offers</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Exclusive bundle deals for retailers and bulk buyers. Get the best prices on our premium silver products.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wholesaleOffers.map((offer, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{offer.description}</p>
              {offer.price ? (
                <p className="text-3xl font-bold">₹{offer.price.toLocaleString()}</p>
              ) : (
                <p className="text-3xl font-bold">Custom Pricing</p>
              )}
              <ul className="mt-4 space-y-2">
                {offer.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/bulk-orders">Inquire Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Wholesale Program?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p className="text-muted-foreground">Get the best rates for bulk purchases, allowing for higher profit margins.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground">All our products are crafted with the finest silver, ensuring customer satisfaction.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Options</h3>
            <p className="text-muted-foreground">Choose from our curated bundles or create your own custom package.</p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-muted-foreground mb-6">Contact us today to discuss your wholesale needs and get a personalized quote.</p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Our Wholesale Team</Link>
        </Button>
      </div>
    </div>
  )
}

