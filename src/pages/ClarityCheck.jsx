import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '../components/Button'
import { Card, CardContent } from '../components/Card'
import { storage } from '../utils/storage'

export function ClarityCheck() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    field: '',
    semester: '',
    problem: '',
    exam: '',
    procrastination: '',
    support: ''
  })
  const [showResults, setShowResults] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1)
    }
  }

  const handleSubmit = () => {
    storage.set('clarityCheckResults', formData)
    setShowResults(true)
  }

  const steps = [
    {
      number: 1,
      title: 'What is your field of study?',
      type: 'select',
      name: 'field',
      options: ['Medicine', 'Law', 'Psychology', 'Computer Science', 'Business', 'Engineering', 'Teaching', 'Social Work', 'Humanities', 'Natural Sciences', 'Aviation', 'Other']
    },
    {
      number: 2,
      title: 'Which semester are you in?',
      type: 'input',
      name: 'semester',
      placeholder: 'e.g., 3rd semester'
    },
    {
      number: 3,
      title: 'What is your biggest current problem?',
      type: 'select',
      name: 'problem',
      options: ['Procrastination', 'Overwhelm', 'Exam anxiety', 'Decision pressure', 'Lack of structure', 'Self doubt', 'Loss of motivation', 'Doubts about changing studies']
    },
    {
      number: 4,
      title: 'Is there a current exam or decision?',
      type: 'input',
      name: 'exam',
      placeholder: 'e.g., Final exam in 6 weeks or choosing a master program'
    },
    {
      number: 5,
      title: 'How often do you struggle with procrastination?',
      type: 'select',
      name: 'procrastination',
      options: ['Rarely', 'Sometimes', 'Often', 'Almost always', 'It is my biggest block']
    },
    {
      number: 6,
      title: 'What type of support would help you most?',
      type: 'select',
      name: 'support',
      options: ['E Learning only', 'Coaching conversations', 'Both E Learning and coaching', 'Just tools and structure', 'Personalized guidance']
    }
  ]

  if (showResults) {
    return (
      <div className='min-h-screen bg-klar-bg'>
        <div className='section-max-width section-padding'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-2xl mx-auto'
          >
            <div className='text-center mb-12'>
              <h1 className='heading-lg mb-4'>Your Assessment</h1>
              <p className='text-klar-grey text-lg'>Based on your answers, here is our recommendation:</p>
            </div>

            <Card className='mb-8'>
              <CardContent>
                <div className='space-y-6'>
                  <div>
                    <h3 className='font-semibold text-klar-dark mb-2'>Your Situation</h3>
                    <p className='text-klar-grey'>
                      You are a {formData.semester} student in {formData.field} dealing with {formData.problem}. Your biggest block is procrastination happening {formData.procrastination}.
                    </p>
                  </div>

                  <div className='border-t border-klar-lighter pt-6'>
                    <h3 className='font-semibold text-klar-dark mb-2'>Main Block</h3>
                    <p className='text-klar-grey'>
                      Based on your answers, your main block seems to be a combination of unclear structure and {formData.problem.toLowerCase()}. This is very common and very solvable.
                    </p>
                  </div>

                  <div className='border-t border-klar-lighter pt-6'>
                    <h3 className='font-semibold text-klar-dark mb-3'>Recommended Program</h3>
                    <div className='bg-klar-lighter rounded-lg p-4'>
                      <p className='font-semibold text-klar-dark mb-2'>KLAR Against Procrastination</p>
                      <p className='text-sm text-klar-grey mb-4'>
                        This program directly addresses procrastination, helps you untangle tasks, and gives you implementation strategies specifically designed for students like you.
                      </p>
                      <Link to='/procrastination'>
                        <Button size='sm'>
                          Explore the Program
                          <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className='border-t border-klar-lighter pt-6'>
                    <h3 className='font-semibold text-klar-dark mb-2'>First Small Step</h3>
                    <p className='text-klar-grey'>
                      Start by identifying just one task that you have been procrastinating on. Make it very specific: "Study pages 5-12 of the skript for Monday's lecture" instead of "study". Write it down. This clarity alone often helps you start.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to='/programs' className='flex-1'>
                <Button size='lg' className='w-full'>
                  Explore all Programs
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <a href='mailto:hello@klarstudy.de' className='flex-1'>
                <Button variant='secondary' size='lg' className='w-full'>
                  <Mail size={20} />
                  Book a Conversation
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  const currentStep = steps[step - 1]

  return (
    <div className='min-h-screen bg-gradient-to-br from-klar-white via-klar-white to-klar-lighter flex items-center'>
      <div className='section-max-width section-padding w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-2xl mx-auto'
        >
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='heading-lg mb-4'>Clarity Check</h1>
            <p className='text-lg text-klar-grey'>
              10 minutes to understand your blocks and get personalized recommendations.
            </p>
          </div>

          {/* Progress Bar */}
          <div className='mb-12'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-sm font-semibold text-klar-dark'>Step {step} of 6</span>
              <span className='text-sm text-klar-grey'>{Math.round((step / 6) * 100)}%</span>
            </div>
            <div className='w-full bg-klar-lighter rounded-full h-2'>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(step / 6) * 100}%` }}
                transition={{ duration: 0.3 }}
                className='bg-klar-medium h-2 rounded-full'
              ></motion.div>
            </div>
          </div>

          {/* Form Card */}
          <Card className='mb-8'>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className='heading-md mb-6'>{currentStep.title}</h2>

              {currentStep.type === 'select' ? (
                <div className='space-y-3'>
                  {currentStep.options.map((option) => (
                    <label key={option} className='flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all'
                      style={{
                        borderColor: formData[currentStep.name] === option ? '#2F4A63' : '#DCE8F2',
                        backgroundColor: formData[currentStep.name] === option ? '#DCE8F2' : '#FFFFFF'
                      }}
                    >
                      <input
                        type='radio'
                        name={currentStep.name}
                        value={option}
                        checked={formData[currentStep.name] === option}
                        onChange={handleChange}
                        className='w-4 h-4 accent-klar-dark'
                      />
                      <span className='ml-3 font-medium text-klar-dark'>{option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type='text'
                  name={currentStep.name}
                  value={formData[currentStep.name]}
                  onChange={handleChange}
                  placeholder={currentStep.placeholder}
                  className='w-full px-4 py-3 rounded-lg border-2 border-klar-lighter focus:border-klar-medium focus:outline-none'
                />
              )}
            </motion.div>
          </Card>

          {/* Navigation */}
          <div className='flex gap-4'>
            {step > 1 && (
              <Button variant='secondary' size='lg' className='flex-1' onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step < 6 ? (
              <Button
                size='lg'
                className='flex-1'
                onClick={handleNext}
                disabled={!formData[currentStep.name]}
                style={{ opacity: !formData[currentStep.name] ? 0.5 : 1 }}
              >
                Next
                <ArrowRight size={20} />
              </Button>
            ) : (
              <Button
                size='lg'
                className='flex-1'
                onClick={handleSubmit}
                disabled={!formData[currentStep.name]}
                style={{ opacity: !formData[currentStep.name] ? 0.5 : 1 }}
              >
                Get Results
                <ArrowRight size={20} />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}