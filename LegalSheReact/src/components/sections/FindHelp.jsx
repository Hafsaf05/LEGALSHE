import React from 'react';
import { motion } from 'framer-motion';

const STATIC_HELPLINES = [
  { name: 'National Commission for Women (NCW)', number: '7827170170', desc: '24/7 dedicated helpline for women.', icon: 'support_agent', color: 'legal-purple' },
  { name: 'Cyber Crime Portal', number: '1930', desc: 'Report cyber fraud & online harassment instantly.', icon: 'security', color: 'legal-red' },
  { name: 'iCALL Psychosocial Helpline', number: '9152987821', desc: 'Free, confidential emotional support (TISS).', icon: 'psychology', color: 'legal-green' },
  { name: 'Vandrevala Foundation', number: '1860-2662-345', desc: '24x7 crisis intervention and mental health support.', icon: 'health_and_safety', color: 'legal-gold' },
  { name: 'TSLSA (Telangana)', number: '15100', desc: 'Free legal aid and counsel for women.', icon: 'gavel', color: 'legal-purpleLight' },
  { name: 'Hyderabad Cybercrime Cell', number: '040-27852418', desc: 'Direct state cybercrime intervention.', icon: 'local_police', color: 'legal-gold' },
];

const colorMap = {
  'legal-purple': { glow: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.15)', text: '#7C3AED' },
  'legal-red': { glow: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.15)', text: '#EF4444' },
  'legal-green': { glow: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.15)', text: '#10B981' },
  'legal-gold': { glow: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.15)', text: '#F59E0B' },
  'legal-purpleLight': { glow: 'rgba(210,187,255,0.12)', border: 'rgba(210,187,255,0.15)', text: '#D2BBFF' },
};

export const FindHelp = () => {
  return (
    <section id="help" className="relative z-10 py-28 overflow-hidden" style={{ background: '#0d0d12' }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-legal-gold/[0.03] blur-[140px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-legal-purple/[0.03] blur-[130px]" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-btn mb-7"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(239,68,68,0.06))',
              border: '1px solid rgba(245,158,11,0.15)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,158,11,0.1)' }}
          >
            <span className="material-icons-round text-legal-gold text-[1rem]">sos</span>
            <span className="text-legal-gold text-[0.7rem] font-bold tracking-[0.2em] uppercase">Verified Resources</span>
          </motion.div>

          <h2 className="font-display text-[2.8rem] sm:text-[3.2rem] font-extrabold leading-[1.1] mb-5">
            <span className="text-white">Find Help </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-legal-gold via-legal-purpleLight to-legal-gold bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                Near You
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-legal-gold/50 to-transparent rounded-full" />
            </span>
          </h2>
          <p className="text-legal-subtle text-[1.05rem] leading-[1.7]">
            Immediate, verified helplines across India. Available <span className="text-legal-green font-medium">24/7</span>.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATIC_HELPLINES.map((help, idx) => {
            const colors = colorMap[help.color] || colorMap['legal-purple'];
            return (
              <motion.div
                key={idx}
                className="relative rounded-[22px] p-[1px] group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                  style={{ background: `linear-gradient(135deg, ${colors.glow}, transparent)` }}
                />
                <div className="relative rounded-[21px] bg-[#0e0e14]/80 backdrop-blur-[16px] border border-white/[0.06] p-7 h-full flex flex-col justify-between group-hover:border-white/[0.12] transition-all duration-500 group-hover:-translate-y-1">

                  <div>
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5 relative"
                      style={{
                        background: colors.glow,
                        border: `1px solid ${colors.border}`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="material-icons-round text-xl" style={{ color: colors.text }}>{help.icon}</span>
                    </motion.div>

                    <h3 className="font-display font-bold text-[1.05rem] text-white mb-2 leading-snug">{help.name}</h3>
                    <p className="text-legal-subtle/60 text-[0.82rem] leading-relaxed mb-5">{help.desc}</p>
                  </div>

                  {/* Call button */}
                  <motion.a
                    href={`tel:${help.number.replace(/[^0-9]/g, '')}`}
                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 w-full py-3 rounded-[50px] font-display font-bold text-[0.82rem] cursor-pointer transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${colors.border}`,
                      color: colors.text,
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: colors.glow,
                      boxShadow: `0 0 25px ${colors.glow}`,
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="material-icons-round text-lg">phone</span>
                    Dial {help.number}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emergency Banner */}
        <motion.div
          className="mt-14 relative rounded-[20px] p-[1px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(239,68,68,0.2), rgba(124,58,237,0.3))',
              backgroundSize: '300% 300%',
              animation: 'borderGlow 6s ease-in-out infinite',
            }}
          />
          <div className="relative rounded-[19px] bg-[#0e0e14]/85 backdrop-blur-[16px] py-6 px-8 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <motion.div
                className="relative"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="material-icons-round text-legal-red text-2xl">emergency</span>
                <div className="absolute -inset-2 rounded-full bg-legal-red/20 blur-md" />
              </motion.div>
              <p className="text-legal-purpleLight font-semibold text-[1rem]">
                For immediate physical danger, always dial{' '}
                <motion.span
                  className="inline-flex items-center justify-center px-3 py-1 rounded-btn text-white text-xl font-bold mx-1"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.1))',
                    border: '1px solid rgba(239,68,68,0.3)',
                  }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(239,68,68,0.3)' }}
                >
                  112
                </motion.span>
                {' '}for Police Emergency.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 200% center; }
          50% { background-position: 0% center; }
        }
        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};
