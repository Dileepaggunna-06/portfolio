import './App.css'
import Navbar from './nav.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import { Routes, Route } from 'react-router-dom'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
