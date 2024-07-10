import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signup from './pages/Signup'
import Sigin from './pages/Sigin'
import About from './pages/About'
import Header from './components/Header'


export default function App() {
  return(
    <BrowserRouter>
      <Header />
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
