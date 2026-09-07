import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'

export default function Skills() {
  const { current, upcoming } = portfolio.skills

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted max-w-[58ch] mb-12">
            One skill at a time, learned properly rather than listed for show.
          </p>
        </Reveal>

        {/* Current — deliberately featured, singular, honest */}
        <Reveal>
          <div className="rounded-lg border border-accent/30 bg-accent/[0.04] p-6 md:p-8 mb-14 max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono-tag text-accent">
                Currently learning
              </span>
            </div>
            {current.map((skill) => (
              <p key={skill.name} className="font-display text-2xl text-text">
                {skill.name}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Upcoming — clearly labeled as roadmap, not existing skills */}
        <Reveal delay={100}>
          <p className="text-xs font-mono-tag text-faint mb-4">
            Next on my learning path
          </p>
          <ul className="divide-y divide-border border-t border-b border-border">
            {upcoming.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between py-4 px-1 group"
              >
                <span className="text-text group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono-tag text-faint">
                  planned
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
