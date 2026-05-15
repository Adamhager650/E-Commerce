import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const productImages = [
  '/images/product-1.png',
  '/images/product-2.png',
  '/images/product-3.png',
  '/images/product-4.png',
  '/images/product-5.jpg',
  '/images/product-6.jpg',
  '/images/product-1.png',
  '/images/product-2.png',
]

export default function ProductShowcase() {
  const stageRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const carousel = carouselRef.current
    if (!stage || !carousel) return

    const ctx = gsap.context(() => {
      gsap.to(carousel, {
        rotationY: -360,
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '.product-viewport',
          anticipatePin: 1,
        },
      })
    }, stage)

    return () => ctx.revert()
  }, [])

  return (
    <section id="product" ref={stageRef} className="product-stage">
      <div className="product-viewport">
        {/* Left Text */}
        <div
          className="absolute left-10 top-1/2 -translate-y-1/2 z-20 max-w-xs hidden md:block"
          style={{ color: 'var(--offwhite)' }}
        >
          <h3 className="text-4xl font-light mb-4">Never Stop Growing.</h3>
          <p className="opacity-80 text-sm leading-relaxed">
            Engineered for continuous yield. The vertical hydroponic towers rotate
            automatically, ensuring every leaf receives optimal light exposure.
          </p>
        </div>

        {/* Right Text */}
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 text-right hidden md:block"
          style={{ color: 'var(--offwhite)' }}
        >
          <div className="text-5xl font-bold mb-2">$449</div>
          <div className="text-sm opacity-70 uppercase tracking-widest">
            Starting Price
          </div>
        </div>

        {/* 3D Scene */}
        <div className="scene">
          <div ref={carouselRef} className="carousel" id="productCarousel">
            {productImages.map((src, i) => (
              <div className="carousel__cell" key={i}>
                <img src={src} alt={`Product View ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Title */}
        <div
          className="absolute bottom-10 left-0 w-full text-center md:hidden"
          style={{ color: 'var(--offwhite)' }}
        >
          <h3 className="text-2xl font-light">Never Stop Growing.</h3>
        </div>
      </div>
    </section>
  )
}