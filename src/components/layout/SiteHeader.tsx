import { Link } from "react-router-dom"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/#company" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold uppercase tracking-wide text-foreground">
          Precitec
        </Link>

        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
