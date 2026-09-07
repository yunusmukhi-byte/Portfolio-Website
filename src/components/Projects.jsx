import { ArrowUpRight, Github } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'

function EmptyState() {
  return (
    <Reveal>
      <div className="rounded-lg border border-dashed border-border p-10 md:p-14 text-center max-w-2xl mx-auto">
        <p className="font-mono-tag text-sm text-accent mb-3">$ ls projects/</p>
        <h3 className="font-display text-xl md:text-2xl text-text mb-3">
          My first projects are currently in progress.
        </h3>
        <p className="text-muted leading-relaxed max-w-[52ch] mx-auto mb-8">
          I&apos;m currently building my foundation in Python and Data
          Science. This section will grow as I turn what I learn into
          practical projects.
        </p>
        <a
          href={portfolio.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text border border-border px-5 py-2.5 rounded-md hover:border-accent/60 hover:text-accent transition-colors"
        >
          <Github size={16} />
          Follow my GitHub
        </a>
      </div>
    </Reveal>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 80}>
      <div className="rounded-lg border border-border bg-surface p-6 h-full flex flex-col hover:border-accent/40 transition-colors">
        <h3 className="font-display text-lg text-text mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono-tag text-faint border border-border rounded px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
            >
              <Github size={15} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
            >
              <ArrowUpRight size={15} />
              Demo
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const { projects } = portfolio

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-4">
            Projects
          </h2>
          <p className="text-muted max-w-[58ch] mb-12">
            Real work, added only once it exists.
          </p>
        </Reveal>

        {projects.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
