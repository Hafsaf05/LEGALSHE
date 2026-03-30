import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticle = ({ delay, duration, x, y, size, color = 'rgba(124,58,237,0.3)' }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size, height: size, left: x, top: y,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    }}
    animate={{ y: [0, -25, 0], opacity: [0, 0.6, 0], scale: [0.8, 1.2, 0.8] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const featureCards = [
  {
    icon: 'mic',
    color: 'legal-purple',
    title: 'Speak Naturally',
    desc: 'No legal jargon required. Tell us what happened in your own words, and we\'ll translate it into the right legal format.',
    gradient: 'from-[#7C3AED] to-[#5B21B6]',
    glowColor: 'rgba(124,58,237,0.15)',
  },
  {
    icon: 'gavel',
    color: 'legal-gold',
    title: 'BNS 2023 Ready',
    desc: 'Our AI is trained on the latest Bharatiya Nyaya Sanhita (BNS 2023), ensuring your complaints map perfectly to the active laws.',
    gradient: 'from-[#F59E0B] to-[#D97706]',
    glowColor: 'rgba(245,158,11,0.15)',
  },
  {
    icon: 'shield',
    color: 'legal-green',
    title: 'Zero Verification',
    desc: 'No sign-ups, no tracking, and total privacy. Your sensitive information is wiped from memory within 10 minutes of inactivity.',
    gradient: 'from-[#10B981] to-[#059669]',
    glowColor: 'rgba(16,185,129,0.15)',
    badge: 'STRICT',
  },
];

const badges = [
  { text: '🔒 Zero Data Stored', delay: 0.3 },
  { text: '🌐 Telugu · Hindi · English', delay: 0.4 },
  { text: '⚖️ BNS 2023 Compliant', delay: 0.5 },
  { text: '💜 Free Forever', delay: 0.6 },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative z-10 pt-44 pb-16 text-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-legal-purple/[0.06] blur-[180px]" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-legal-gold/[0.04] blur-[120px]" />
      </div>

      {/* Floating particles */}
      <FloatingParticle delay={0} duration={6} x="8%" y="15%" size="8px" />
      <FloatingParticle delay={2} duration={5} x="88%" y="20%" size="6px" color="rgba(245,158,11,0.3)" />
      <FloatingParticle delay={1} duration={7} x="75%" y="60%" size="10px" />
      <FloatingParticle delay={3} duration={5.5} x="15%" y="70%" size="5px" color="rgba(16,185,129,0.3)" />

      <div className="relative max-w-[800px] mx-auto px-8">

        {/* Pill badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-btn mb-7"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(245,158,11,0.06) 100%)',
            border: '1px solid rgba(124,58,237,0.15)',
          }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.15)' }}
        >
          <span className="text-[0.85rem]">🇮🇳</span>
          <span className="text-legal-purpleLight text-[0.75rem] font-bold tracking-[0.15em] uppercase">Built for Women in India</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display text-[3.5rem] sm:text-[4.2rem] font-extrabold leading-[1.08] tracking-tight mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white">Know Your Rights.</span><br />
          <span className="relative inline-block mt-1">
            <span className="bg-gradient-to-r from-legal-purpleLight via-legal-gold to-legal-purpleLight bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
              In Your Language.
            </span>
            <span className="absolute -bottom-2 left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-transparent via-legal-gold/60 to-transparent rounded-full" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-legal-subtle text-[1.15rem] leading-[1.7] max-w-[560px] mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          AI-powered legal companion for every woman in India. Speak in <span className="text-legal-purpleLight font-medium">Telugu</span>, <span className="text-legal-gold font-medium">Hindi</span> or <span className="text-white font-medium">English</span>. Get justice without the intimidation.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center gap-4 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <motion.a
            href="#analyzer"
            className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-[50px] font-display font-bold text-[0.95rem] text-white overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-legal-purple via-[#9333EA] to-legal-gold" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
                animation: 'shine 3s ease-in-out infinite',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Get Help Now <span className="material-icons-round text-[1.1rem]">arrow_forward</span>
            </span>
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <div className="flex justify-center gap-3 flex-wrap mb-14">
          {badges.map(badge => (
            <motion.span
              key={badge.text}
              className="px-4 py-2.5 rounded-btn text-[0.78rem] font-medium border transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.07)',
                color: '#94A3B8',
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: badge.delay }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.05)' }}
            >
              {badge.text}
            </motion.span>
          ))}
        </div>

        {/* Animated Scale of Justice */}
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
          className="text-[3.5rem] mb-8 mx-auto inline-block relative"
        >
          <span>⚖️</span>
          <motion.div
            className="absolute -inset-4 rounded-full bg-legal-gold/10 blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Advocate banner */}
      <motion.div
        className="relative max-w-[800px] mx-auto px-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative rounded-[20px] p-[1px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.4), rgba(16,185,129,0.1), rgba(16,185,129,0.3))',
              backgroundSize: '300% 300%',
              animation: 'borderGlow 6s ease-in-out infinite',
            }}
          />
          <div className="relative rounded-[19px] bg-[#0e0e14]/80 backdrop-blur-[16px] p-5 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <motion.div
                className="relative"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="material-icons-round text-legal-green text-xl">favorite</span>
                <div className="absolute -inset-1 rounded-full bg-legal-green/20 blur-sm" />
              </motion.div>
              <p className="font-display font-bold text-[1.1rem] text-legal-green">
                You are not alone. LegalShe is your 24/7 advocate.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feature Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {featureCards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="relative rounded-[22px] p-[1px] group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
          >
            {/* Card border glow on hover */}
            <div
              className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"
              style={{ background: `linear-gradient(135deg, ${card.glowColor}, transparent)` }}
            />
            <div className="relative rounded-[21px] bg-[#0e0e14]/80 backdrop-blur-[16px] border border-white/[0.06] p-8 h-full group-hover:border-white/[0.12] transition-all duration-500 group-hover:-translate-y-2">
              {/* Badge */}
              {card.badge && (
                <div className="absolute top-0 right-0 px-3 py-1.5 bg-legal-green/10 text-legal-green text-[0.65rem] font-bold tracking-[0.1em] rounded-bl-[16px] rounded-tr-[21px] border-b border-l border-legal-green/15">
                  {card.badge}
                </div>
              )}

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-[14px] flex items-center justify-center mb-6 relative`}
                style={{
                  background: `linear-gradient(135deg, ${card.glowColor}, transparent)`,
                  border: `1px solid ${card.glowColor}`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className={`material-icons-round text-${card.color} text-2xl`}>{card.icon}</span>
                <motion.div
                  className={`absolute -inset-2 rounded-[18px] bg-${card.color}/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>

              <h3 className="font-display font-bold text-xl mb-3 text-white group-hover:text-white transition-colors">{card.title}</h3>
              <p className="text-legal-subtle text-[0.85rem] leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 200% center; }
          50% { background-position: 0% center; }
        }
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};
