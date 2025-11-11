import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="mb-20">    
        <Hero/>
      </div>
  
      
      <About />
      <CV />
      <Projects />
      <Gallery />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
