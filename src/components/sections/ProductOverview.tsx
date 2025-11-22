import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const products = [
  {
    title: "Turning Centers",
    slug: "turning-center",
    description: "Rigid, high-speed lathes delivering consistent concentricity across complex runs.",
  },
  {
    title: "VMCs",
    slug: "vmc",
    description: "Vertical machining centers optimized for accuracy, chip control, and uptime.",
  },
  {
    title: "Grinders",
    slug: "grinder",
    description: "Precision grinding solutions with micron-level finishes and thermal stability.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" },
  }),
}

export function ProductOverview() {
  const navigate = useNavigate()

  return (
    <section id="products" className="bg-slate-50 py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Precision lineup</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Our Machines</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Select a platform to explore configurations, capacities, and automation options.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/products/${product.slug}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") navigate(`/products/${product.slug}`)
                }}
                className="h-full cursor-pointer border border-border/60 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
