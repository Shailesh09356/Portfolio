import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, BadgeCheck } from 'lucide-react';

const certs = [
  { name: "Crowdstrike Falcon100", desc: "Falcon Platform Architecture Overview", issuer: "CrowdStrike" },
  { name: "Fortinet FortiSIEM Fundamentals", desc: "SIEM Basics & Log Analysis", issuer: "Fortinet" },
  { name: "Trend Micro Vision One", desc: "Endpoint Security Foundation & Practitioner", issuer: "Trend Micro" },
  { name: "Proofpoint Email Security", desc: "Phishing & Threat Protection", issuer: "Proofpoint" },
  { name: "Advent of Cyber 2025", desc: "Security challenges & defense", issuer: "TryHackMe" }
];

const Certifications = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: 50 }
  };
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible" exit="exit" className="py-12 min-h-[80vh]">
      <div className="flex items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="CERT_AUTHORITY">CERT_AUTHORITY</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div key={idx} variants={item} whileHover={{ scale: 1.05 }} className="cyber-card p-6 flex flex-col items-center text-center relative group isolate">
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            
            <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_#00ffff] transition-shadow relative">
               <ShieldCheck className="w-8 h-8 text-cyan-400 group-hover:text-white" />
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                 className="absolute inset-[-4px] border border-dashed border-cyan-400/30 rounded-full"
               ></motion.div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{cert.desc}</p>
            <div className="mt-auto inline-flex items-center gap-1 bg-black border border-gray-800 px-3 py-1 rounded text-xs text-green-400 font-mono group-hover:border-green-500/50">
              <BadgeCheck className="w-3 h-3" />
              {cert.issuer} Verified
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;
