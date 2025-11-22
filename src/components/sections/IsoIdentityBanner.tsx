import { Settings, Wrench } from "lucide-react"

export function IsoIdentityBanner() {
  return (
    <section className="bg-[#0047AB] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 justify-center">
        <div className="flex-shrink-0">
          <Settings size={48} className="opacity-80" />
        </div>

        <div className="max-w-3xl text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold uppercase mb-2">
            ISO Certified Manufacturing Excellence
          </h2>
          <p className="text-base leading-relaxed italic">
            Committed to delivering precision-engineered solutions that meet the highest international standards. Our state-of-the-art facilities combine decades of expertise with cutting-edge technology to serve industries worldwide.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Wrench size={48} className="opacity-80 rotate-12" />
        </div>
      </div>
    </section>
  )
}
