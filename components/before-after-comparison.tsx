'use client'

import { useState } from 'react'

const beforeImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Web-Design-Vivix-Credit-Solutions-Before-RP7xVb4X1XiEQiN7FcfiWtSut91mI1.jpg'
const afterImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Web-Design-Vivix-Credit-Solutions-After-e6VV16vpcNbwb9CuKOw3jHNE8aoF5m.jpg'

export function BeforeAfterComparison() {
  const [position, setPosition] = useState(50)

  return (
    <section className="comparison-section" aria-labelledby="comparison-title">
      <div className="comparison-heading">
        <p className="eyebrow">BEFORE / AFTER</p>
        <h2 id="comparison-title">EXPERIENCE<br /><em>MAKES THE DIFFERENCE.</em></h2>
        <p>Running your company is your responsibility. It&apos;s not your responsibility to create and design your projects. Allow the pros to handle it for you.</p>
        <p>We partner with brands that understand the importance of a seamless online experience — one that attracts the right customers and enhances the buying journey.</p>
      </div>
      <div className="comparison-frame">
        <div className="comparison-image comparison-after"><img src={afterImage} alt="After redesign: modern Vivix Credit Solutions website" /></div>
        <div className="comparison-image comparison-before" style={{ width: `${position}%` }}><img src={beforeImage} alt="Before redesign: original Vivix Credit Solutions website" /></div>
        <span className="comparison-label comparison-label-before">Before</span><span className="comparison-label comparison-label-after">After</span>
        <input className="comparison-range" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="Drag to compare the before and after website designs" />
        <div className="comparison-handle" style={{ left: `${position}%` }} aria-hidden="true"><span /></div>
      </div>
      <p className="comparison-hint">Drag the slider to explore the transformation</p>
    </section>
  )
}
