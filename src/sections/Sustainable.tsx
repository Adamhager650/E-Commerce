export default function Sustainable() {
  return (
    <section
      id="sustainable"
      className="w-full min-h-screen flex items-center py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--neongreen)' }}
    >
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <h2
            className="text-section-title mb-8"
            style={{ color: 'var(--charcoal)' }}
          >
            Sustainable.
          </h2>
          <p
            className="text-xl md:text-2xl font-light leading-relaxed max-w-lg"
            style={{ color: 'var(--charcoal)', opacity: 0.9 }}
          >
            Our closed-loop water system uses 90% less water than traditional
            gardening. The smart sensors monitor pH levels and nutrient density in
            real-time, ensuring perfect growth with zero waste.
          </p>
          <button
            className="mt-8 px-8 py-3 text-sm uppercase tracking-widest font-bold transition-colors hover:bg-[var(--offwhite)]"
            style={{
              backgroundColor: 'var(--charcoal)',
              color: 'var(--neongreen)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--offwhite)'
              e.currentTarget.style.color = 'var(--charcoal)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--charcoal)'
              e.currentTarget.style.color = 'var(--neongreen)'
            }}
          >
            View Specs
          </button>
        </div>

        {/* Visual */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <img
            src="/images/product-5.jpg"
            alt="Sustainability Concept"
            className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>
    </section>
  )
}