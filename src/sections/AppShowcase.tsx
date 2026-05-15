import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Smartphone, Activity, Droplets } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const appScreens = [
  '/images/app-screen-1.jpg',
  '/images/app-screen-2.jpg',
  '/images/app-screen-3.jpg',
]

const features = [
  {
    icon: Smartphone,
    title: 'Remote Control',
    description:
      'Adjust lighting schedules, water cycles, and nutrient delivery directly from your pocket. Full control, anywhere in the world.',
    color: 'var(--coral)',
    target: 0,
  },
  {
    icon: Activity,
    title: 'Growth Tracking',
    description:
      'AI-powered camera analysis tracks the height, width, and health of your plants daily, providing visual growth timelines.',
    color: 'var(--neongreen)',
    target: 1,
  },
  {
    icon: Droplets,
    title: 'Smart Alerts',
    description:
      'Get notified exactly when water is low or nutrients need replenishing. Never guess, never waste. Precision gardening at its finest.',
    color: '#3B82F6',
    target: 2,
  },
]

export default function AppShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const screenRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const featureEls = section.querySelectorAll('.app-feature')
    const screens = screenRefs.current

    const ctx = gsap.context(() => {
      featureEls.forEach((feature) => {
        const targetIndex = feature.getAttribute('data-target')

        ScrollTrigger.create({
          trigger: feature,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) {
              screens.forEach((screen) => {
                if (screen) screen.classList.remove('active')
              })
              const targetScreen = screens[Number(targetIndex)]
              if (targetScreen) targetScreen.classList.add('active')
            }
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="app"
      ref={sectionRef}
      className="w-full min-h-screen py-20"
      style={{ backgroundColor: 'var(--offwhite)' }}
    >
      <div className="container mx-auto px-10 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Sticky Phone */}
          <div className="relative flex justify-center">
            <div
              className="phone-mockup w-[300px] h-[600px] rounded-[40px] p-4 shadow-2xl border-4"
              style={{
                backgroundColor: 'var(--charcoal)',
                borderColor: '#374151',
              }}
            >
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                {appScreens.map((src, i) => (
                  <div
                    key={i}
                    ref={(el) => { screenRefs.current[i] = el }}
                    className={`app-screen ${i === 0 ? 'active' : ''}`}
                    data-index={i}
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                      alt={`App Screen ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
              {/* Notch */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-xl"
                style={{ backgroundColor: 'var(--charcoal)' }}
              />
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="flex flex-col justify-center space-y-32 py-32">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="app-feature"
                  data-target={feature.target}
                >
                  <div className="flex items-center mb-4">
                    <Icon
                      className="w-8 h-8 mr-4"
                      style={{ color: feature.color }}
                    />
                    <h3
                      className="text-3xl font-bold"
                      style={{ color: 'var(--charcoal)' }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: 'var(--charcoal)', opacity: 0.7 }}
                  >
                    {feature.description}
                  </p>
                </div>
              )
            })}

            <div className="pt-10">
              <button
                className="px-10 py-4 rounded-full text-lg font-semibold transition-colors hover:opacity-90"
                style={{
                  backgroundColor: 'var(--charcoal)',
                  color: 'var(--offwhite)',
                }}
              >
                Download the App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}