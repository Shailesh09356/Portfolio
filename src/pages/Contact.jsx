import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Network, Code2, Send, Lock, Unlock, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, ENCRYPTING, SENT
  const [glitchText, setGlitchText] = useState('Send Secure Message');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(status !== 'IDLE') return;

    setStatus('ENCRYPTING');
    
    // Encrypting animation logic
    let count = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const interval = setInterval(() => {
      let randomStr = '';
      for(let i=0; i<18; i++) randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
      setGlitchText(randomStr);
      count++;
      
      if(count > 20) {
        clearInterval(interval);
        setStatus('SENT');
        setGlitchText('TRANSMISSION SUCCESS');
        setTimeout(() => {
          setStatus('IDLE');
          setGlitchText('Send Secure Message');
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      }
    }, 100);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 min-h-[80vh]">
      <div className="flex items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase glitch" data-text="SECURE_COMM">SECURE_COMM</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
           <motion.div 
             initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
             className="cyber-card p-6 border-l-2 border-green-500"
           >
             <h3 className="font-mono text-gray-400 mb-6 border-b border-gray-800 pb-2">{'// TARGET_COORDINATES'}</h3>
             
             <div className="space-y-6">
               <a href="tel:+919356163208" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group">
                 <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-green-500/50"><Phone className="w-5 h-5" /></div>
                 <div>
                   <p className="text-xs text-gray-500 font-mono">PHONE</p>
                   <p className="font-mono tracking-wider">+91 9356163208</p>
                 </div>
               </a>
               
               <a href="mailto:Shaileshthakare803@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group">
                 <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-green-500/50"><Mail className="w-5 h-5" /></div>
                 <div>
                   <p className="text-xs text-gray-500 font-mono">EMAIL</p>
                   <p className="font-mono tracking-wider text-sm md:text-base break-all">Shaileshthakare803@gmail.com</p>
                 </div>
               </a>

               <a href="https://linkedin.com/in/shailesh093" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                 <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-cyan-500/50"><Network className="w-5 h-5" /></div>
                 <div>
                   <p className="text-xs text-gray-500 font-mono">LINKEDIN</p>
                   <p className="font-mono tracking-wider">shailesh093</p>
                 </div>
               </a>

               <a href="https://github.com/Shailesh-093" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                 <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-white/50"><Code2 className="w-5 h-5" /></div>
                 <div>
                   <p className="text-xs text-gray-500 font-mono">GITHUB</p>
                   <p className="font-mono tracking-wider">Shailesh-093</p>
                 </div>
               </a>
             </div>
           </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <form onSubmit={handleSubmit} className="cyber-card p-6 md:p-8 space-y-6 border-t-4 border-green-500 relative">
            
            <AnimatePresence>
              {status === 'SENT' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-green-900/20 backdrop-blur-sm border border-green-500 rounded-lg flex flex-col items-center justify-center text-green-400 font-mono"
                >
                  <CheckCircle2 className="w-16 h-16 mb-4" />
                  <p className="text-xl tracking-widest font-bold">MESSAGE SECURED</p>
                  <p className="text-sm mt-2 text-green-500/70">Transmission completed securely.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-xs font-mono text-green-500 mb-2">IDENTIFICATION</label>
              <input 
                type="text" required
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                className="cyber-input" placeholder="Enter Name"
                disabled={status !== 'IDLE'}
              />
            </div>
            
            <div>
              <label className="block text-xs font-mono text-green-500 mb-2">RETURN_ADDRESS</label>
              <input 
                type="email" required
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                className="cyber-input" placeholder="Enter Email"
                disabled={status !== 'IDLE'}
              />
            </div>
            
            <div>
              <label className="block text-xs font-mono text-green-500 mb-2">PAYLOAD</label>
              <textarea 
                rows="4" required
                value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                className="cyber-input resize-none" placeholder="Enter Message..."
                disabled={status !== 'IDLE'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status !== 'IDLE'}
              className={`w-full py-4 text-center font-bold tracking-widest font-mono transition-all flex justify-center items-center gap-3 border
                ${status === 'IDLE' 
                  ? 'border-green-500 text-green-400 hover:bg-green-500 hover:text-black shadow-[0_0_10px_rgba(0,255,65,0.2)]' 
                  : status === 'ENCRYPTING' 
                    ? 'border-yellow-500 text-yellow-400 bg-yellow-500/10'
                    : 'border-green-500 text-black bg-green-500'
                }`}
            >
              {status === 'IDLE' ? <Unlock className="w-5 h-5" /> : status === 'ENCRYPTING' ? <Lock className="w-5 h-5 animate-pulse" /> : <Send className="w-5 h-5" />}
              {glitchText}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
