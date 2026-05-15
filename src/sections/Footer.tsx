export default function Footer() {
  return (
    <footer
      className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: 'var(--charcoal)' }}
    >
      <h2
        className="font-bold leading-none mb-12"
        style={{
          fontSize: 'clamp(3rem, 10vw, 10rem)',
          color: 'var(--offwhite)',
        }}
      >
        Drop us
        <br />
        a line.
      </h2>

      <a
        href="mailto:hello@botanic.com"
        className="text-2xl md:text-4xl transition-colors hover:text-[var(--coral)]"
        style={{
          color: 'var(--offwhite)',
          textDecoration: 'underline',
          textDecorationColor: 'var(--coral)',
          textUnderlineOffset: '8px',
        }}
      >
        hello@botanic.com
      </a>

      <div
        className="mt-20 flex space-x-8 text-sm"
        style={{ color: 'var(--offwhite)', opacity: 0.5 }}
      >
        <span>&copy; 2024 Botanic Inc.</span>
        <a
          href="#"
          className="hover:text-[var(--offwhite)] transition-colors"
        >
          Privacy
        </a>
        <a
          href="#"
          className="hover:text-[var(--offwhite)] transition-colors"
        >
          Terms
        </a>
      </div>
    </footer>
  )
}