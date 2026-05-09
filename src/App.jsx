import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import MatrixBackground from './components/MatrixBackground';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Contact from './pages/Contact';

const MobileOnePage = () => (
  <div className="flex flex-col gap-16 pb-20 overflow-x-hidden">
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="skills"><Skills /></section>
    <section id="experience"><Experience /></section>
    <section id="projects"><Projects /></section>
    <section id="certifications"><Certifications /></section>
    <section id="achievements"><Achievements /></section>
    <section id="education"><Education /></section>
    <section id="contact"><Contact /></section>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Artificial delay for the decryption loader effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handle smooth scrolling for mobile when navigation link is clicked
  useEffect(() => {
    if (isMobile && !loading) {
      if (location.pathname === '/') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         const sectionId = location.pathname.substring(1);
         const element = document.getElementById(sectionId);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
         }
      }
    }
  }, [location.pathname, isMobile, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen scanlines antialiased relative">
      <MatrixBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
        <AnimatePresence mode="wait">
          {isMobile ? (
            <motion.div
               key="mobile-view"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
              <MobileOnePage />
            </motion.div>
          ) : (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </AnimatePresence>
      </main>
      
      <footer className="relative z-10 border-t border-cyan-500/30 bg-black/60 backdrop-blur-sm text-center py-6 mt-12">
        <p className="text-cyan-500/80 text-sm tracking-widest font-mono">
          © 2026 Shailesh Thakare | SOC Mode: ACTIVE
        </p>
      </footer>
    </div>
  );
}

export default App;
