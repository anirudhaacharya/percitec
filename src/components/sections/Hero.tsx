import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative min-h-[75vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Precision Engineering Excellence
        </h1>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          Leading manufacturer of high-precision machine tools, delivering innovative solutions for turning, milling, and grinding applications across industries worldwide.
        </p>
        <Button
          size="lg"
          className="bg-industrialBlue hover:bg-industrialBlue/90"
          onClick={() => {
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Discover More
        </Button>
      </div>
    </section>
  )
}
