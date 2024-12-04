import Link from "next/link"
import { ShoppingCart, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Harshitha Silver Works</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="hover:text-primary" href="/products">Products</Link>
          <Link className="hover:text-primary" href="/bulk-orders">Bulk Orders</Link>
          <Link className="hover:text-primary" href="/wholesale">Wholesale</Link>
          <Link className="hover:text-primary" href="/about">About</Link>
          <Link className="hover:text-primary" href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link className="hover:text-primary" href="/products">Products</Link>
                <Link className="hover:text-primary" href="/bulk-orders">Bulk Orders</Link>
                <Link className="hover:text-primary" href="/wholesale">Wholesale</Link>
                <Link className="hover:text-primary" href="/about">About</Link>
                <Link className="hover:text-primary" href="/contact">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

