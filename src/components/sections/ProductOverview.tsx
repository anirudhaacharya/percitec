import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const products = [
  {
    title: "CNC Turning Centers",
    description:
      "High-precision turning solutions for complex components with advanced automation capabilities.",
  },
  {
    title: "Vertical Machining Centers",
    description:
      "Versatile VMCs designed for accuracy and efficiency in multi-axis milling operations.",
  },
  {
    title: "Precision Grinders",
    description:
      "State-of-the-art grinding machines delivering micron-level surface finishes.",
  },
  {
    title: "Automation Software",
    description:
      "Integrated control systems and intelligent software for optimized production workflows.",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored machining systems engineered to meet specific industry requirements.",
  },
  {
    title: "Service & Support",
    description:
      "Comprehensive maintenance, training, and technical support services worldwide.",
  },
]

export function ProductOverview() {
  return (
    <section id="products" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Product Range
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
