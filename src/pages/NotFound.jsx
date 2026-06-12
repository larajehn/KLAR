import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'
import { Button } from '../components/Button'

export function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-klar-white via-klar-white to-klar-lighter flex items-center'>
      <div className='section-max-width section-padding w-full text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className='text-6xl md:text-8xl font-bold text-klar-medium mb-4'>404</h1>
          <h2 className='heading-lg mb-4'>Page not found</h2>
          <p className='text-lg text-klar-grey mb-8 max-w-md mx-auto'>
            This page does not exist. Let's get you back on track to clarity.
          </p>
          <Link to='/'>
            <Button size='lg'>
              <Home size={20} />
              Back to Home
              <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}