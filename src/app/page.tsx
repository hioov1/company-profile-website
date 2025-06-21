"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const bgVariants: Variants = {
  hiddenLeft: { x: "-100%" },
  hiddenRight: { x: "100%" },
  show: {
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.9, duration: 0.6, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.4, duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <motion.div initial="hidden" animate="show" className="relative h-screen overflow-hidden">
      {/* Split backgrounds - Mobile: stack vertically, Desktop: side by side */}
      <motion.div
        className="absolute inset-0 md:inset-y-0 md:left-0 md:w-1/3 bg-black 
                   h-1/3 md:h-full w-full"
        variants={bgVariants}
        initial="hiddenLeft"
        animate="show"
      />
      <motion.div
        className="absolute bottom-0 md:inset-y-0 md:right-0 md:w-1/2 bg-white 
                   h-1/2 md:h-full w-full"
        variants={bgVariants}
        initial="hiddenRight"
        animate="show"
      />

      {/* Hero image - Mobile: centered in top section, Desktop: overlapping */}
      <motion.div
        className="absolute top-1/3 left-1/2 md:top-1/2 md:left-1/3 
                   w-64 sm:w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 
                   transform -translate-x-1/2 -translate-y-1/2 z-10"
        variants={imageVariants}
      >
        <Image src="/assets/img/hero.jpg" alt="heroimage" width={800} height={800} className="rounded-lg shadow-2xl object-cover w-full h-auto" />
      </motion.div>

      {/* Content - Mobile: bottom section, Desktop: right side */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 md:inset-y-0 md:right-0 md:left-auto md:w-1/2 
                   flex flex-col justify-center items-center md:items-start text-center md:text-left
                   px-6 py-36 md:px-8 lg:px-16 bg-white md:bg-transparent"
        variants={contentVariants}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" variants={titleVariants}>
          We Code
          <br />
          We Deliver
        </motion.h1>
        <motion.p className="mt-4 md:mt-6 max-w-md text-base md:text-lg text-gray-600" variants={titleVariants} transition={{ delay: 0.7 }}>
          Twiscode specializes in developing high-performing mobile and web applications.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
