// =============================================================================
// PORTFOLIO DATA FILE
// -----------------------------------------------------------------------------
// This is the ONLY file you should need to edit as your Data Science journey
// progresses. Every section of the site (About, Skills, Projects, Learning
// Journey, links) reads its content from the objects below.
//
// You do NOT need to touch anything inside src/components/ to:
//   - add a project
//   - add a skill
//   - update your About text
//   - update your GitHub / LinkedIn links
//   - move a learning stage forward
//
// Just edit the values below and save. The site updates automatically.
// =============================================================================

export const portfolio = {
  // ---------------------------------------------------------------------------
  // BASIC INFO — shown in the navbar, hero, and footer
  // ---------------------------------------------------------------------------
  name: 'Yunus Mukhi',
  title: 'Aspiring Data Scientist',

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — update these two lines any time your links change
  // ---------------------------------------------------------------------------
  links: {
    github: 'https://github.com/yunusmukhi-byte',
    linkedin: 'https://www.linkedin.com/in/yunus-mukhi-304a08285',
  },

  // ---------------------------------------------------------------------------
  // HERO SECTION
  // ---------------------------------------------------------------------------
  hero: {
    headline: 'Learning to turn data into meaningful insights.',
    subtext:
      "I'm currently pursuing BSc IT at UPG while building my Data Science skills separately. I'm starting with Python and gradually working toward data analysis, statistics, SQL, and machine learning.",
  },

  // ---------------------------------------------------------------------------
  // ABOUT SECTION
  // ---------------------------------------------------------------------------
  about: {
    paragraphs: [
      "I'm currently pursuing BSc IT at UPG and studying Data Science separately. I'm at the beginning of my Data Science journey, currently focusing on Python and building a strong foundation before moving into data analysis, statistics, SQL, and machine learning.",
      'I believe the best way to learn Data Science is by building things, experimenting with real datasets, understanding the reasoning behind the results, and continuously improving.',
    ],
    beyondCoding:
      'Outside of technology and learning, I enjoy competitive gaming, especially BGMI and Free Fire. I enjoy the competitive nature of gaming and the focus, strategy, and quick decision-making involved.',
    // Small info cards shown in the About section.
    // Add, remove, or edit cards freely — the layout adapts to however many you list.
    cards: [
      { label: 'Education', value: 'BSc IT — UPG' },
      { label: 'Current Focus', value: 'Python & Data Science Foundations' },
      { label: 'Career Goal', value: 'Data Science / Data Analytics' },
      { label: 'Interests', value: 'Competitive Gaming • Technology • Data' },
    ],
  },

  // ---------------------------------------------------------------------------
  // SKILLS
  // -----------------------------------------------------------------------
  // "current" = skills you are actively learning right now.
  // "upcoming" = skills on your roadmap that you have NOT started yet.
  //
  // To move a skill from upcoming -> current: cut it from `upcoming` and
  // paste it into `current` with a status like "Currently learning".
  //
  // To add a brand-new skill later (e.g. once you start SQL for real),
  // just add another object to the relevant array — no other file needs
  // to change.
  // ---------------------------------------------------------------------------
  skills: {
    current: [
      {
        name: 'Python',
        status: 'Currently learning',
      },
    ],
    upcoming: [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'SQL' },
      { name: 'Statistics' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Machine Learning' },
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECTS
  // -----------------------------------------------------------------------
  // Empty by design — do not add placeholder or fake projects here.
  //
  // When you finish your first real project, add an object like this:
  //
  // {
  //   title: 'Sales Data Analysis',
  //   description: 'Analysis of sales data using Python and Pandas.',
  //   technologies: ['Python', 'Pandas', 'Matplotlib'],
  //   github: 'https://github.com/yunusmukhi-byte/sales-data-analysis',
  //   demo: '', // optional — leave as an empty string if there is no live demo
  // }
  //
  // The Projects section automatically switches from the "in progress" empty
  // state to a grid of project cards as soon as this array is non-empty.
  // ---------------------------------------------------------------------------
  projects: [],

  // ---------------------------------------------------------------------------
  // LEARNING JOURNEY (timeline)
  // -----------------------------------------------------------------------
  // status must be one of: 'learning' | 'next' | 'planned' | 'complete'
  //   - 'learning'  -> what you are actively working on right now
  //   - 'next'      -> what you'll pick up right after
  //   - 'planned'   -> further down the roadmap
  //   - 'complete'  -> only mark this once you have genuinely finished it
  //
  // Update the `status` field as you progress — do not reorder the array,
  // the numbering is generated automatically from its position.
  // ---------------------------------------------------------------------------
  journey: [
    { name: 'Python', status: 'learning' },
    { name: 'NumPy & Pandas', status: 'next' },
    { name: 'Data Analysis', status: 'planned' },
    { name: 'SQL', status: 'planned' },
    { name: 'Statistics', status: 'planned' },
    { name: 'Data Visualization', status: 'planned' },
    { name: 'Machine Learning', status: 'planned' },
  ],
}
