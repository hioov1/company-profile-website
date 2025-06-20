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
      {/* split backgrounds */}
      <motion.div className="absolute inset-y-0 left-0 w-1/3 bg-black" variants={bgVariants} initial="hiddenLeft" animate="show" />
      <motion.div className="absolute inset-y-0 right-0 w-1/2 bg-white" variants={bgVariants} initial="hiddenRight" animate="show" />

      {/* hero image */}
      <motion.div className="absolute top-1/2 left-1/3 w-[28rem] md:w-[32rem] lg:w-[36rem] transform -translate-x-1/2 -translate-y-1/2 z-10" variants={imageVariants}>
        <Image src="/assets/img/hero.jpg" alt="heroimage" width={800} height={800} className="rounded-lg shadow-2xl object-cover" />
      </motion.div>

      {/* right content */}
      <motion.div className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-center px-8 lg:px-16" variants={contentVariants}>
        <motion.h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" variants={titleVariants}>
          We Code
          <br />
          We Deliver
        </motion.h1>
        <motion.p className="mt-6 max-w-md text-lg text-gray-600" variants={titleVariants} transition={{ delay: 0.7 }}>
          Twiscode specializes in developing high-performing mobile and web applications.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
