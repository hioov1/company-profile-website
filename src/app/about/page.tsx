"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiSmartphone, FiMonitor, FiPenTool } from "react-icons/fi";

const bgVariants: Variants = {
  hiddenLeft: { x: "-100%" },
  hiddenRight: { x: "100%" },
  show: {
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const imageVariants: Variants = {
  hidden: { x: -200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const mobileImageVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mobileItemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <motion.section className="relative md:h-screen md:overflow-hidden" initial="hidden" animate="show">
      {/* Desktop backgrounds - unchanged from original */}
      <motion.div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-black" variants={bgVariants} initial="hiddenLeft" animate="show" />
      <motion.div className="hidden md:block absolute inset-y-0 right-0 w-1/2 bg-white" variants={bgVariants} initial="hiddenRight" animate="show" />

      {/* Mobile backgrounds - separate from desktop */}
      <motion.div className="md:hidden absolute inset-0 h-1/4 w-full bg-black" variants={bgVariants} initial="hiddenLeft" animate="show" />
      <motion.div className="md:hidden absolute bottom-0 h-3/5 w-full bg-white" variants={bgVariants} initial="hiddenRight" animate="show" />

      {/* Desktop Layout - exactly like original */}
      <div className="relative hidden md:flex h-full">
        {/* Desktop Image (slide in from left) */}
        <motion.div className="w-1/2 flex items-center justify-center" variants={imageVariants}>
          <Image src="/assets/img/about.jpg" alt="Laptop coding" width={600} height={500} className="rounded-lg object-cover" />
        </motion.div>

        {/* Desktop Content */}
        <motion.div className="w-1/2 flex flex-col justify-center px-8 lg:px-16" variants={listVariants}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Do?</h2>

          {/* Mobile Application */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center mb-2">
              <FiSmartphone className="text-2xl text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Mobile Application</h3>
            </div>
            <p className="text-gray-600">Building mobile applications is never easy. P2P lending app? Logistic App? E-Commerce? We have done them all, fast and well.</p>
          </motion.div>

          {/* Web Application */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center mb-2">
              <FiMonitor className="text-2xl text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Web Application</h3>
            </div>
            <p className="text-gray-600">We can build any web app you need: blogs, company profiles, e-commerce, or bespoke functionality. Our team adapts to your stack and goals.</p>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-2">
              <FiPenTool className="text-2xl text-gray-900 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">UI/UX Design</h3>
            </div>
            <p className="text-gray-600">All things are designed; few are designed well. We elevate your ideas with great UI/UX, suited to your taste and pain points.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Layout - separate implementation */}
      <div className="relative md:hidden flex flex-col min-h-screen">
        {/* Mobile Image Section */}
        <motion.div className="flex-shrink-0 flex items-center justify-center px-6 py-16 min-h-[40vh]" variants={mobileImageVariants}>
          <Image src="/assets/img/about.jpg" alt="Laptop coding" width={400} height={300} className="rounded-lg object-cover w-full max-w-sm shadow-lg" />
        </motion.div>

        {/* Mobile Content Section */}
        <motion.div className="flex-grow bg-white px-6 py-6 space-y-6 pb-12" variants={listVariants}>
          <motion.h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6" variants={mobileItemVariants}>
            What We Do?
          </motion.h2>

          {/* Mobile Application */}
          <motion.div className="space-y-3" variants={mobileItemVariants}>
            <div className="flex items-center">
              <FiSmartphone className="text-xl sm:text-2xl text-gray-900 mr-3 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Mobile Application</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Building mobile applications is never easy. P2P lending app? Logistic App? E-Commerce? We have done them all, fast and well.</p>
          </motion.div>

          {/* Web Application */}
          <motion.div className="space-y-3" variants={mobileItemVariants}>
            <div className="flex items-center">
              <FiMonitor className="text-xl sm:text-2xl text-gray-900 mr-3 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Web Application</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">We can build any web app you need: blogs, company profiles, e-commerce, or bespoke functionality. Our team adapts to your stack and goals.</p>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div className="space-y-3" variants={mobileItemVariants}>
            <div className="flex items-center">
              <FiPenTool className="text-xl sm:text-2xl text-gray-900 mr-3 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">UI/UX Design</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">All things are designed; few are designed well. We elevate your ideas with great UI/UX, suited to your taste and pain points.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
