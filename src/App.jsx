import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold">BlueWeb</a>
        <nav className="hidden gap-6 text-sm text-blue-100/90 sm:flex">
          <a href="#leistungen" className="hover:text-white">Leistungen</a>
          <a href="#prozess" className="hover:text-white">Prozess</a>
          <a href="#kontakt" className="hover:text-white">Kontakt</a>
        </nav>
        <a href="#kontakt" className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">Anfragen</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950/90 border-t border-white/10 text-blue-200">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} BlueWeb – Webagentur</p>
        <div className="flex gap-4 text-sm">
          <a href="#leistungen" className="hover:text-white">Leistungen</a>
          <a href="#prozess" className="hover:text-white">Prozess</a>
          <a href="#kontakt" className="hover:text-white">Kontakt</a>
          <a href="#" className="hover:text-white">Impressum</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
