import React from 'react'
import { Code, Rocket, Palette, Search } from 'lucide-react'

const features = [
  {
    icon: <Palette className="h-6 w-6" />, 
    title: 'Individuelles Design',
    desc: 'Markengerecht, ästhetisch und barrierearm – wir gestalten Erlebnisse, nicht nur Seiten.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Sauberer Code',
    desc: 'Moderne Technologien, skalierbar und wartbar. Performance first – von Anfang an.'
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'SEO & Analytics',
    desc: 'Technische SEO, strukturierte Daten und Tracking für messbaren Erfolg.'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Launch & Betreuung',
    desc: 'Hosting, Monitoring und Weiterentwicklung – wir bleiben an Ihrer Seite.'
  }
]

export default function Features() {
  return (
    <section id="leistungen" className="relative bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Leistungen, die Ergebnisse liefern</h2>
          <p className="mt-3 text-blue-200/90">Alles, was Sie für einen starken digitalen Auftritt brauchen.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
