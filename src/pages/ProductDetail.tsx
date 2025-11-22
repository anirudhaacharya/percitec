import { Button } from "@/components/ui/button"
import { Link, useParams } from "react-router-dom"

const productCopy: Record<string, { title: string; summary: string }> = {
  "turning-center": {
    title: "Turning Centers",
    summary: "High-speed CNC lathes engineered for accuracy, chip evacuation, and automation-ready workflows.",
  },
  vmc: {
    title: "Vertical Machining Centers",
    summary: "Stiff castings, thermal stability, and intelligent controls for repeatable milling performance.",
  },
  grinder: {
    title: "Precision Grinders",
    summary: "Micron-level grinding solutions with advanced coolant and vibration damping systems.",
  },
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = (id && productCopy[id]) || {
    title: "Product",
    summary: "Explore our precision machine tools built for industrial reliability.",
  }

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col gap-6 px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Product detail</p>
      <h1 className="text-4xl font-bold text-foreground md:text-5xl">{product.title}</h1>
      <p className="max-w-3xl text-lg text-muted-foreground">{product.summary}</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
        <Button variant="outline">Request a quote</Button>
      </div>
    </div>
  )
}
