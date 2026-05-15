interface MarqueeProps {
  text: string
  bgColor: string
  textColor: string
  borderColor?: string
}

export default function Marquee({ text, bgColor, textColor, borderColor }: MarqueeProps) {
  return (
    <section
      className="h-[20vh] flex items-center border-y"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor || 'transparent',
      }}
    >
      <div className="marquee-container w-full">
        <div
          className="marquee-content font-bold"
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            color: textColor,
            opacity: 0.15,
          }}
        >
          {text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;{text}
        </div>
      </div>
    </section>
  )
}