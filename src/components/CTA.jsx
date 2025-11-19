import React from 'react'

export default function CTA() {
  return (
    <section id="kontakt" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent p-10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold sm:text-3xl">Bereit für Ihren nächsten Schritt?</h3>
          <p className="mt-3 text-blue-100/90">Lassen Sie uns über Ihr Projekt sprechen. Wir melden uns innerhalb von 24 Stunden.</p>
          <form className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <input required placeholder="Ihr Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-200/60 outline-none focus:ring-2 focus:ring-blue-400/40" />
            <input required type="email" placeholder="Ihre E-Mail" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-200/60 outline-none focus:ring-2 focus:ring-blue-400/40" />
            <button type="submit" className="rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
              Gespräch anfragen
            </button>
          </form>
          <p className="mt-3 text-xs text-blue-200/80">Kein Spam. Wir nutzen Ihre Daten ausschließlich zur Kontaktaufnahme.</p>
        </div>
      </div>
    </section>
  )
}
