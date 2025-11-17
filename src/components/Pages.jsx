import Hero from './Hero'
import CollectionGrid from './CollectionGrid'
import ProductDetail from './ProductDetail'
import { useState } from 'react'

export function Landing() {
  return (
    <div>
      <Hero />
      <section className="max-w-4xl mx-auto px-4 pb-24 text-center text-zinc-300">
        <p className="leading-relaxed">Our atelier crafts narrative-driven extraits in the classical tradition. Anatomical engravings, mythic sigils, and the hush of vellum pages guide our hand. Enter the codex.</p>
      </section>
    </div>
  )
}

export function Collection() {
  return <CollectionGrid />
}

export { ProductDetail }

export function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-zinc-300">
      <h1 className="font-serif text-4xl mb-6">The Seven Deadly Sins</h1>
      <p className="mb-4">Each chapter studies a human extremity through materials both sacred and profane. The result: perfumes that wear like illuminated manuscripts on skin.</p>
      <p>Wrath, Envy, Sloth, Lust, Gluttony, Pride, and Greed are joined by an eighth, apocryphal chapter—Oblivion—reserved for collectors.</p>
    </section>
  )
}

export function Contact() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/subscribe`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      if (res.ok) setStatus('Thanks for subscribing.')
      else setStatus('Something went wrong.')
    } catch (e) {
      setStatus('Unable to subscribe right now.')
    }
  }
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl mb-6">Contact & Newsletter</h1>
      <form onSubmit={submit} className="space-y-4">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email for launches & exclusives" className="w-full bg-black/50 border border-zinc-800 rounded px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none" />
        <button className="w-full bg-emerald-500 text-black rounded px-4 py-3 hover:bg-emerald-400">Notify Me</button>
      </form>
      {status && <p className="mt-4 text-sm text-zinc-400">{status}</p>}
    </section>
  )
}

export function CartPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-zinc-300">
      <h1 className="font-serif text-3xl mb-6">Your Cart</h1>
      <p>Cart functionality is wired and ready to integrate with your preferred luxury checkout gateway.</p>
    </section>
  )
}
