import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Eye, Mail, ShieldAlert } from 'lucide-react';

const TypewriterText = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = texts[currentTextIndex];

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      const timeout = isDeleting ? 30 : 50;
      timer = setTimeout(() => {
        setDisplayText((prev) => 
          isDeleting 
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      }, timeout);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="text-green-400 font-mono">
      {`> ${displayText}`}
      <span className="terminal-cursor"></span>
    </span>
  );
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: { 
      opacity: 0,
      x: -100,
      transition: { ease: 'easeInOut' }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center gap-12 py-10 overflow-hidden"
    >
      {/* Left Column: Text */}
      <div className="flex-1 space-y-6 z-10 w-full">
        <motion.div variants={itemVariants} className="h-8 md:h-10 text-sm md:text-base">
          <TypewriterText texts={[
            "Initializing SOC Profile...", 
            "Threat Monitoring Active...", 
            "Loading Analyst Identity...", 
            "Welcome, Shailesh Thakare."
          ]} />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
        >
          <span className="block glitch text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" data-text="SHAILESH">SHAILESH</span>
          <span className="block glitch text-cyan-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" data-text="THAKARE">THAKARE</span>
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 border-l-4 border-cyan-500 pl-4 py-1"
        >
          "SOC Analyst | SIEM Monitoring | Incident Response | Threat Detection"
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
          <a href="/resume.pdf" target="_blank" className="neon-button group">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
          <Link to="/projects" className="neon-button">
            <Eye className="w-4 h-4 mr-2" />
            View Projects
          </Link>
          <Link to="/contact" className="neon-button">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Link>
        </motion.div>

        {/* Small dashboard widgets */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-10 text-xs font-mono">
          <div className="cyber-card p-3 border-l-4 border-l-cyan-500">
            <p className="text-gray-500">Status</p>
            <p className="text-cyan-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              SOC ACTIVE
            </p>
          </div>
          <div className="cyber-card p-3 border-l-4 border-l-green-500">
            <p className="text-gray-500">Firewall</p>
            <p className="text-green-400 font-bold uppercase">Enabled</p>
          </div>
          <div className="cyber-card p-3 border-l-4 border-l-red-500">
            <p className="text-gray-500">Alerts Today</p>
            <p className="text-red-400 font-bold text-lg">35+</p>
          </div>
          <div className="cyber-card p-3 border-l-4 border-l-yellow-500">
            <p className="text-gray-500">Threat Level</p>
            <p className="text-yellow-400 font-bold flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              MEDIUM
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Image */}
      <motion.div 
        variants={itemVariants}
        className="flex-1 flex justify-center items-center py-10 z-10 w-full"
      >
        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
          {/* Cyber Ring Backgrounds */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/50"
          ></motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-4 rounded-full border border-cyan-400/30"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-8 rounded-full shadow-[0_0_40px_rgba(0,255,255,0.2)]"
          ></motion.div>

          {/* Profile Image Container */}
          <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_#00ffff] bg-black group relative">
            <img 
              src="/profile.png" 
              alt="Shailesh Thakare" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
            />
            {/* Hologram / Glitch overlay map effect */}
            <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity"></div>
            
            {/* Scanner line animation */}
            <motion.div 
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 w-full h-1 bg-cyan-300 shadow-[0_0_15px_#00ffff] z-20"
            ></motion.div>
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-10 -right-4 md:-right-10 cyber-card px-3 py-1 text-xs text-green-400 font-mono border-green-500/50 shadow-[0_0_10px_rgba(0,255,65,0.2)]"
          >
            TARGET_LOCKED
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-20 -left-6 md:-left-12 cyber-card px-3 py-1 text-xs text-cyan-400 font-mono border-cyan-500/50 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            SYS_ONLINE
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
