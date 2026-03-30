import React, { createContext, useContext, useState, useEffect } from 'react';

const SafeModeContext = createContext();

export const useSafeMode = () => useContext(SafeModeContext);

export const SafeModeProvider = ({ children }) => {
  const [isSafeMode, setIsSafeMode] = useState(false);

  useEffect(() => {
    let timer;
    let originalConsoleLog = console.log;
    let originalConsoleInfo = console.info;
    let originalConsoleWarn = console.warn;
    let originalConsoleError = console.error;

    if (isSafeMode) {
      // 1. Auto clear after 10 minutes (600,000 ms)
      timer = setTimeout(() => {
        setIsSafeMode(false);
        // Custom event to tell all forms to clear themselves
        window.dispatchEvent(new Event('clear-legal-forms'));
      }, 600000);
      
      // 2. Disable text selection globally
      document.body.style.userSelect = 'none';

      // 3. Disable console logs for privacy
      console.log = () => {};
      console.info = () => {};
      console.warn = () => {};
      console.error = () => {};

      // 4. Add global class for any CSS-based blurring
      document.body.classList.add('safe-mode-active');
    } else {
      document.body.style.userSelect = 'auto';
      document.body.classList.remove('safe-mode-active');
      window.dispatchEvent(new Event('safe-mode-off'));
    }

    return () => {
      clearTimeout(timer);
      document.body.style.userSelect = 'auto';
      document.body.classList.remove('safe-mode-active');
      
      // Restore console on unmount or safe mode off
      console.log = originalConsoleLog;
      console.info = originalConsoleInfo;
      console.warn = originalConsoleWarn;
      console.error = originalConsoleError;
    };
  }, [isSafeMode]);

  const toggleSafeMode = () => setIsSafeMode(prev => !prev);

  // Expose an active blur utility class to standardize how components blur
  const safeBlurClass = isSafeMode ? 'blur-md opacity-20 transition-all duration-300 pointer-events-none select-none' : 'transition-all duration-300';

  return (
    <SafeModeContext.Provider value={{ isSafeMode, toggleSafeMode, safeBlurClass }}>
      {children}
    </SafeModeContext.Provider>
  );
};
