import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSafeMode } from '../../context/SafeModeContext';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#analyzer', label: 'Get Help' },
  { href: '#shield', label: 'Harassment Shield' },
  { href: '#complaint', label: 'Complaint Generator' },
];

export const Navbar = () => {
  const { isSafeMode, toggleSafeMode } = useSafeMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#0A0A0F]/90 backdrop-blur-[20px] border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent backdrop-blur-[8px] border-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1320px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="font-display font-extrabold text-[1.35rem] text-legal-text flex relative"
            whileHover={{ scale: 1.04 }}
          >
            Legal<span className="text-legal-gold">She</span>
            <motion.div
              className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-legal-purple to-legal-gold rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-1">
            {NAV_LINKS.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-btn text-[0.82rem] font-medium text-legal-subtle hover:text-legal-text transition-all relative group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-legal-purple to-legal-gold rounded-full group-hover:w-[60%] transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Safe Mode Button */}
            <motion.button
              onClick={toggleSafeMode}
              className={`hidden md:flex items-center gap-2.5 px-4 py-2 rounded-btn cursor-pointer transition-all duration-300 border ${
                isSafeMode
                  ? 'border-legal-green/30'
                  : 'border-transparent hover:border-white/10'
              }`}
              style={{
                background: isSafeMode
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.05))'
                  : 'rgba(255,255,255,0.03)',
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative">
                <span className={`block w-2 h-2 rounded-full ${isSafeMode ? 'bg-legal-green' : 'bg-legal-subtle'}`} />
                {isSafeMode && (
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-legal-green/40 blur-sm"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </div>
              <span className={`text-[0.72rem] font-bold tracking-wide ${isSafeMode ? 'text-legal-green' : 'text-legal-subtle'}`}>
                {isSafeMode ? 'Safe Mode ON' : 'Safe Mode'}
              </span>
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden p-2 flex flex-col gap-1.5 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block w-6 h-0.5 bg-legal-text rounded origin-center"
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-legal-text rounded"
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-legal-text rounded origin-center"
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 p-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-icons-round text-white text-2xl">close</span>
            </motion.button>

            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl font-bold text-legal-text hover:text-legal-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => { toggleSafeMode(); setIsMobileMenuOpen(false); }}
              className={`font-display text-2xl font-bold transition-colors ${isSafeMode ? 'text-legal-green' : 'text-legal-subtle'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              {isSafeMode ? 'Safe Mode ON ✓' : 'Turn Safe Mode ON'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
