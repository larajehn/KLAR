import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Calendar, Brain, Sparkles, Download } from 'lucide-react'
import { Button } from '../components/Button'
import { Card, CardContent, CardDescription, CardTitle } from '../components/Card'

export function Reflection() {
  const [smartboardMode, setSmartboardMode] = useState(false)

  const features = [
    {
      icon: Brain,
      title: 'AI Sorting',
      description: 'AI automatically categorizes your entries'
    },
    {
      icon: Calendar,
      title: 'Smart Reviews',
      description: 'Weekly and monthly automatic reviews'
    },
    {
      icon: BarChart3,
      title: 'Visual Patterns',
      description: 'See your learning patterns in graphs'
    },
    {
      icon: Sparkles,
      title: 'Progress Tracking',
      description: 'Monitor your development over time'
    }
  ]

  const demoEntries = [
    {
      title: 'Learning of the day',
      value: 'How to break complex problems into steps',
      category: 'Learning',
      date: 'Today'
    },
    {
      title: 'Success',
      value: 'Finally started the project I was avoiding',
      category: 'Progress',
      date: 'Today'
    },
    {
      title: 'Compliment',
      value: 'Great presentation in the seminar',
      category: 'Progress',
      date: 'Yesterday'
    },
    {
      title: 'Block',
      value: 'Still struggling with statistics',
      category: 'Learning',
      date: 'Yesterday'
    }
  ]

  return (
    <div className='min-h-screen bg-klar-bg'>
      <div className='section-max-width section-padding'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <h1 className='heading-lg mb-4'>Reflection System</h1>
          <p className='text-xl text-klar-grey max-w-3xl mx-auto mb-8'>
            Your thoughts become a system. You write down your thoughts, learnings, successes, and blocks. The AI helps you recognize patterns, form categories, create visual reviews, and derive concrete next steps.
          </p>

          <div className='flex gap-4 justify-center'>
            <Button variant={smartboardMode ? 'secondary' : 'primary'} onClick={() => setSmartboardMode(false)}>
              Normal View
            </Button>
            <Button variant={smartboardMode ? 'primary' : 'secondary'} onClick={() => setSmartboardMode(true)}>
              Smartboard Mode
            </Button>
          </div>
        </motion.div>

        {!smartboardMode ? (
          <>
            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className='h-full text-center hover'>
                      <div className='w-12 h-12 bg-klar-lighter rounded-lg flex items-center justify-center mx-auto mb-4'>
                        <Icon size={24} className='text-klar-medium' />
                      </div>
                      <CardTitle className='mb-2'>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Demo Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mb-16'
            >
              <h2 className='heading-md mb-6 text-center'>Your Dashboard</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {demoEntries.map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className='h-full'>
                      <div className='mb-3'>
                        <p className='text-xs text-klar-grey font-semibold mb-1 uppercase'>{entry.title}</p>
                        <span className='inline-block px-2 py-1 bg-klar-lighter text-xs rounded text-klar-medium font-semibold'>
                          {entry.category}
                        </span>
                      </div>
                      <p className='text-sm text-klar-dark font-medium mb-2'>{entry.value}</p>
                      <p className='text-xs text-klar-grey'>{entry.date}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Excel Integration */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-klar-lighter rounded-2xl p-8 mb-16'
            >
              <h2 className='heading-md mb-4'>Excel Learning Journal</h2>
              <p className='text-klar-grey mb-6'>
                Use our Excel template to keep your journal organized. Columns include: Date, Situation, Learning, Why, Category, Feeling, Next Step, and more.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button variant='secondary'>
                  <Download size={20} />
                  View Template
                </Button>
                <Button>
                  <Download size={20} />
                  Simulate AI Analysis
                </Button>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-klar-dark text-klar-white rounded-2xl p-12 text-center'
            >
              <h2 className='text-3xl font-bold mb-4'>Make your progress visible</h2>
              <p className='text-klar-light mb-8 max-w-2xl mx-auto'>
                KLAR Reflection turns your daily reflections into a powerful learning system. Watch yourself grow.
              </p>
              <Button size='lg' className='bg-klar-white text-klar-dark hover:bg-klar-lighter'>
                Start Reflecting
              </Button>
            </motion.section>
          </>
        ) : (
          // Smartboard Mode
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='fixed inset-0 bg-klar-dark text-klar-white p-12 overflow-y-auto'
          >
            <div className='max-w-5xl mx-auto space-y-12'>
              {/* Title */}
              <div className='text-center mb-12'>
                <h1 className='text-6xl font-bold mb-4'>Your Learning Reflection</h1>
                <p className='text-3xl text-klar-light'>See your progress in one view</p>
              </div>

              {/* Top 5 Learnings */}
              <Card className='bg-klar-medium border-0 p-12'>
                <h2 className='text-4xl font-bold text-klar-white mb-8'>Top 5 Learnings This Month</h2>
                <ul className='space-y-4 text-2xl text-klar-lighter'>
                  <li>• Breaking complex problems into smaller steps</li>
                  <li>• Importance of structured planning before action</li>
                  <li>• How to identify and overcome perfectionism</li>
                  <li>• Creating sustainable routines that stick</li>
                  <li>• Recognizing when to ask for help</li>
                </ul>
              </Card>

              {/* Recurring Patterns */}
              <Card className='bg-klar-medium border-0 p-12'>
                <h2 className='text-4xl font-bold text-klar-white mb-8'>Recurring Patterns</h2>
                <div className='space-y-4 text-xl text-klar-lighter'>
                  <p className='text-2xl font-semibold text-klar-light'>Procrastination Pattern:</p>
                  <p>You tend to procrastinate most when tasks are unclear or feel too large. Solution: Always break tasks into smaller steps first.</p>
                </div>
              </Card>

              {/* Biggest Progress */}
              <Card className='bg-klar-medium border-0 p-12'>
                <h2 className='text-4xl font-bold text-klar-white mb-8'>Biggest Progress This Month</h2>
                <p className='text-2xl text-klar-lighter'>
                  From avoiding projects to starting them within 24 hours. You went from "I have to study" to concrete weekly plans.
                </p>
              </Card>

              {/* Most Meaningful */}
              <Card className='bg-klar-medium border-0 p-12'>
                <h2 className='text-4xl font-bold text-klar-white mb-8'>Most Meaningful Compliment</h2>
                <p className='text-2xl text-klar-lighter'>
                  "Your presentation was really well structured and thoughtful. You explained complex concepts clearly."
                </p>
              </Card>

              {/* Exit button */}
              <div className='text-center'>
                <Button
                  size='lg'
                  className='bg-klar-white text-klar-dark'
                  onClick={() => setSmartboardMode(false)}
                >
                  Exit Smartboard
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}