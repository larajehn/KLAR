import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Card } from '../components/Card'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Is this therapy?',
      answer: 'No. KLAR Study is coaching, E Learning, and self-structuring tools. It does not replace psychotherapy or medical treatment. If you need professional mental health support, please consult a licensed therapist or mental health professional.'
    },
    {
      question: 'Who is this suitable for?',
      answer: 'KLAR Study is designed for students who want structure, clarity, and support in their studies. It works best for students who are motivated but struggle with organization, procrastination, overwhelm, or decision-making.'
    },
    {
      question: 'Do I need to know my exact field of study?',
      answer: 'No. We offer an "Other field of study" option that works with general principles. However, our personalized approach works best when we understand your specific field.'
    },
    {
      question: 'What happens to my data?',
      answer: 'Your data is stored securely and only used to improve your experience. We never share your personal information with third parties. All reflection data is private.'
    },
    {
      question: 'Can I book only the E Learning?',
      answer: 'Yes. Every program includes E Learning modules. You can choose to do them solo or add coaching sessions for additional support.'
    },
    {
      question: 'Is there an offer for procrastination?',
      answer: 'Yes. We offer "KLAR Against Procrastination" - a complete program specifically designed for students dealing with procrastination and avoidance.'
    },
    {
      question: 'How does the AI analysis work?',
      answer: 'The AI helps categorize your journal entries automatically and recognizes patterns over time. You always have full control and can adjust any categorization.'
    },
    {
      question: 'Can I use my Excel list?',
      answer: 'Yes. You can import your existing learning journal into the KLAR Reflection System. We support CSV and Excel imports.'
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
          <h1 className='heading-lg mb-4'>Frequently Asked Questions</h1>
          <p className='text-lg text-klar-grey max-w-2xl mx-auto'>
            Find answers to common questions about KLAR Study, our programs, and how we work.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05 }}
          className='max-w-3xl mx-auto space-y-3'
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                hover
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='cursor-pointer'
              >
                <div className='flex items-center justify-between'>
                  <h3 className='font-semibold text-klar-dark pr-4'>{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='flex-shrink-0'
                  >
                    <ChevronDown size={24} className='text-klar-medium' />
                  </motion.div>
                </div>

                {/* Answer */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden'
                >
                  <div className='mt-4 pt-4 border-t border-klar-lighter'>
                    <p className='text-klar-grey leading-relaxed'>{faq.answer}</p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <p className='text-lg text-klar-grey mb-4'>
            Did not find your answer?
          </p>
          <a
            href='mailto:hello@klarstudy.de'
            className='inline-block text-klar-medium hover:text-klar-dark font-semibold transition-colors'
          >
            Get in touch with us
          </a>
        </motion.div>
      </div>
    </div>
  )
}