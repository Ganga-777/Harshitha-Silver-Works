import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Harshitha Silver Works</h3>
            <p className="text-sm text-muted-foreground">
              Best silverware shop in Tenali, Andhra Pradesh. Traditional and modern silver designs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/bulk-orders" className="text-sm text-muted-foreground hover:text-primary">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="text-sm text-muted-foreground hover:text-primary">
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              Gandhi Chowk Rd<br />
              Tenali, Andhra Pradesh<br />
              India - 522201<br />
              <a href="tel:+919052011805" className="hover:text-primary">+91 90520 11805</a><br />
              <a href="mailto:info@harshithasilverworks.com" className="hover:text-primary">info@harshithasilverworks.com</a>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <p className="text-sm text-muted-foreground">
              Monday - Saturday<br />
              10:00 AM - 8:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Harshitha Silver Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

