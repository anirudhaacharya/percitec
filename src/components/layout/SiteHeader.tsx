import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navItems = [
  { label: "Home", href: "#" },
  { label: "Company", href: "#company" },
  { label: "Products", href: "#products" },
  { label: "Software", href: "#software" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-6 mx-auto">
        <div className="text-xl font-bold uppercase tracking-wide text-gray-800">
          Percitec Machines
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle() + " uppercase tracking-wide text-gray-800 hover:text-blue-600"}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
