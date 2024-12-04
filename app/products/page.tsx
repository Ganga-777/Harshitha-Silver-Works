import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Silver Collection | Harshitha Silver Works",
  description: "Explore our premium silver collection. Best silverware in Tenali, including silver plates, glasses, and custom designs. Top quality silver products in Andhra Pradesh.",
  keywords: ["silver collection", "silverware", "Tenali", "Andhra Pradesh", "silver plates", "silver glasses", "custom silver designs"],
}

export default function ProductsPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Silver Collection</h1>
      <p className="text-lg mb-8">Discover the finest silverware crafted in Tenali, Andhra Pradesh. Our collection features exquisite silver plates, glasses, and custom designs, perfect for every occasion.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
    </div>
  )
}

