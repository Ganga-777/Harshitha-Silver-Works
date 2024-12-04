import { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Harshitha Silver Works - Premium Silverware in Tenali",
  description: "Learn about Harshitha Silver Works, the best silverware shop in Tenali, Andhra Pradesh. Discover our history, craftsmanship, and commitment to quality.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">About Harshitha Silver Works</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-lg mb-4">
            Harshitha Silver Works has been a cornerstone of quality silverware in Tenali, Andhra Pradesh for over three generations. Founded in 1952 by our grandfather, we have maintained a tradition of excellence in craftsmanship and design.
          </p>
          <p className="text-lg mb-4">
            As the top supplier of silver plates and glasses in the Guntur district, we take pride in offering both traditional and modern silver designs that cater to diverse tastes and occasions.
          </p>
          <p className="text-lg mb-4">
            Our commitment to quality and customer satisfaction has made us the best silverware shop in Tenali, with a reputation that extends to Vijayawada and beyond.
          </p>
        </div>
        <div className="relative h-[300px] md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Harshitha Silver Works Workshop"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
            <p>We use only the finest silver and employ skilled artisans to create exquisite pieces that last generations.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p>Your happiness is our priority. We strive to exceed expectations in every interaction and product we offer.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>While respecting tradition, we continuously innovate to bring you modern designs that meet contemporary needs.</p>
          </CardContent>
        </Card>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Process</h2>
      <div className="grid gap-6 md:grid-cols-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">1</div>
          <h3 className="font-semibold mb-2">Design</h3>
          <p className="text-sm">We create or adapt designs to meet your specific needs and preferences.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">2</div>
          <h3 className="font-semibold mb-2">Crafting</h3>
          <p className="text-sm">Our skilled artisans bring the designs to life using traditional and modern techniques.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">3</div>
          <h3 className="font-semibold mb-2">Quality Check</h3>
          <p className="text-sm">Each piece undergoes rigorous quality checks to ensure it meets our high standards.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">4</div>
          <h3 className="font-semibold mb-2">Delivery</h3>
          <p className="text-sm">We carefully package and deliver your silverware, ensuring it reaches you in perfect condition.</p>
        </div>
      </div>
    </div>
  )
}

