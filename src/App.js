
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';

import Navbar from './components/Navbar/navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <HeroSection/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
