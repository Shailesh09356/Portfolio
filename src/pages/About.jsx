import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Crosshair, Server, Shield } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const highlights = [
    { icon: <Shield className="w-6 h-6 text-cyan-400" />, title: "SOC Operations", desc: "SIEM monitoring & alert triage" },
    { icon: <Crosshair className="w-6 h-6 text-red-500" />, title: "Threat Hunt", desc: "Log analysis & incident response" },
    { icon: <Terminal className="w-6 h-6 text-green-400" />, title: "Pentesting", desc: "30+ freelance testing projects" },
    { icon: <Server className="w-6 h-6 text-purple-400" />, title: "Infrastructure", desc: "EDR/XDR and Firewall mgmt" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-12 min-h-[80vh] flex flex-col justify-center"
    >
      <div className="flex items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="ABOUT_ME">ABOUT_ME</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="cyber-card p-8 border-t-4 border-t-cyan-500">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-500 font-mono tracking-widest">profile.exe</span>
          </div>
          
          <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-sm md:text-base">
            <p>
              <span className="text-cyan-400 font-bold">{'>'}</span> Cybersecurity graduate with hands-on SOC experience in SIEM monitoring, EDR/XDR, and incident response. 
            </p>
            <p>
              <span className="text-cyan-400 font-bold">{'>'}</span> Skilled in threat detection, alert triage, and log analysis using Splunk, FortiSIEM, and Trend Micro Vision One. 
            </p>
            <p>
              <span className="text-cyan-400 font-bold">{'>'}</span> Completed 30+ freelance security testing projects. Seeking entry-level SOC Analyst / Security Analyst roles to continuously evolve and defend against modern cyber threats.
            </p>
            <p className="pt-4 text-green-400 animate-pulse">_Ready to deploy.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cyber-card p-6 flex flex-col items-center text-center gap-4 group"
            >
              <div className="p-4 rounded-full bg-black/50 border border-gray-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-gray-400 font-mono">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
