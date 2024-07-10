import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signup from './pages/Signup'
import Sigin from './pages/Sigin'
import About from './pages/About'


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/sign-up" element={<Signup />}/>
        <Route path="/sign-in" element={<Sigin />}/>
        <Route path="/about" element={<About />}/>
         
      </Routes>
    </BrowserRouter>
  )
}
