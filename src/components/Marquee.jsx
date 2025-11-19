import React from 'react'

const logos = ['Design', 'Next.js', 'Tailwind', 'Shopify', 'Framer Motion', 'Analytics']

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5 text-blue-200">
      <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        {logos.concat(logos).map((l, i) => (
          <span key={i} className="mx-8 inline-block text-sm tracking-wide opacity-80">
            {l}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}
