import React from 'react';
import { motion } from 'framer-motion';

export const Orbs = () => {
  return (
    <>
      <motion.div 
        className="fixed rounded-full pointer-events-none z-0 blur-[120px] w-[420px] h-[420px] bg-legal-purple -top-[120px] -right-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div 
        className="fixed rounded-full pointer-events-none z-0 blur-[120px] w-[360px] h-[360px] bg-legal-gold -bottom-[100px] -left-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      />
    </>
  );
};
