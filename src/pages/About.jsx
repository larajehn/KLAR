import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/Button'
import { Card, CardDescription, CardTitle } from '../components/Card'

export function About() {
  return (
    <div className='min-h-screen bg-klar-bg'>
      <div className='section-max-width section-padding'>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-3xl mx-auto'
        >
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='heading-lg mb-4'>I combine structure, depth, and implementation.</h1>
            <p className='text-xl text-klar-grey leading-relaxed'>
              I work with students who think a lot, perceive a lot, and often have more potential than they are currently able to express in everyday life. Many do not struggle because they do not want enough. They struggle because too many things are open at the same time. That is why my work does not start with more pressure. It starts with clarity.
            </p>
          </div>

          {/* KLAR Method */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='heading-md mb-8 text-center'>The KLAR Method</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  letter: 'K',
                  title: 'Clarification',
                  description: 'We understand your current situation without judgment. What is really blocking you? What have you already tried?'
                },
                {
                  letter: 'L',
                  title: 'Direction',
                  description: 'Together we define where you want to go. Not abstractly, but concrete and realistic for your life right now.'
                },
                {
                  letter: 'A',
                  title: 'Action',
                  description: 'We break everything down into small, doable steps. The next action is always clear and achievable.'
                },
                {
                  letter: 'R',
                  title: 'Reflection',
                  description: 'We review regularly. What worked? What did you learn? How do we adjust? Progress becomes visible.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className='h-full text-center'>
                    <div className='w-16 h-16 bg-klar-lighter rounded-2xl flex items-center justify-center mx-auto mb-4'>
                      <span className='text-3xl font-bold text-klar-medium'>{step.letter}</span>
                    </div>
                    <CardTitle className='mb-3'>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='heading-md mb-6'>Background</h2>
            <div className='space-y-4 text-klar-grey leading-relaxed'>
              <p>
                I completed my studies in Psychology with a focus on learning psychology and organizational development. In my own studies, I experienced overwhelm, procrastination, and the feeling of never doing enough. I realized that the standard productivity advice did not work for me because it ignored the emotional and structural dimensions of studying.
              </p>
              <p>
                Over the past years, I have worked with hundreds of students from different fields. What struck me was that the problems were not different. They were always the same: too much is open at once, no clear structure, unclear what success looks like, constant self-doubt.
              </p>
              <p>
                This is why I developed KLAR Study. It combines what research tells us about learning, productivity, and well-being with what I have learned from working directly with students. It is not theory. It is practice.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-klar-dark text-klar-white rounded-2xl p-12 text-center'
          >
            <h2 className='text-3xl font-bold mb-4'>Let's work together</h2>
            <p className='text-klar-light mb-8 max-w-2xl mx-auto'>
              Whether you want to explore the programs, have questions, or prefer a personal conversation first - I am here for you.
            </p>
            <Button size='lg' className='bg-klar-white text-klar-dark hover:bg-klar-lighter'>
              Book a clarity conversation
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}