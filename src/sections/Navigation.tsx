import { useEffect, useRef, useState } from 'react'
import { Search, ShoppingBag } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--charcoal)]/80 backdrop-blur-md'
          : 'mix-blend-difference'
      }`}
      style={{ color: 'var(--offwhite)' }}
    >
      <div className="text-2xl font-bold tracking-tighter">BOTANIC</div>

      <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
        <a href="#hero" className="hover:opacity-70 transition-opacity">
          Discover
        </a>
        <a href="#biophilic" className="hover:opacity-70 transition-opacity">
          Features
        </a>
        <a href="#product" className="hover:opacity-70 transition-opacity">
          Product
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
      </div>
    </nav>
  )
}