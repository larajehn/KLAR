import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { FieldSelection } from './pages/FieldSelection'
import { Programs } from './pages/Programs'
import { Reflection } from './pages/Reflection'
import { Procrastination } from './pages/Procrastination'
import { Coaching } from './pages/Coaching'
import { About } from './pages/About'
import { FAQ } from './pages/FAQ'
import { ClarityCheck } from './pages/ClarityCheck'

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/field-selection' element={<FieldSelection />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/reflection' element={<Reflection />} />
            <Route path='/procrastination' element={<Procrastination />} />
            <Route path='/coaching' element={<Coaching />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/clarity-check' element={<ClarityCheck />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App