import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-20 w-[60rem] h-[60rem] rounded-full bg-emerald-700/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-[60rem] h-[60rem] rounded-full bg-red-900/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="font-serif text-5xl md:text-6xl tracking-tight">
          A Codex of Sin and Scent
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:0.8}} className="mt-6 text-zinc-300 max-w-2xl mx-auto">
          Eight chapters. Seven sins and the abyssal collector's edition: Oblivion. Hand-crafted extraits for those who collect stories as much as scent.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} className="mt-10 flex items-center justify-center gap-4">
          <a href="/collection" className="bg-emerald-500 text-black px-6 py-3 rounded-md font-medium hover:bg-emerald-400 transition">Explore the Collection</a>
          <a href="/about" className="border border-zinc-700 px-6 py-3 rounded-md hover:border-zinc-500 transition">Read the Mythology</a>
        </motion.div>
      </div>
    </section>
  )
}
