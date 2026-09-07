import { portfolio } from '../data/portfolio'
import Reveal from './Reveal'

export default function About() {
  const { about } = portfolio

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 md:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-8">
              About Me
            </h2>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-muted leading-relaxed max-w-[58ch]">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pl-4 border-l-2 border-accent/40">
              <p className="text-sm text-faint font-mono-tag mb-1.5">Beyond coding</p>
              <p className="text-muted leading-relaxed max-w-[58ch]">
                {about.beyondCoding}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <dl className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
              {about.cards.map((card) => (
                <div key={card.label} className="bg-surface p-5">
                  <dt className="text-xs font-mono-tag text-faint mb-2">
                    {card.label}
                  </dt>
                  <dd className="text-[15px] text-text leading-snug">
                    {card.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
