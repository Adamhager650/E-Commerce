import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const plantRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const plant = plantRef.current
    if (!hero || !plant) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25
      const y = (window.innerHeight / 2 - e.clientY) / 25
      plant.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.1)`
    }

    const handleMouseLeave = () => {
      plant.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'
    }

    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--coral)' }}
    >
      {/* 3D Plant Layer */}
      <div className="hero-plant-container absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          ref={plantRef}
          src="/images/hero-plant.png"
          alt="3D Plant"
          className="hero-plant-img w-[40vw] max-w-[600px] opacity-90"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Text Layer */}
      <div className="relative z-10 text-center">
        <h1
          className="text-hero select-none"
          style={{ color: 'var(--charcoal)' }}
        >
          Botanic.
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-0 w-full text-center text-sm tracking-widest uppercase animate-bounce"
        style={{ color: 'var(--charcoal)', opacity: 0.6 }}
      >
        Scroll to Explore
      </div>
    </section>
  )
}