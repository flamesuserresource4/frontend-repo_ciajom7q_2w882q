export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-zinc-100">Oblivion Parfums</h4>
          <p className="mt-3 text-sm text-zinc-500">Fine niche perfumery crafted for collectors and storytellers.</p>
        </div>
        <div>
          <h5 className="uppercase tracking-widest text-xs text-zinc-500">Explore</h5>
          <ul className="mt-3 space-y-2">
            <li><a href="/collection" className="hover:text-zinc-200">Collection</a></li>
            <li><a href="/about" className="hover:text-zinc-200">About</a></li>
            <li><a href="/contact" className="hover:text-zinc-200">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase tracking-widest text-xs text-zinc-500">Follow</h5>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-zinc-200">Instagram</a></li>
            <li><a href="#" className="hover:text-zinc-200">Twitter</a></li>
            <li><a href="#" className="hover:text-zinc-200">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase tracking-widest text-xs text-zinc-500">Newsletter</h5>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Oblivion Parfums. All rights reserved.
      </div>
    </footer>
  )
}

import { useState } from 'react'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (res.ok) setStatus('Subscribed. Check your inbox for a welcome.')
      else setStatus('Failed to subscribe.')
    } catch (e) {
      setStatus('Network error.')
    }
  }

  return (
    <form onSubmit={submit} className="mt-3 flex gap-2">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 bg-zinc-900 border border-zinc-800 text-zinc-100 px-3 py-2 rounded outline-none focus:ring-1 focus:ring-emerald-600"
      />
      <button className="px-4 py-2 rounded bg-emerald-800 text-emerald-100 hover:bg-emerald-700">Join</button>
      {status && <p className="text-xs text-zinc-500 mt-2">{status}</p>}
    </form>
  )
}
