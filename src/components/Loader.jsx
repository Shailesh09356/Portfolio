import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [text, setText] = useState('0%');

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress > 100) progress = 100;
      setText(`${progress}%`);
      if (progress === 100) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center font-mono text-cyan-400">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mb-8 relative"
      >
        <div className="w-32 h-32 rounded-full border-4 border-t-cyan-400 border-r-cyan-400 border-b-cyan-600 border-l-cyan-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold tracking-widest text-[#050505] bg-cyan-400 px-2 rounded">SOC</span>
        </div>
      </motion.div>
      <h1 className="text-3xl glitch font-bold mb-4" data-text="Decrypting Portfolio...">
        Decrypting Portfolio...
      </h1>
      <div className="w-64 max-w-[80vw] h-2 bg-gray-900 border border-cyan-500/50 rounded overflow-hidden">
         <motion.div 
           className="h-full bg-cyan-400 shadow-[0_0_10px_#00ffff]"
           initial={{ width: 0 }}
           animate={{ width: text }}
         />
      </div>
      <p className="mt-4 text-sm tracking-widest">
        SYSTEM LOAD: <span className="text-green-400">{text}</span>
      </p>
    </div>
  );
};

export default Loader;
