import { Github, Linkedin } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted">© 2026 {portfolio.name}</p>
          <p className="text-xs text-faint mt-0.5">
            Building my Data Science journey one project at a time.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={portfolio.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
