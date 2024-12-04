import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Link href={`/products/${id}`}>
          <div className="group premium-card hover:scale-[1.02] transition-all duration-300">
            <div className="relative aspect-square">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-t-xl"
              />
              <div className="shine-effect" />
            </div>
            <div className="p-4 glass-effect rounded-b-xl">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-accent font-medium">₹{price.toLocaleString()}</p>
            </div>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          <Link href={`/products/${id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

