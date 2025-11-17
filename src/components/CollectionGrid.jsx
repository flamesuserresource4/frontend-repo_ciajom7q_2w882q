import { useEffect, useState } from 'react'

export default function CollectionGrid() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/fragrances`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section className="bg-zinc-950 text-zinc-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-5xl mb-10">The Collection</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p) => (
            <a key={p.slug} href={`/product/${p.slug}`} className="group border border-zinc-800 rounded-lg overflow-hidden hover:border-emerald-700/60 transition-colors">
              <div className="aspect-[4/5] bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border border-zinc-800/60" style={{ boxShadow: `0 0 80px ${p.color_hex || '#222'}` }} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-zinc-100">{p.name}</h3>
                  <span className="text-emerald-300">${p.price.toFixed(0)}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
