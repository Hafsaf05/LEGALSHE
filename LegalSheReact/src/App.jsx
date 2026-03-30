import React from 'react';
import { SafeModeProvider, useSafeMode } from './context/SafeModeContext';
import { Orbs } from './components/Orbs';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Analyzer } from './components/sections/Analyzer';
import { Shield } from './components/sections/Shield';
import { QuickChecker } from './components/sections/QuickChecker';
import { ComplaintGenerator } from './components/sections/ComplaintGenerator';
import { FindHelp } from './components/sections/FindHelp';

const MainApp = () => {
  const { isSafeMode } = useSafeMode();
  
  return (
    <div className={`relative min-h-screen ${isSafeMode ? 'blur-safe-overlay' : 'transition-all duration-300'}`}>
      <Orbs />
      <Navbar />
      <Hero />
      <Analyzer />
      <QuickChecker />
      <Shield />
      <ComplaintGenerator />
      <FindHelp />
      
      <footer className="relative z-10 border-t border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-[12px]">
         <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-legal-purple/30 to-transparent" />
         <div className="max-w-[1100px] mx-auto px-8 py-14 text-center">
           <a href="#hero" className="font-display font-extrabold text-[1.2rem] text-legal-text inline-block mb-4">
             Legal<span className="text-legal-gold">She</span>
           </a>
           <p className="text-legal-subtle/60 text-[0.85rem] mb-2">© {new Date().getFullYear()} LegalShe — Built with 💜 for Women in India.</p>
           <p className="text-legal-subtle/35 text-[0.72rem]">Not a replacement for a practicing lawyer or emergency services. All processing runs in-memory.</p>
         </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <SafeModeProvider>
      <MainApp />
    </SafeModeProvider>
  );
}
