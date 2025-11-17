import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Footer from './components/Footer'
import CollectionGrid from './components/CollectionGrid'
import ProductDetail from './components/ProductDetail'

function HomePage() {
  return (
    <main className="bg-black text-zinc-100">
      <Hero />
      <Story />
      <CollectionGrid />
    </main>
  )
}

function CollectionPage() {
  return (
    <main className="pt-24 bg-black text-zinc-100">
      <CollectionGrid />
    </main>
  )
}

function AboutPage() {
  return (
    <main className="pt-24 bg-zinc-950 text-zinc-200 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl">Seven Sins, Eight Portals</h1>
        <p className="mt-6 text-zinc-400 leading-relaxed">A modern interpretation of the medieval deadly sins through perfumery. Each bottle is an emblem, each accord a morality play of aroma.</p>
      </section>
    </main>
  )
}

function ContactPage() {
  return (
    <main className="pt-24 bg-zinc-950 text-zinc-200 min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl">Contact</h1>
        <p className="mt-6 text-zinc-400">For wholesale and press inquiries: contact@oblivionparfums.example</p>
      </section>
    </main>
  )
}

function CartPage() {
  return (
    <main className="pt-24 bg-zinc-950 text-zinc-200 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl">Your Cart</h1>
        <p className="mt-6 text-zinc-400">Add items from any product page. Checkout integrates with a secure gateway in the next step.</p>
      </section>
    </main>
  )
}

function AppRouter() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppRouter
