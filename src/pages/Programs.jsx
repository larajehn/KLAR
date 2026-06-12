import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, BookOpen, Brain, MessageCircle } from 'lucide-react'
import { Button } from '../components/Button'
import { Card, CardContent, CardDescription, CardTitle } from '../components/Card'

export function Programs() {
  const programs = [
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
      format: ['E Learning', 'Worksheets', 'Reflection templates', 'Optional 1 coaching session'],
      price: '€199',
      color: 'from-klar-lighter to-klar-light'
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
      format: ['E Learning modules', 'Interactive tasks', 'AI analysis', 'Reflection templates'],
      price: '€299',
      color: 'from-klar-light to-klar-lighter'
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
      format: ['E Learning', 'Planning templates', 'Weekly check-ins', '2 coaching sessions'],
      price: '€349',
      color: 'from-klar-medium to-klar-light'
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
      format: ['E Learning', 'Worksheets', 'Values clarification', '3 coaching sessions'],
      price: '€399',
      color: 'from-klar-medium to-klar-grey'
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
      format: ['Digital journal platform', 'AI analysis tools', 'Monthly and yearly reviews', 'Export options'],
      price: '€99/month',
      color: 'from-klar-lighter to-klar-bg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className='min-h-screen bg-klar-bg'>
      <div className='section-max-width section-padding'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <h1 className='heading-lg mb-4'>Programs</h1>
          <p className='text-lg text-klar-grey max-w-2xl mx-auto'>
            Choose the program that fits your current challenges and goals. Each program combines E Learning, tools, and optional personal coaching.
          </p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={itemVariants}>
              <Card className='h-full flex flex-col hover'>
                {/* Header gradient */}
                <div className={`bg-gradient-to-br ${program.color} h-2 rounded-t-2xl mb-6 -m-6 mb-6`}></div>

                <CardTitle className='mb-2'>{program.title}</CardTitle>
                <CardDescription className='mb-6'>{program.description}</CardDescription>

                {/* Content */}
                <CardContent className='mb-6 flex-1'>
                  <h4 className='font-semibold text-klar-dark mb-3 text-sm'>What's included:</h4>
                  <ul className='space-y-2 mb-6'>
                    {program.content.map((item, index) => (
                      <li key={index} className='flex gap-2 text-sm'>
                        <CheckCircle size={16} className='text-klar-medium flex-shrink-0 mt-0.5' />
                        <span className='text-klar-dark'>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='bg-klar-bg rounded-lg p-3 mb-4'>
                    <p className='text-xs text-klar-grey mb-1'>Format:</p>
                    <div className='flex flex-wrap gap-2'>
                      {program.format.map((fmt, index) => (
                        <span key={index} className='text-xs bg-klar-lighter text-klar-dark px-2 py-1 rounded'>
                          {fmt}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Footer */}
                <div className='border-t border-klar-lighter pt-4'>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-klar-grey text-sm'>Starting at</span>
                    <span className='text-2xl font-bold text-klar-dark'>{program.price}</span>
                  </div>
                  <Button size='sm' className='w-full'>
                    Learn more
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-klar-dark text-klar-white rounded-2xl p-12 mt-24 text-center'
        >
          <h2 className='text-3xl font-bold mb-4'>Not sure which program is right for you?</h2>
          <p className='text-klar-light mb-8 max-w-2xl mx-auto'>
            Start with the Clarity Check. It takes 10 minutes and gives you a personalized recommendation based on your current situation.
          </p>
          <Link to='/clarity-check'>
            <Button size='lg' className='bg-klar-white text-klar-dark hover:bg-klar-lighter'>
              Start the Clarity Check
              <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.section>
      </div>
    </div>
  )
}