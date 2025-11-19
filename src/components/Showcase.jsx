import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Showcase() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -120])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -160])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2])

  const Section = ({ title, subtitle, y, glow }) => (
    <motion.section
      style={{ y, opacity }}
      className="relative mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.04] p-10 sm:p-14 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px]" style={{
        background: `radial-gradient(800px_circle_at_20%_10%, ${glow}, transparent 60%)`
      }} />
      <div className="relative">
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h3>
        <p className="mt-3 max-w-2xl text-blue-200/90">{subtitle}</p>
      </div>
    </motion.section>
  )

  return (
    <section ref={ref} className="relative bg-slate-950 py-28 text-white">
      <div className="sticky top-20 z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold sm:text-4xl"
        >
          Weniger Lärm. Mehr Wirkung.
        </motion.h2>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <Section
          y={y1}
          glow="rgba(56,189,248,0.15)"
          title="Pixelperfekte Typografie"
          subtitle="Große, ruhige Typo, viel Weißraum, präzise Hierarchien – inspiriert von den besten Produktseiten."
        />
        <Section
          y={y2}
          glow="rgba(99,102,241,0.14)"
          title="Flüssige Micro-Animationen"
          subtitle="Sanfte Übergänge, federnde Hover-States und subtile Parallax-Effekte lassen Inhalte lebendig wirken."
        />
        <Section
          y={y3}
          glow="rgba(34,197,94,0.12)"
          title="Fokus auf Performance"
          subtitle="Wir bauen schnell: Lighthouse-optimiert, schlanke Assets, saubere Struktur."
        />
      </div>
    </section>
  )
}
