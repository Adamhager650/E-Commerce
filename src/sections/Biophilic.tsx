export default function Biophilic() {
  return (
    <section
      id="biophilic"
      className="w-full min-h-screen flex items-center py-20"
      style={{ backgroundColor: 'var(--crimson)' }}
    >
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <h2
            className="text-section-title mb-8"
            style={{ color: 'var(--offwhite)' }}
          >
            Biophilic.
          </h2>
          <p
            className="text-xl md:text-2xl font-light leading-relaxed max-w-lg"
            style={{ color: 'var(--offwhite)', opacity: 0.9 }}
          >
            We bring nature into the digital age. The Botanic system uses advanced
            hydroponics and intelligent lighting to recreate the perfect growing
            environment, mimicking the complex geometry found in organic structures.
          </p>
          <button
            className="mt-8 px-8 py-3 border text-sm uppercase tracking-widest transition-colors hover:bg-[var(--offwhite)] hover:text-[var(--crimson)]"
            style={{
              borderColor: 'var(--offwhite)',
              color: 'var(--offwhite)',
            }}
          >
            Learn More
          </button>
        </div>

        {/* Visual - Isometric Cube */}
        <div className="order-1 md:order-2 flex justify-center items-center h-[400px]">
          <div className="cube-wrapper">
            <div className="cube">
              <div className="face face--front">B</div>
              <div className="face face--back">B</div>
              <div className="face face--right">B</div>
              <div className="face face--left">B</div>
              <div className="face face--top">B</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}