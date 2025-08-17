import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setDone(true), 5000);
          if (onFinish) onFinish();
          return 100;
        }
        return p + 1;
      });
    }, 50); // speed of count
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FBEFE6]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Big brand text */}
          <img src="/images/nav-logo.svg" className="scale-250 pb-10" alt="" />

          {/* Counter */}
          <div className="mt-4 text-2xl font-semibold text-[#5A2E0C]">
            {progress}%
          </div>

          {/* Thin progress bar */}
          <motion.div
            className="relative mt-8 h-[2px] w-64 bg-[#FFD6B3] overflow-hidden"
          >
            <motion.div
              className="h-full bg-[#E85D2A]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
