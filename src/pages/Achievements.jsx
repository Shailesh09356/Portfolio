import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Target, Trophy, Flag, Shield } from 'lucide-react';
import { useEffect } from 'react';

const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = React.useState(from);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <>{count}{to === 30 ? '+' : ''}</>;
};

const Achievements = () => {
  const cards = [
    { icon: <Target className="w-8 h-8 text-red-500" />, title: "30+ Projects", desc: "Freelance QA and security testing completed successfully.", countTo: 30 },
    { icon: <Shield className="w-8 h-8 text-cyan-400" />, title: "Blue Team Labs", desc: "Completed Splunk SOC/SIEM labs and TryHackMe paths.", countTo: 100 },
    { icon: <Trophy className="w-8 h-8 text-yellow-500" />, title: "NASA Space Apps 2024", desc: "Participant in global hackathon solving critical challenges.", type: "badge" },
    { icon: <Flag className="w-8 h-8 text-green-500" />, title: "Smart India Hackathon 2024", desc: "Participant developing innovative technical solutions.", type: "badge" },
    { icon: <Target className="w-8 h-8 text-purple-500" />, title: "Top 1% TryHackMe", desc: "Ranked in the top 1% globally on the TryHackMe cybersecurity platform.", type: "badge" },
    { icon: <Trophy className="w-8 h-8 text-cyan-400" />, title: "Winner - Empathy Encryption Hackathon", desc: "Created a script to evaluate password complexity, ensuring strong security while keeping passwords memorable.", type: "badge" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 min-h-[80vh]">
      <div className="flex items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="MILESTONES">MILESTONES</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="cyber-card p-6 flex items-center gap-6 group hover:border-yellow-500/40"
          >
            <div className="p-4 bg-black/60 rounded-lg border border-gray-800 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all">
              {card.icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1 font-mono">
                {card.countTo ? <AnimatedCounter to={card.countTo} /> : <span className="text-yellow-400">ACHIEVED</span>}
              </div>
              <h3 className="font-bold text-gray-300 uppercase">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1 bg-yellow-500/0 group-hover:bg-yellow-500/50 transition-colors"></div>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="col-span-full mt-6 cyber-card p-6 border-l-4 border-cyan-500 flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h3 className="text-cyan-400 font-bold uppercase tracking-wider mb-2">Current Objective:</h3>
            <p className="text-gray-300">Actively learning threat hunting, detection engineering, and SOC automation.</p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-green-400 text-sm animate-pulse flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div> IN_PROGRESS...
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Achievements;
