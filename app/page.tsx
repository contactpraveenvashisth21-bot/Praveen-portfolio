'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail, Play, Pause, Volume2, VolumeX, CircleDot, Menu, Compass, Target, PenTool, Rocket, Sparkles, CalendarDays, MessageCircle, Zap, Layers3, UsersRound, Award, BriefcaseBusiness, Clock3, Wrench, X } from 'lucide-react'
import { BeforeAfterComparison } from '@/components/before-after-comparison'

const stats = [
  { value: '250+', label: 'Projects Completed', icon: BriefcaseBusiness },
  { value: '120+', label: 'Happy Clients', icon: UsersRound },
  { value: '8+', label: 'Years of Experience', icon: Clock3 },
  { value: '20+', label: 'Tools & Technologies', icon: Wrench },
]

  const clientLogos = [
    ['Income Done Smart', '/images/clients/income-done-smart.png'],
    ['Moms on Fire', '/images/clients/moms-on-fire.png'],
    ['Drone X Pro', '/images/clients/drone-x-pro.png'],
    ['SARM', '/images/clients/sarm.png'],
    ['Azuni London', '/images/clients/azuni-london.png'],
    ['Zoom Auto', '/images/clients/zoom-auto.png'],
    ['Griffin', '/images/clients/griffin.png'],
    ['Collection Gear', '/images/clients/collection-gear.png'],
    ['Tiny Big Adventure', '/images/clients/tiny-big-adventure.png'],
    ['Advanced Athletics', '/images/clients/advanced-athletics.png'],
  ]

const skills = [
  { name: 'UI/UX DESIGN', color: '#f1a51f', description: 'User-focused designs that look great and drive results.' },
  { name: 'LANDING PAGE DESIGN', color: '#19d5b0', description: 'High-converting landing pages for your business goals.' },
  { name: 'SALES FUNNEL DESIGN', color: '#ff4d5d', description: 'Funnels that attract, engage and convert.' },
  { name: 'CONVERSION OPTIMIZATION', color: '#f1a51f', description: 'Data-driven improvements for better results.' },
  { name: 'WIREFRAMING & PROTOTYPING', color: '#05bce8', description: 'Turn ideas into clear, interactive prototypes.' },
  { name: 'CRM & MARKETING AUTOMATION', color: '#c24aff', description: 'Automate your workflow and grow your business.' },
]
const skillIcons = [PenTool, Compass, Target, Rocket, Sparkles, Menu]
const processSteps = [
  ['01', 'DISCOVER', 'Understand the brief, the people, and the real problem worth solving.'],
  ['02', 'DEFINE', 'Turn messy ideas into a focused direction, clear goals, and a strong story.'],
  ['03', 'DESIGN', 'Shape the experience through wireframes, systems, visual language, and motion.'],
  ['04', 'DELIVER', 'Prototype, test, refine, and hand over a polished product ready to move.'],
]
const designTools = [
  { name: 'Figma', icon: '/images/tool-01.svg', category: 'design' },
  { name: 'Make', icon: '/images/tool-02.svg', category: 'automation' },
  { name: 'ClickFunnels', icon: '/images/tool-03.svg', category: 'funnels' },
  { name: 'Photoshop', icon: '/images/tool-04.svg', category: 'design' },
  { name: 'Illustrator', icon: '/images/tool-05.svg', category: 'design' },
  { name: 'GoHighLevel', icon: '/images/tool-06.svg', category: 'funnels' },
  { name: 'Systeme.io', icon: '/images/tool-07.svg', category: 'funnels' },
  { name: 'WordPress', icon: '/images/tool-08.svg', category: 'development' },
  { name: 'Zapier', icon: '/images/tool-09.svg', category: 'automation' },
]

const caseStudies = [
  { name: 'Portfolio 01', type: 'Brand showcase', tag: 'PORTFOLIO', tone: 'case-green', image: '/images/port1.png' },
  { name: 'Portfolio 02', type: 'Brand showcase', tag: 'PORTFOLIO', tone: 'case-blue', image: '/images/port2.png' },
  { name: 'Portfolio 03', type: 'Brand showcase', tag: 'PORTFOLIO', tone: 'case-pink', image: '/images/port3.png' },
]

const projects = [
  { title: 'Pinterest Traffic Bootcamp', type: 'Marketing landing page', image: '/images/portfolio-pinterest.png' },
  { title: 'Easy Teaching Tools', type: 'Education landing page', image: '/images/portfolio-teaching.png' },
  { title: 'Pepper Organic Reach', type: 'SaaS landing page', image: '/images/portfolio-pepper.png' },
  { title: 'Legal Lead Pros', type: 'Consulting landing page', image: '/images/portfolio-legal.png' },
  { title: 'Nu-vival Skinriffic', type: 'Beauty product landing page', image: '/images/portfolio-skincare.png' },
  { title: 'Bye Molluscum', type: 'Health product landing page', image: '/images/portfolio-molluscum.png' },
]

