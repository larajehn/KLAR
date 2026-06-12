import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle, Users, BookOpen, Target } from 'lucide-react'
import { Button } from '../components/Button'
import { Card, CardContent, CardDescription, CardTitle } from '../components/Card'

export function Coaching() {
  const topics = [
    'Procrastination',
    'Overwhelm',
    'Decisions',
    'Exam preparation',
    'Self doubt',
    'Study planning',
    'Routines',
    'Priorities',
    'Self leadership',
    'Dealing with pressure'
  ]

  const formats = [
    {
      title: 'Individual Coaching',
      description: 'One-on-one sessions tailored to your specific situation',
      features: ['Personalized approach', 'Flexible scheduling', 'Full attention']
    },
    {
      title: '3-Session Package',
      description: 'Structured program with clear goals and milestones',
      features: ['3 focused sessions', 'Between-session support', 'Action plans']
    },
    {
      title: '6-Session Package',
      description: 'Deep dive into your challenges with ongoing support',
      features: ['6 comprehensive sessions', 'Email support', 'Progress tracking']
    },
    {
      title: 'E Learning + Coaching',
      description: 'Combine self-paced learning with guided coaching',
      features: ['Structured modules', 'Coaching check-ins', 'Accountability']
    },
    {
      title: 'Group Workshop',
      description: 'Interactive workshop for small groups of students',
      features: ['Peer learning', 'Shared challenges', 'Group dynamics']
    },
    {
      title: 'Smartboard Session',
      description: 'Reflection session optimized for workshops and seminars',
      features: ['Large group format', 'Visual analytics', 'Engaging experience']
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
          <h1 className='heading-lg mb-4'>Coaching</h1>
          <p className='text-xl text-klar-grey max-w-3xl mx-auto'>
            When you do not need more tips, but someone who helps you create order. In coaching, we look at your concrete situation together. Not abstractly, not judgmentally, but in a structured way. We analyze what is blocking you, which patterns repeat, and which next step is realistic.
          </p>
        </motion.div>

        {/* Topics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='heading-md text-center mb-8'>We work on topics like:</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className='bg-klar-white border border-klar-lighter rounded-lg p-4 text-center'
              >
                <CheckCircle size={20} className='text-klar-medium mx-auto mb-2' />
                <p className='text-sm font-medium text-klar-dark'>{topic}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Formats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='heading-md text-center mb-8'>Coaching Formats</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {formats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className='h-full hover'>
                  <div className='w-10 h-10 bg-klar-lighter rounded-lg flex items-center justify-center mb-4'>
                    {index < 3 ? (
                      <MessageCircle size={20} className='text-klar-medium' />
                    ) : index < 5 ? (
                      <Users size={20} className='text-klar-medium' />
                    ) : (
                      <Target size={20} className='text-klar-medium' />
                    )}
                  </div>
                  <CardTitle className='mb-2'>{format.title}</CardTitle>
                  <CardDescription className='mb-4'>{format.description}</CardDescription>
                  <ul className='space-y-2'>
                    {format.features.map((feature, i) => (
                      <li key={i} className='flex gap-2 text-sm'>
                        <CheckCircle size={16} className='text-klar-medium flex-shrink-0 mt-0.5' />
                        <span className='text-klar-dark'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-klar-lighter rounded-2xl p-12 mb-16'
        >
          <h2 className='heading-md text-center mb-8'>How It Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                number: '1',
                title: 'Clarity Conversation',
                description: 'We talk about your current situation, challenges, and goals. No judgment, just honest conversation.'
              },
              {
                number: '2',
                title: 'Structured Approach',
                description: 'Using the KLAR method, we analyze what is blocking you and create a realistic action plan.'
              },
              {
                number: '3',
                title: 'Regular Review',
                description: 'In follow-up sessions, we check progress, adjust as needed, and celebrate wins.'
              }
            ].map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-klar-medium text-klar-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold'>
                    {step.number}
                  </div>
                  <h3 className='font-semibold text-klar-dark mb-2'>{step.title}</h3>
                  <p className='text-klar-grey text-sm'>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-klar-dark text-klar-white rounded-2xl p-12 text-center'
        >
          <h2 className='text-3xl font-bold mb-4'>Ready for a conversation?</h2>
          <p className='text-klar-light mb-8 max-w-2xl mx-auto'>
            Book a free clarity conversation to discuss your situation, learn about the coaching formats, and see if this is the right fit for you.
          </p>
          <Button size='lg' className='bg-klar-white text-klar-dark hover:bg-klar-lighter'>
            Book a Clarity Conversation
          </Button>
        </motion.section>
      </div>
    </div>
  )
}