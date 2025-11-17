import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, Skull } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 text-sm uppercase tracking-widest transition-colors ${
          isActive ? 'text-emerald-300' : 'text-zinc-300 hover:text-emerald-200'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur border-b border-zinc-800/60 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Skull className="text-zinc-100" size={22} />
          <span className="font-serif text-zinc-100 tracking-wide text-lg">Oblivion Parfums</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItem({ to: '/collection', label: 'Collection' })}
          {navItem({ to: '/about', label: 'About' })}
          {navItem({ to: '/contact', label: 'Contact' })}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/cart" className="text-zinc-200 hover:text-emerald-200 transition-colors">
            <ShoppingBag />
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden text-zinc-200">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/90">
          <div className="px-4 py-3 flex flex-col">
            <Link to="/collection" className="py-2 text-zinc-300" onClick={() => setOpen(false)}>Collection</Link>
            <Link to="/about" className="py-2 text-zinc-300" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" className="py-2 text-zinc-300" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
