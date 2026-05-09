import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Info, TerminalSquare } from 'lucide-react';

const projects = [
  {
    title: "Cloud-Based Cybersecurity Lab",
    type: "Azure Simulation Environment",
    tech: ["Azure VM", "DVWA", "OWASP Juice Shop", "Snort IDS", "Splunk SIEM"],
    desc: "A fully simulated real-world SOC environment. Includes vulnerable applications deployed alongside intrusion detection and SIEM for active threat monitoring and alert investigation.",
    links: { github: "#", demo: "#", details: "#" }
  },
  {
    title: "GitHubBuddy",
    type: "Repository Vulnerability Scanner",
    tech: ["Python", "Bandit", "Safety", "Gitleaks", "JSON/HTML Reports"],
    desc: "Automated DevSecOps Python tool to scan GitHub repositories for security vulnerabilities, exposed secrets, and dependency flaws, generating comprehensive security reports.",
    links: { github: "#", demo: "#", details: "#" }
  },
  {
    title: "NetCluster",
    type: "Distributed Security Computing Tool",
    tech: ["Python", "PyQt GUI", "Distributed Systems", "Hash Cracking"],
    desc: "Master-Worker distributed architecture system for heavy computational security tasks like parallel brute forcing, hash cracking, fuzzing, and enumeration with a graphical monitoring dashboard.",
    links: { github: "#", demo: "#", details: "#" }
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0, x: -50 }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-12 min-h-screen"
    >
      <div className="flex items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="SEC_PROJECTS">SEC_PROJECTS</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="cyber-card group flex flex-col h-full bg-black/60 relative overflow-visible"
          >
            {/* Animated card border highlight */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <div className="relative p-6 flex-1 flex flex-col z-10 bg-black/80 rounded-lg h-full border border-cyan-500/20 group-hover:border-transparent transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <TerminalSquare className="w-8 h-8 text-cyan-400 group-hover:text-green-400 transition-colors" />
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <p className="text-xs font-mono text-cyan-500">{project.type}</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">
                {project.desc}
              </p>

              <div className="mb-6">
                <p className="text-xs text-gray-500 font-mono mb-2">// TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-cyan-950/50 border border-cyan-800 text-cyan-300 text-xs rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-800">
                <a href={project.links.github} className="flex-1 flex justify-center items-center gap-2 px-3 py-2 border border-gray-600 rounded text-sm hover:border-white hover:bg-white hover:text-black transition-all">
                  <Code2 className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
