import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'
import StickyNavbar from './components/StickyNavbar'
import Showcase from './components/Showcase'
import Marquee from './components/Marquee'
import SectionDivider from './components/SectionDivider'

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
      <StickyNavbar />
      <Hero />
      <Marquee />
      <SectionDivider />
      <Showcase />
      <Features />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
