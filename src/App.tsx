// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
import Footer from './components/footer'
import CCPA from './pages/legal/CCPA'
import ColoradoSafetyPolicy from './pages/legal/ColoradoSafetyPolicy'
import CommunityGuidelines from './pages/legal/CommunityGuidelines'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import SafetyTips from './pages/legal/SafetyTips'
import TermsAndConditions from './pages/legal/TermsAndConditions'
import Careers from './pages/company/Careers'
import Press from './pages/company/Press'
import Support from './pages/company/Support'
import BusinessListingForm from './pages/BusinessListing'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <header>
        {/* <nav className="p-4 bg-peachPuff">
            <div className="flex justify-between items-center">
              <h1 
                className="text-2xl font-bold text-hotPink"
              >
                Blind Date
              </h1>
              <div className="space-x-4">
                <a className="text-hotPink" href="#about">About</a>
                <a className="text-hotPink" href="#questionnaire">Questionnaire</a>
                <a className="text-hotPink" href="#results">Results</a>
                <a className="text-hotPink" href="#contact">Contact</a>
              </div>
            </div>
          </nav> */}
          <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comingsoon" element={<Contact />} />
          <Route path="/legal/ccpa" element={<CCPA />} />
          <Route path="/legal/colorado_safety_policy" element={<ColoradoSafetyPolicy />} />
          <Route path="/legal/community_guidelines" element={<CommunityGuidelines />} />
          <Route path="/legal/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/legal/safety_tips" element={<SafetyTips />} />
          <Route path="/legal/terms_and_conditions" element={<TermsAndConditions />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/press" element={<Press />} />
          <Route path="/company/support" element={<Support />} />
          <Route path="/company/become_a_host" element={<BusinessListingForm />} />
          <Route path="*" element={<NotFound /> }/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App