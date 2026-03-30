import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { callClaudeAPI } from '../../utils/ai';
import { useSafeMode } from '../../context/SafeModeContext';

export const QuickChecker = () => {
  const { safeBlurClass } = useSafeMode();
  const [query, setQuery] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    if (!query.trim()) return;
    setIsChecking(true);
    setResult(null);

    const aggressivePrompt = `IGNORE PREVIOUS FORMAT RULES. 
    Analyze this situation under Indian Law (BNS 2023 / IT Act).
    Respond ONLY with one of these Exact phrases followed by a single short sentence explaining why:
    "✅ Legal - [reason]"
    "⚠️ Gray Area - [reason]"
    "❌ Violation - [reason, name the BNS section]"
    
    Situation: ${query}`;

    try {
      const response = await callClaudeAPI(aggressivePrompt, null);
      setResult(response.trim());
    } catch (error) {
      setResult("⚠️ Error checking law status. Please try Analyzer.");
    }
    setIsChecking(false);
  };

  const getResultStyle = () => {
    if (!result) return {};
    if (result.includes('❌')) return { color: '#EF4444', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)', icon: 'dangerous' };
    if (result.includes('✅')) return { color: '#10B981', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.15)', icon: 'check_circle' };
    return { color: '#F59E0B', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.15)', icon: 'warning' };
  };

  return (
    <section className="relative z-10 py-20 overflow-hidden">
      {/* Subtle divider glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-legal-purple/[0.03] blur-[130px]" />
      </div>

      <div className="relative max-w-[720px] mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-btn mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(245,158,11,0.04))',
              border: '1px solid rgba(124,58,237,0.1)',
            }}
          >
            <span className="material-icons-round text-legal-purple text-sm">bolt</span>
            <span className="text-legal-purpleLight text-[0.65rem] font-bold tracking-[0.15em] uppercase">Instant Check</span>
          </motion.div>

          <h2 className="font-display font-extrabold text-[2.2rem] sm:text-[2.5rem] mb-2">
            <span className="text-white">"Is This </span>
            <span className="bg-gradient-to-r from-legal-purpleLight to-legal-gold bg-clip-text text-transparent">Legal?</span>
            <span className="text-white">"</span>
          </h2>
          <p className="text-legal-subtle/60 text-sm mb-8">Quick gut-check. Type a short scenario for an instant BNS 2023 classification.</p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          className={`relative ${safeBlurClass}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative rounded-[50px] p-[1px] group">
            <div
              className="absolute inset-0 rounded-[50px] opacity-20 group-focus-within:opacity-60 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(245,158,11,0.3))',
                backgroundSize: '300% 300%',
                animation: 'borderGlow 6s ease-in-out infinite',
              }}
            />
            <div className="relative rounded-[49px] bg-[#0e0e14]/90 backdrop-blur-[20px] flex items-center p-2 pl-6">
              <input
                type="text"
                className="flex-1 bg-transparent text-white outline-none placeholder-white/15 text-[0.92rem] py-2"
                placeholder="E.g., My boss is messaging me late at night..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                disabled={isChecking}
              />
              <motion.button
                onClick={handleCheck}
                disabled={isChecking || !query}
                className="relative px-7 py-2.5 rounded-[50px] font-display font-bold text-[0.82rem] disabled:opacity-40 cursor-pointer overflow-hidden"
                whileHover={!isChecking && query ? { scale: 1.04 } : {}}
                whileTap={!isChecking && query ? { scale: 0.96 } : {}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-legal-purple to-[#5B21B6] rounded-[50px]" />
                <span className="relative z-10 text-white flex items-center gap-1.5">
                  {isChecking ? (
                    <>
                      <motion.div
                        className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Checking
                    </>
                  ) : (
                    <>
                      <span className="material-icons-round text-[1rem]">search</span>
                      Check
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </div>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                className="mt-6 rounded-[18px] p-5 text-left"
                style={{
                  background: getResultStyle().bg,
                  border: `1px solid ${getResultStyle().border}`,
                }}
                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start gap-3">
                  <motion.span
                    className="material-icons-round text-xl mt-0.5"
                    style={{ color: getResultStyle().color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                  >
                    {getResultStyle().icon}
                  </motion.span>
                  <p className="font-semibold text-[1rem] leading-relaxed" style={{ color: getResultStyle().color }}>
                    {result}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};
