import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { Hero } from "@/components/sections/Hero"
import { StatisticsRow } from "@/components/sections/StatisticsRow"
import { IsoIdentityBanner } from "@/components/sections/IsoIdentityBanner"
import { ProductOverview } from "@/components/sections/ProductOverview"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <StatisticsRow />
        <IsoIdentityBanner />
        <ProductOverview />
      </main>
      <SiteFooter />
    </div>
  )
}
