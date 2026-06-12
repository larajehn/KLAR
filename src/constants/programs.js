export const PROGRAMS = [
  {
    id: 'start',
    title: 'KLAR Start',
    description: 'For students who want to bring order back into their studies.',
    content: [
      'Current situation analysis',
      'Priority matrix',
      'Weekly structure',
      'First routines',
      'Setting up the reflection system'
    ],
    format: [
      'E Learning',
      'Worksheets',
      'Reflection templates',
      'Optional 1 coaching session'
    ],
    price: '€199',
    cta: 'Start KLAR Start'
  },
  {
    id: 'procrastination',
    title: 'KLAR Against Procrastination',
    description: 'For students dealing with procrastination, avoidance, and inner pressure.',
    content: [
      'Recognize procrastination patterns',
      'Analyze emotional blocks',
      'Untangle tasks',
      'Create realistic learning plans',
      'Implementation system',
      'AI reflection'
    ],
    format: [
      'E Learning modules',
      'Interactive tasks',
      'AI analysis',
      'Reflection templates'
    ],
    price: '€299',
    cta: 'Start Against Procrastination'
  },
  {
    id: 'exam',
    title: 'KLAR Exam Phase',
    description: 'For structured exam preparation.',
    content: [
      'Analyze study material',
      'Plan learning phases',
      'Repetition system',
      'Exam simulation',
      'Stress regulation',
      'Weekly check ins'
    ],
    format: [
      'E Learning',
      'Planning templates',
      'Weekly check-ins',
      '2 coaching sessions'
    ],
    price: '€349',
    cta: 'Prepare for Exams'
  },
  {
    id: 'decision',
    title: 'KLAR Decision',
    description: 'For doubts about studies, master\'s choice, career decisions, or changing direction.',
    content: [
      'Understand decision pressure',
      'Sort options',
      'Clarify values',
      'Analyze consequences',
      'Define the next sustainable step',
      'Decision conversation'
    ],
    format: [
      'E Learning',
      'Worksheets',
      'Values clarification',
      '3 coaching sessions'
    ],
    price: '€399',
    cta: 'Clarify Your Decision'
  },
  {
    id: 'reflection',
    title: 'KLAR Reflection',
    description: 'For students who want to make their learnings, successes, and development visible.',
    content: [
      'Reflection journal',
      'AI categories',
      'Monthly reviews',
      'Yearly reviews',
      'Compliments and successes',
      'Visual analysis'
    ],
    format: [
      'Digital journal platform',
      'AI analysis tools',
      'Monthly and yearly reviews',
      'Export options'
    ],
    price: '€99/month',
    cta: 'Start Reflecting'
  }
]

export const getProgramById = (id) => {
  return PROGRAMS.find(program => program.id === id)
}