import React from 'react'

const steps = [
  {
    title: '1. Beratung',
    desc: 'Wir lernen Ihr Geschäft kennen und definieren Ziele, Zielgruppen und Kennzahlen.'
  },
  {
    title: '2. Konzept & Design',
    desc: 'Informationsarchitektur, Wireframes und visuelles Design – transparent und iterativ.'
  },
  {
    title: '3. Entwicklung',
    desc: 'Saubere Implementierung, schnelles Hosting, Integration von CMS oder Shop.'
  },
  {
    title: '4. Launch & Skalierung',
    desc: 'Qualitätssicherung, SEO-Setup, Tracking – danach kontinuierliche Optimierung.'
  }
]

export default function Process() {
  return (
    <section id="prozess" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">So arbeiten wir zusammen</h2>
          <p className="mt-3 text-blue-200/90">Strukturiert, transparent und auf Augenhöhe.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-blue-300">{s.title}</div>
              <p className="mt-2 text-blue-100/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
