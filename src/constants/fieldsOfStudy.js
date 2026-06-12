export const FIELDS_OF_STUDY = [
  {
    id: 'medicine',
    label: 'Medicine',
    headline: 'Structure for a degree that never feels finished.',
    problems: [
      'Too much material',
      'Constant comparison',
      'High performance pressure',
      'Fear of not knowing enough',
      'Studying without a clear end point',
      'Emotional exhaustion',
      'Exam pressure'
    ],
    modules: [
      'Prioritize material without guilt',
      'Learning plans for large amounts of content',
      'Exam preparation in phases',
      'Dealing with comparison and self doubt',
      'Recovery as a learning strategy'
    ],
    tone: 'precise, calm, performance aware, relieving',
    mainProblems: ['Overwhelm', 'Exam anxiety', 'Self doubt']
  },
  {
    id: 'law',
    label: 'Law',
    headline: 'From mental chaos to clear case structure.',
    problems: [
      'Legal writing structure',
      'Fear of knowledge gaps',
      'Repeating too late',
      'Large amounts of text',
      'Perfectionism',
      'Blackouts during exams',
      'Lack of case routine'
    ],
    modules: [
      'Build case solutions systematically',
      'Translate material into exam structures',
      'Repetition systems',
      'Exam preparation without panic',
      'Dealing with perfectionism'
    ],
    tone: 'structured, precise, reassuring',
    mainProblems: ['Exam anxiety', 'Procrastination', 'Overwhelm']
  },
  {
    id: 'psychology',
    label: 'Psychology',
    headline: 'Think clearly without constantly overanalyzing yourself.',
    problems: [
      'Too much reflection',
      'Uncertainty about career path',
      'Statistics blocks',
      'Self doubt despite interest',
      'Emotional overidentification with content',
      'Decision pressure around master\'s degree, training, or career'
    ],
    modules: [
      'Clarify your study path',
      'Statistics without avoidance',
      'Limit reflection and make it useful',
      'Structure career decisions',
      'Translate self doubt into data'
    ],
    tone: 'reflective, understanding, empowering',
    mainProblems: ['Self doubt', 'Decision pressure', 'Procrastination']
  },
  {
    id: 'cs',
    label: 'Computer Science',
    headline: 'From problem to elegant solution. Without getting lost in the details.',
    problems: [
      'Procrastination on large projects',
      'Too many open technical questions',
      'Perfectionism',
      'Debugging frustration',
      'Uncertainty around AI',
      'Lack of project structure',
      'Isolated working'
    ],
    modules: [
      'Break projects into milestones',
      'Debugging routines',
      'Deep work without overwhelm',
      'Use AI meaningfully',
      'Make portfolio and progress visible'
    ],
    tone: 'pragmatic, solution-focused, supportive',
    mainProblems: ['Procrastination', 'Overwhelm', 'Lack of structure']
  },
  {
    id: 'business',
    label: 'Business / Economics',
    headline: 'From scattered knowledge to strategic clarity.',
    problems: [
      'Too many subject areas',
      'Connecting theory to practice',
      'Time management',
      'Performance expectations',
      'Data overload',
      'Decision fatigue'
    ],
    modules: [
      'Connect theory and practice',
      'Time management for complex curricula',
      'Strategic learning planning',
      'Data synthesis without overwhelm',
      'Performance without burnout'
    ],
    tone: 'strategic, practical, results-oriented',
    mainProblems: ['Overwhelm', 'Lack of structure', 'Exam anxiety']
  },
  {
    id: 'engineering',
    label: 'Engineering',
    headline: 'Master complexity. Build momentum.',
    problems: [
      'Complex mathematics',
      'Lab work timing',
      'Project coordination',
      'Calculation anxiety',
      'Integration of theory and practice',
      'Time management'
    ],
    modules: [
      'Mathematical blocks to clarity',
      'Project planning and execution',
      'Lab work integration',
      'Calculation confidence',
      'Managing multiple deadlines'
    ],
    tone: 'systematic, supportive, practical',
    mainProblems: ['Procrastination', 'Exam anxiety', 'Lack of structure']
  },
  {
    id: 'teaching',
    label: 'Teaching / Education',
    headline: 'Combine theory, practice, and self-reflection.',
    problems: [
      'Theory-practice gap',
      'Practicum stress',
      'Reflection overwhelm',
      'Many parallel tasks',
      'Self doubt about teaching ability',
      'Emotional labor'
    ],
    modules: [
      'Bridge theory and practice',
      'Manage practicum stress',
      'Meaningful reflection without overwhelm',
      'Build teaching confidence',
      'Self care while teaching'
    ],
    tone: 'supportive, reflective, empowering',
    mainProblems: ['Overwhelm', 'Self doubt', 'Exam anxiety']
  },
  {
    id: 'social',
    label: 'Social Work',
    headline: 'Structure without losing the human element.',
    problems: [
      'Emotional load',
      'Theory-practice integration',
      'Case management overwhelm',
      'Vicarious trauma',
      'Self doubt about impact',
      'Ethical decision pressure'
    ],
    modules: [
      'Integrate theory and practice',
      'Manage emotional load',
      'Case management systems',
      'Build professional confidence',
      'Ethical decision making'
    ],
    tone: 'caring, structured, empowering',
    mainProblems: ['Overwhelm', 'Self doubt', 'Procrastination']
  },
  {
    id: 'humanities',
    label: 'Humanities',
    headline: 'Turn interpretation into clarity.',
    problems: [
      'Too many perspectives',
      'Essay structure uncertainty',
      'Citation and research overwhelm',
      'Interpretation paralysis',
      'Time management with flexibility'
    ],
    modules: [
      'Manage multiple perspectives',
      'Essay structure confidence',
      'Research and citation systems',
      'Write clearly and confidently',
      'Flexible time management'
    ],
    tone: 'thoughtful, clarifying, encouraging',
    mainProblems: ['Procrastination', 'Overwhelm', 'Exam anxiety']
  },
  {
    id: 'natural',
    label: 'Natural Sciences',
    headline: 'From experimental chaos to clear results.',
    problems: [
      'Lab work coordination',
      'Data analysis uncertainty',
      'Report writing',
      'Experiment planning',
      'Time management with unpredictability'
    ],
    modules: [
      'Plan experiments systematically',
      'Analyze data with confidence',
      'Write scientific reports',
      'Manage lab work timing',
      'Handle experimental failures'
    ],
    tone: 'systematic, encouraging, practical',
    mainProblems: ['Lack of structure', 'Procrastination', 'Overwhelm']
  },
  {
    id: 'aviation',
    label: 'Aviation',
    headline: 'Master precision and safety through structure.',
    problems: [
      'High precision requirements',
      'Regulations and procedures',
      'Performance pressure',
      'Safety-critical decisions',
      'Continuous learning demands'
    ],
    modules: [
      'Master regulations efficiently',
      'Performance under pressure',
      'Decision making for safety',
      'Continuous learning systems',
      'Build professional confidence'
    ],
    tone: 'precise, professional, reassuring',
    mainProblems: ['Exam anxiety', 'Performance pressure', 'Self doubt']
  },
  {
    id: 'other',
    label: 'Other field of study',
    headline: 'Your structure for your studies.',
    problems: [],
    modules: [],
    tone: 'personalized, supportive',
    mainProblems: []
  }
]

export const MAIN_PROBLEMS = [
  'Procrastination',
  'Overwhelm',
  'Exam anxiety',
  'Decision pressure',
  'Lack of structure',
  'Self doubt',
  'Loss of motivation',
  'Doubts about changing studies'
]

export const getFieldById = (id) => {
  return FIELDS_OF_STUDY.find(field => field.id === id)
}