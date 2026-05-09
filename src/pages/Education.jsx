import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Library } from 'lucide-react';

const Education = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 min-h-[80vh] flex flex-col justify-center items-center">
      <div className="w-full flex items-center mb-16 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="ACADEMIC_RECORD">ACADEMIC_RECORD</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>

      <div className="w-full max-w-3xl relative">
        <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent"></div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pl-20"
        >
          {/* Node dot */}
          <div className="absolute left-0 top-6 w-14 h-14 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-blue-400/50"
            />
          </div>

          <div className="cyber-card p-8 border-t-4 border-blue-500 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Library className="w-48 h-48" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider">Sandip University</h3>
                <h4 className="text-blue-400 font-mono tracking-widest">Nashik, India</h4>
              </div>
              <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-950/50 border border-blue-800 rounded text-blue-300 font-mono text-sm self-start">
                Aug 2022 – Jul 2026
              </div>
            </div>

            <div className="space-y-4 font-mono">
              <p className="text-lg text-gray-200 font-bold">
                <span className="text-blue-500 mr-2">{'>'}</span> 
                B.Tech in Computer Science & Engineering
              </p>
              <p className="text-cyan-300 ml-6 tracking-wide">
                [ Specialization: Cybersecurity & Forensics ]
              </p>
              
              <div className="mt-6 ml-6 p-4 bg-black/40 border border-gray-800 rounded inline-block group-hover:border-blue-500/30 transition-colors">
                <span className="text-gray-500 mb-1 block">Current GPA</span>
                <span className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">8.21</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