const testimonialVideos = [
  { label: 'Client testimonial 01', src: '/client1.mp4' },
  { label: 'Client testimonial 02', src: '/client2.mp4' },
  { label: 'Client testimonial 03', src: '/client3.mp4' },
  { label: 'Client testimonial 04', src: '/client4.mp4' },
]

const heroWords = ['IDEAS', 'PRODUCTS', 'EXPERIENCES', 'IMPACT']

export default function Page() {
  const [heroWord, setHeroWord] = useState(heroWords[0])
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(true)
  const [heroVideoMuted, setHeroVideoMuted] = useState(true)
  const [bookingOpen, setBookingOpen] = useState(false)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  const toggleHeroVideo = () => {
    const video = heroVideoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setHeroVideoPlaying(true)
    } else {
      video.pause()
      setHeroVideoPlaying(false)
    }
  }

  const toggleHeroVideoMute = () => {
    const video = heroVideoRef.current
    if (!video) return
    video.muted = !video.muted
    setHeroVideoMuted(video.muted)
  }

  useEffect(() => {
    const timer = window.setInterval(() => setHeroWord((current) => heroWords[(heroWords.indexOf(current) + 1) % heroWords.length]), 2400)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="hero-page">
      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Praveen home"><img src="/images/praveen-main-logo.png" alt="Praveen" /></a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a className="active" href="#home">Home<span /></a><a href="#about">About</a><a href="#case-studies">Case Studies</a>
          </nav>
          <div className="header-actions"><button className="resume-button" type="button" onClick={() => setBookingOpen(true)}>Book a Call <ArrowRight size={21} /></button><button className="menu-button" aria-label="Open menu"><Menu size={35} /></button></div>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">UI/UX DESIGNER <b /> FUNNEL EXPERT <b /> AUTOMATION SPECIALIST</p>
            <h1 id="hero-title">BUILDING<br />DIGITAL<br /><em className="hero-changing-word" key={heroWord}>{heroWord}</em><span className="hero-word-dot">.</span></h1>
            <p className="hero-description">I&apos;m Praveen — a UI/UX Designer and Funnel Expert helping businesses transform ideas into high-converting digital experiences through strategic design, powerful funnels, and smart automation.</p>
            <div className="hero-buttons"><button className="primary-button" type="button" onClick={() => setBookingOpen(true)}>Let&apos;s Connect <ArrowRight size={22} /></button><a className="secondary-button" href="#case-studies">View My Work <span><Play size={14} fill="currentColor" /></span></a></div>
            
          </div>
          <div className="hero-visual hero-visual-type"><div className="blue-orb" /><div className="dot-grid" /><div className="hero-frame-shape frame-shape-one" /><div className="hero-frame-shape frame-shape-two" /><div className="hero-video-placeholder"><video ref={heroVideoRef} autoPlay muted loop playsInline poster="/images/hero-portrait.png" aria-label="Introductory portfolio video"><source src="/herosectionvideo.mp4" type="video/mp4" />Your browser does not support the video element.</video><div className="hero-video-overlay"><div className="hero-video-controls"><button className="hero-video-control" type="button" onClick={toggleHeroVideo} aria-label={heroVideoPlaying ? 'Pause intro video' : 'Play intro video'}>{heroVideoPlaying ? <Pause size={23} fill="currentColor" /> : <Play size={25} fill="currentColor" />}</button><button className="hero-video-mute" type="button" onClick={toggleHeroVideoMute} aria-label={heroVideoMuted ? 'Unmute intro video' : 'Mute intro video'}>{heroVideoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}</button></div></div></div></div>
        </div>
        <div className="stats-row">{stats.map(({ value, label, icon: StatIcon }) => <div className="stat" key={label}><i><StatIcon size={22} /></i><div><strong>{value}</strong><span>{label}</span></div></div>)}</div>
      </section>
      <section className="clients-section" id="clients" aria-labelledby="clients-title">
        <div className="clients-layout">
          <div className="clients-left">
            <div className="clients-header">
              <div className="clients-heading" aria-label="Trusted partners headline">
                <h2>Trusted Partners &amp; Brands<br />I&apos;ve Collaborated With<br />Throughout My Journey.</h2>
              </div>
            </div>

            <div className="logo-stage logo-stage-static" aria-label="Client logos">
              <div className="logo-grid">
                {clientLogos.map(([name, src], index) => (
                  <div className="client-logo" key={name} style={{ ['--flip-delay' as any]: `${index * 1.3}s` }}>
                    <div className="client-logo-inner">
                      <div className="client-logo-front">
                        <img src={src || "/placeholder.svg"} alt={`${name} logo`} loading="lazy" />
                      </div>
                      <div className="client-logo-back">
                        <img src={src || "/placeholder.svg"} alt={`${name} logo`} loading="lazy" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="clients-figure" aria-hidden="true">
            <img src="/images/sp-doll.webp" alt="" />
          </div>
        </div>
      </section>
      <section className="showcase-section" id="case-studies" aria-labelledby="showcase-title">
        <div className="showcase-intro"><div><p className="eyebrow">IDEAS<br />I TURNED<br />INTO REALITY.</p><h2 id="showcase-title">SHOWCASE</h2></div><p>A curated collection of my work across UI/UX design, landing pages, sales funnels, and digital experiences—where strategy meets creativity.</p></div>
        <div className="project-grid">{[...projects, ...projects].map((project, index) => <article className={`project-card ${index % 2 ? 'project-card-offset' : ''}`} key={`${project.title}-${index}`}><div className="portfolio-frame"><div className="browser-bar"><span /><span /><span /><b>portfolio preview</b></div><div className="portfolio-image-wrap"><img src={project.image} alt={`${project.title} landing page design`} /></div><div className="floating-shape shape-one" /><div className="floating-shape shape-two" /></div><div className="project-meta"><span>0{(index % projects.length) + 1}</span><div><h3>{project.title}</h3><p>{project.type}</p></div></div></article>)}</div>
      </section>
      <section className="about-section about-section-replaced" id="about" aria-labelledby="about-title">
        <div className="about-copy"><p className="eyebrow">WHO I AM</p><h2 id="about-title">I TURN <em>IDEAS</em> INTO <em>DIGITAL</em> EXPERIENCES.</h2><p className="about-lead">I&apos;m Praveen, a UI/UX Designer and Funnel Expert focused on creating intuitive digital experiences, high-converting landing pages, and smart automation solutions that help businesses move forward.</p><p>I combine user-focused design, strategic thinking, and conversion principles to turn complex ideas into clear, engaging, and purposeful digital experiences. From the first concept to the final interaction, I focus on making every detail count.</p><p>Whether it&apos;s designing a digital product, building a sales funnel, or connecting business processes through automation, I bring creativity and practical problem-solving to every project.</p><div className="about-proof-row"><span><i><Layers3 size={24} /></i><b>250+</b><small>Projects Completed</small></span><span><i><UsersRound size={24} /></i><b>120+</b><small>Happy Clients</small></span><span><i><Award size={24} /></i><b>8+</b><small>Years Experience</small></span></div><a className="about-explore" href="#case-studies-more">Explore My Work <ArrowRight size={17} /></a></div>
        <div className="skill-list">{skills.map((skill, index) => { const SkillIcon = skillIcons[index]; return <div className="skill-card" key={skill.name} style={{ ['--skill-color' as any]: skill.color }}><div className="skill-icon"><SkillIcon size={23} /></div><div className="skill-card-copy"><div className="skill-name">{skill.name}</div><p>{skill.description}</p></div></div> })}</div>
      </section>
      <section className="tools-section" aria-labelledby="tools-title">
        <div className="tools-header">
          <p className="eyebrow">TOOLS I USE</p>
          <div className="tools-title-wrap">
            <h2 id="tools-title">The Tools Behind<br /><span>My Creative</span> <em>Process.</em></h2>
            <div className="tools-badge"><span>50+</span><small>PLATFORMS</small></div>
          </div>
          <p className="tools-description">A curated set of powerful tools I use to design, build, automate, and bring ideas to life.</p>
        </div>

        <div className="tools-marquee" aria-label="Tools used by Praveen">
          <div className="tools-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div className="tools-marquee-group" key={`tool-group-${groupIndex}`}>
                {designTools.map((tool) => (
                  <div className="tool-item" key={`${tool.name}-${groupIndex}`}>
                    <div className="tool-icon"><img src={tool.icon} alt={`${tool.name} icon`} /></div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="tools-image-wrap"><img src="/images/toolsimage.png" alt="Creative tools used by Praveen" /></div>
      </section>
      <section className="process-section" id="process" aria-labelledby="process-title" style={{ display: 'none' }}>
        <div className="process-heading">
          <p className="eyebrow">MY PROCESS</p>
          <h2 id="process-title">I TURN <em>COMPLEXITY</em> INTO CLARITY.</h2>
          <p>A structured, collaborative process that takes your idea from concept to a high-performing, real-world solution.</p>
        </div>

        <div className="process-grid">
          {processSteps.map(([number, title, description], index) => {
            const Icon = [Compass, Target, PenTool, Rocket][index]
            const labels = ['RESEARCH & INSIGHTS', 'STRATEGY & PLANNING', 'CREATIVE & VISUALS', 'LAUNCH & SUPPORT']

            return (
              <article className="process-card" key={number}>
                <div className="process-badge-row">
                  <span className="process-number">{number}</span>
                  <div className="process-icon-wrap"><Icon size={24} strokeWidth={1.8} /></div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="process-footer">
                  <span>{labels[index]}</span>
                  <span className="process-arrow" aria-hidden="true">→</span>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <div style={{ display: 'none' }}>
        <BeforeAfterComparison />
      </div>
      <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title"><div className="testimonials-heading"><div><p className="eyebrow">CLIENT STORIES</p><h2 id="testimonials-title">REAL PEOPLE.<br /><em>REAL RESULTS.</em></h2></div><p>Hear directly from clients about the strategy, design, and digital experiences we created together.</p></div><div className="testimonial-grid">{testimonialVideos.map(({ label, src }, index) => <article className="testimonial-video-card" key={label}><button className="testimonial-video-placeholder" type="button" aria-label={`Play ${label}`} onClick={() => setSelectedVideo(src)}><video autoPlay muted loop playsInline preload="metadata" aria-label={label}><source src={src} type="video/mp4" />Your browser does not support the video element.</video><span className="testimonial-number">0{index + 1}</span><span className="testimonial-play-button" aria-hidden="true"><Play size={22} fill="currentColor" /></span><span className="testimonial-upload-label">CLIENT VIDEO</span></button></article>)}</div>
      {selectedVideo && (
        <div className="video-modal-backdrop" role="dialog" aria-modal="true" aria-label="Client video player" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="video-modal-close" aria-label="Close video" onClick={() => setSelectedVideo(null)}>×</button>
            <video controls autoPlay playsInline>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      )}
      </section>
      <section className="case-section" id="case-studies-more" aria-labelledby="case-title">
        <div className="case-heading"><div><p className="eyebrow">CASE STUDIES</p><h2 id="case-title">REAL PROJECTS.<br /><em>REAL IMPACT.</em></h2></div><div><p>Selected product work across different industries, each shaped around a clear user need and a measurable outcome.</p><a className="text-link" href="#contact">View all case studies <ArrowRight size={17} /></a></div></div>
        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className={`case-card ${study.tone}`} key={study.name}>
              <div className="case-card-art">
                <img src={study.image} alt="" aria-hidden="true" />
              </div>
              <div className="case-card-copy">
                <span>{study.tag}</span>
                <h3>{study.name}</h3>
                <p>{study.type}</p>
              </div>
              <span className="case-arrow"><ArrowRight size={18} /></span>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-glow contact-glow-one" /><div className="contact-glow contact-glow-two" />
        <div className="contact-copy">
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2 id="contact-title">Ready to turn your<br /><em>ideas into reality?</em></h2>
          <p>Book a free discovery call and let&apos;s discuss your goals, explore ideas, and see how I can help you create a high-converting website, funnel, or digital solution for your business.</p>
          <div className="contact-benefits">
            <span><i><MessageCircle size={20} /></i>Free<br />Consultation</span>
            <span><i><Zap size={20} /></i>No Obligation</span>
            <span><i><CalendarDays size={20} /></i>Find a Time<br />That Suits You</span>
          </div>
        </div>
        <div className="contact-calendar"><img src="/images/calimage.png" alt="Calendar scheduling illustration" /></div>
        <div className="contact-action">
          <img className="contact-action-arrow" src="/images/arrow.png" alt="" aria-hidden="true" />
          <button className="contact-book-button" type="button" onClick={() => setBookingOpen(true)}>Book a Free Call <ArrowRight size={24} /></button>
          <p>Let&apos;s talk about your project and see how we can work together.</p>
        </div>
      </section>
      {bookingOpen && <div className="booking-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={() => setBookingOpen(false)}><div className="booking-modal" onClick={(event) => event.stopPropagation()}><div className="booking-modal-header"><h2 id="booking-title">Book a quick call</h2><button type="button" className="booking-modal-close" aria-label="Close booking window" onClick={() => setBookingOpen(false)}><X size={21} /></button></div><iframe src="https://tidycal.com/pixelonic/quick-call-with-praveen" title="Book a meeting with Praveen" /></div></div>}
      <footer className="site-footer"><a className="brand footer-brand" href="#home" aria-label="Praveen home"><img src="/images/praveen-main-logo.png" alt="Praveen" /></a><span>© 2026 Praveen — UI/UX & Product Designer</span><div><a href="#home">Back to top</a><a href="#about">About</a><a href="#contact">Contact</a></div></footer>

    </main>
  )
}
