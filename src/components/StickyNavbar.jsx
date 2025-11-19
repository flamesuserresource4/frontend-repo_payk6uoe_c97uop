import React from 'react'
import { Menu } from 'lucide-react'

export default function StickyNavbar() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById('site-header')
      const scrolled = window.scrollY > 10
      if (!header) return
      header.classList.toggle('border-white/10', scrolled)
      header.classList.toggle('bg-slate-950/70', scrolled)
      header.classList.toggle('backdrop-blur-xl', scrolled)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="site-header" className="fixed inset-x-0 top-0 z-50 border-transparent transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold tracking-tight">BlueWeb</a>
        <nav className="hidden gap-8 text-sm text-blue-100/90 sm:flex">
          <a href="#leistungen" className="hover:text-white">Leistungen</a>
          <a href="#prozess" className="hover:text-white">Prozess</a>
          <a href="#kontakt" className="hover:text-white">Kontakt</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#kontakt" className="hidden rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-slate-900 transition hover:bg-white sm:inline-flex">Jetzt starten</a>
          <button aria-label="Menü" onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white sm:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto block max-w-7xl px-6 pb-6 sm:hidden">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-blue-100/90">
            <a href="#leistungen" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:text-white">Leistungen</a>
            <a href="#prozess" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:text-white">Prozess</a>
            <a href="#kontakt" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:text-white">Kontakt</a>
          </div>
        </div>
      )}
    </header>
  )
}
