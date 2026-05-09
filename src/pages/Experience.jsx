import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    role: "SOC Intern",
    company: "Amazure Technologies Pvt. Ltd.",
    location: "Pune",
    duration: "Dec 2025 – Mar 2026",
    logs: [
      "Monitored and analyzed real-time alerts using Splunk and Trend Micro Vision One",
      "Performed alert triage and investigation for 35+ alerts/day",
      "Analyzed network, endpoint, and email logs for suspicious activities",
      "Assisted in incident response and threat containment"
    ],
    status: "COMPLETED"
  },
  {
    id: 2,
    role: "QA Intern",
    company: "Atologist Infotech",
    location: "Surat",
    duration: "Jun 2025 – Aug 2025",
    logs: [
      "Manual and functional testing for web applications",
      "Designed test cases and documented defects",
      "Conducted basic security testing including authentication and input validation",
      "Collaborated with developers to ensure secure and stable releases"
    ],
    status: "ARCHIVED"
  }
];

const Experience = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const initialLogs = [
      "[SYSTEM] Authenticating user credentials...",
      "[SYSTEM] Access granted to secure logs.",
      "[SYS_PROC] Fetching historical employment records...",
      "[SYS_PROC] Decrypting node data: Amazure Technologies",
      "[SYS_PROC] Decrypting node data: Atologist Infotech",
      "[OK] Log stream initialized."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < initialLogs.length) {
        setLogs(prev => [...prev, initialLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-12 min-h-screen"
    >
      <div className="flex items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="SYS_LOGS:EXP">SYS_LOGS:EXP</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
      </div>

      {/* Intro Terminal Log */}
      <div className="mb-10 font-mono text-xs text-green-400 bg-black/60 p-4 border border-green-500/30 rounded h-32 overflow-hidden flex flex-col justify-end">
        {logs.map((log, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={idx}
          >
            {log}
          </motion.div>
        ))}
        {logs.length === 6 && (
          <div className="text-cyan-400 animate-pulse mt-2">{'>'} READY_</div>
        )}
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/50 before:to-transparent">
        {experienceData.map((exp, idx) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-black shadow-[0_0_10px_rgba(0,255,255,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform z-10">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full absolute"></div>
            </div>

            {/* Exp Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] cyber-card p-6 border-l-4 border-l-cyan-500">
               <div className="flex justify-between items-start mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-white uppercase">{exp.role}</h3>
                   <h4 className="text-cyan-400 font-mono text-sm">{exp.company} | {exp.location}</h4>
                 </div>
                 <div className="text-right">
                   <span className="inline-block px-2 py-1 bg-cyan-950 text-cyan-300 text-xs font-mono uppercase mb-1 border border-cyan-800 rounded">
                     {exp.duration}
                   </span>
                   <p className={`text-xs font-bold font-mono text-right ${exp.status === 'COMPLETED' ? 'text-green-400' : 'text-gray-400'}`}>
                     [{exp.status}]
                   </p>
                 </div>
               </div>

               <div className="bg-black/40 p-4 border border-gray-800 rounded mt-4 font-mono text-sm">
                 <p className="text-gray-500 mb-2">// LOG ENTRIES</p>
                 <ul className="space-y-2">
                   {exp.logs.map((log, lIdx) => (
                     <li key={lIdx} className="flex items-start">
                       <span className="text-cyan-500 mr-2">{'>'}</span>
                       <span className="text-gray-300 group-hover:text-gray-100 transition-colors">{log}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
