import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Modern • Interaktiv • Performance
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Wir bauen Websites,
            die Eindruck machen.
          </h1>

          <p className="mt-5 max-w-2xl text-blue-100/90 text-lg sm:text-xl">
            Ihre digitale Präsenz – maßgeschneidert, schnell und konvertierend. Von der Idee bis zum Launch begleiten wir Sie als verlässliche Webagentur.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Kostenloses Erstgespräch
            </a>
            <a href="#leistungen" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 text-center text-sm text-blue-200/90">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"><span className="block text-2xl font-bold text-white">100+</span> Projekte</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"><span className="block text-2xl font-bold text-white"><span className="align-top">↑</span> 38%</span> Mehr Conversions</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <span className="block text-2xl font-bold text-white"><span className="align-top">≤</span> 1s</span> Ladezeit
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
