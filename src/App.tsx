import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { LandingPage } from "@/pages/LandingPage"
import { ProductDetail } from "@/pages/ProductDetail"
import { Outlet, Route, Routes } from "react-router-dom"

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default App
