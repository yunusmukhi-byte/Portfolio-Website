import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted max-w-[58ch] mb-12">
            I&apos;m at the beginning of my journey and always interested in
            learning, building, and connecting with people interested in
            technology and Data Science.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          <Reveal>
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <span className="flex items-center gap-3">
                <Github size={20} className="text-muted group-hover:text-accent transition-colors" />
                <span>
                  <span className="block text-sm text-faint">GitHub</span>
                  <span className="block text-text">{portfolio.name}</span>
                </span>
              </span>
              <ArrowUpRight size={16} className="text-faint group-hover:text-accent transition-colors" />
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <span className="flex items-center gap-3">
                <Linkedin size={20} className="text-muted group-hover:text-accent transition-colors" />
                <span>
                  <span className="block text-sm text-faint">LinkedIn</span>
                  <span className="block text-text">{portfolio.name}</span>
                </span>
              </span>
              <ArrowUpRight size={16} className="text-faint group-hover:text-accent transition-colors" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
