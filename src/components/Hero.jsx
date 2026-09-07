import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import DataBackground from './DataBackground'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-backdrop"
    >
      <DataBackground />

      {/* soft vignette so the background never fights the text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 55% at 20% 40%, rgba(11,15,20,0.75) 0%, rgba(11,15,20,0.15) 60%, rgba(11,15,20,0) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-8 w-full">
        <div className="max-w-[640px]">
          <p className="font-mono-tag text-sm text-accent mb-5">
            {portfolio.title}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.08] text-text mb-6">
            {portfolio.hero.headline}
          </h1>

          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-[54ch]">
            {portfolio.hero.subtext}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#journey"
              className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-5 py-3 rounded-md hover:bg-accent/90 transition-colors"
            >
              View My Journey
              <ArrowDown size={16} />
            </a>
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text text-sm px-5 py-3 rounded-md hover:border-accent/60 hover:text-accent transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text text-sm px-5 py-3 rounded-md hover:border-accent/60 hover:text-accent transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
