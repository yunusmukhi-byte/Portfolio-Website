import { Check } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'

const STATUS_LABEL = {
  learning: 'Currently learning',
  next: 'Coming next',
  planned: 'Planned',
  complete: 'Completed',
}

function statusStyles(status) {
  switch (status) {
    case 'learning':
      return { dot: 'bg-accent', text: 'text-accent', ring: 'ring-accent/40' }
    case 'complete':
      return { dot: 'bg-accent', text: 'text-accent', ring: 'ring-accent/40' }
    case 'next':
      return { dot: 'bg-learning', text: 'text-learning', ring: 'ring-learning/30' }
    default:
      return { dot: 'bg-faint', text: 'text-faint', ring: 'ring-border' }
  }
}

export default function LearningJourney() {
  const { journey } = portfolio

  return (
    <section id="journey" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-4">
            My Data Science Journey
          </h2>
          <p className="text-muted max-w-[58ch] mb-16">
            Just getting started. The goal is to keep learning, building, and
            improving.
          </p>
        </Reveal>

        <ol className="relative max-w-2xl">
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />
          {journey.map((stage, i) => {
            const styles = statusStyles(stage.status)
            const num = String(i + 1).padStart(2, '0')
            return (
              <Reveal as="li" key={stage.name} delay={i * 60} className="relative pl-14 pb-10 last:pb-0">
                <span
                  className={`absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border ring-1 ${styles.ring}`}
                >
                  {stage.status === 'complete' ? (
                    <Check size={16} className={styles.text} />
                  ) : (
                    <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                  )}
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono-tag text-xs text-faint">{num}</span>
                  <h3 className="font-display text-lg text-text">{stage.name}</h3>
                  <span className={`text-xs font-mono-tag ${styles.text}`}>
                    {STATUS_LABEL[stage.status]}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
