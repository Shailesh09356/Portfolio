import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Networking & Protocols",
    skills: [
      { name: "TCP/IP, DNS, DHCP", level: 90 },
      { name: "HTTP/HTTPS", level: 85 },
      { name: "Routing & Switching", level: 80 },
      { name: "VLANs & VPNs", level: 85 }
    ]
  },
  {
    title: "Network & Endpoint Security",
    skills: [
      { name: "Firewalls", level: 85 },
      { name: "IDS/IPS (Snort)", level: 80 },
      { name: "EDR/XDR (Trend Micro, Crowdstrike)", level: 90 },
      { name: "Email Security (Proofpoint)", level: 85 }
    ]
  },
  {
    title: "SIEM & Monitoring Tools",
    skills: [
      { name: "Splunk", level: 95 },
      { name: "FortiSIEM", level: 85 },
      { name: "Log Analysis & Correlation", level: 90 },
      { name: "Alert Triage", level: 95 }
    ]
  },
  {
    title: "Pentesting & Tools",
    skills: [
      { name: "Wireshark", level: 90 },
      { name: "Nmap & Nessus", level: 85 },
      { name: "Burp Suite", level: 80 },
      { name: "Metasploit", level: 75 }
    ]
  },
  {
    title: "Scripting & Platforms",
    skills: [
      { name: "Python (Basic)", level: 70 },
      { name: "Bash & PowerShell", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "Docker & Azure VM", level: 80 }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, x: 100 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-12 relative min-h-screen"
    >
      {/* Background Radar Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-900/30 opacity-20 pointer-events-none overflow-hidden -z-10 flex justify-center items-center">
        <div className="absolute inset-0 rounded-full border border-cyan-800/20 m-12"></div>
        <div className="absolute inset-0 rounded-full border border-cyan-700/20 m-24"></div>
        <div className="w-[1px] h-full bg-cyan-900/50 absolute"></div>
        <div className="h-[1px] w-full bg-cyan-900/50 absolute"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent origin-bottom-right"
          style={{ bottom: '50%', right: '50%' }}
        />
      </div>

      <div className="flex items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="SOC_SKILLS">SOC_SKILLS</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="cyber-card p-6 border-l-2 border-l-cyan-400 group hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide flex items-center gap-2">
              <span className="text-cyan-400">{'//'}</span> {category.title}
            </h3>
            
            <div className="space-y-5">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-600 to-cyan-300 group-hover:shadow-[0_0_8px_#00ffff]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Additional Dashboard Widget styled card */}
        <motion.div 
            variants={itemVariants}
            className="cyber-card p-6 border focus-within:border-red-500 flex flex-col justify-center items-center text-center h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2">
               <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full inline-block"></span>
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-24 rounded-full border-2 border-dashed border-red-500/50 flex items-center justify-center mb-4 text-red-500 font-bold"
            >
              SCAN
            </motion.div>
            <h3 className="text-white font-mono uppercase tracking-widest text-sm mb-2">Continuous Learning</h3>
            <p className="text-xs text-gray-400">Actively expanding capabilities in advanced threat hunting and malware analysis.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
