import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/fragrances/${slug}`)
      if (res.ok) setProduct(await res.json())
    }
    load()
  }, [slug])

  const addToCart = async () => {
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const sessionId = localStorage.getItem('session_id') || crypto.randomUUID()
      localStorage.setItem('session_id', sessionId)
      const res = await fetch(`${base}/api/cart/${sessionId}/items/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: qty })
      })
      if (res.ok) setStatus('Added to cart')
      else setStatus('Failed to add')
    } catch (e) {
      setStatus('Network error')
    }
  }

  if (!product) return <div className="min-h-screen bg-black text-zinc-200 flex items-center justify-center">Loading...</div>

  return (
    <div className="bg-black text-zinc-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">
        <div className="aspect-[4/5] bg-gradient-to-br from-zinc-900 to-black rounded-lg border border-zinc-800 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-zinc-800/60" style={{ boxShadow: `0 0 120px ${product.color_hex || '#222'}` }} />
        </div>
        <div>
          <h1 className="font-serif text-4xl">{product.name}</h1>
          {product.variant && <p className="text-emerald-300 mt-1">{product.variant}</p>}
          <p className="text-zinc-400 mt-4 leading-relaxed">{product.description}</p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <NoteList title="Top" items={product.top_notes} />
            <NoteList title="Heart" items={product.heart_notes} />
            <NoteList title="Base" items={product.base_notes} />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-emerald-300 text-xl">${product.price.toFixed(0)}</span>
            <input type="number" min={1} value={qty} onChange={e=>setQty(parseInt(e.target.value)||1)} className="w-20 bg-zinc-900 border border-zinc-800 rounded px-2 py-1" />
            <button onClick={addToCart} className="px-6 py-3 rounded bg-emerald-800 text-emerald-100 hover:bg-emerald-700">Add to cart</button>
            {status && <span className="text-sm text-zinc-500">{status}</span>}
          </div>

          {product.mythology && (
            <div className="mt-10">
              <h3 className="font-serif text-2xl">Mythology</h3>
              <p className="text-zinc-400 mt-2">{product.mythology}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function NoteList({ title, items }) {
  return (
    <div>
      <h4 className="uppercase tracking-widest text-xs text-zinc-500">{title} Notes</h4>
      <ul className="mt-2 text-zinc-300 space-y-1 list-disc list-inside">
        {items?.map((n, i)=> <li key={i}>{n}</li>)}
      </ul>
    </div>
  )
}
