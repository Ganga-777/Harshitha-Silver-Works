import { notFound } from "next/navigation"
import Image from "next/image"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }))
}

export default function ProductPage({ params }: { params: { productId: string } }) {
  const product = products.find((p) => p.id === params.productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold">₹{product.price.toLocaleString()}</p>
          <p className="text-zinc-500 dark:text-zinc-400">{product.description}</p>
          <div className="flex gap-4">
            <Button size="lg">Add to Cart</Button>
            <Button size="lg" variant="outline">Add to Wishlist</Button>
          </div>
          <div className="border-t pt-4 mt-4">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Category: {product.category}</li>
              <li>Material: Pure Silver</li>
              <li>Handcrafted in Tenali, Andhra Pradesh</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

