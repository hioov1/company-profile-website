"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const bgVariants: Variants = {
  hiddenLeft: { x: "-100%" },
  hiddenRight: { x: "100%" },
  show: {
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { delay: 1.0, duration: 0.6, ease: "easeOut" } },
};

const mobileTextVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } },
};

const mobileListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const heartVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { delay: 2, duration: 1, ease: "easeOut" } },
};

const mobileHeartVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { delay: 1.5, duration: 1, ease: "easeOut" } },
};

export default function CreditPage() {
  return (
    <motion.section className="relative md:h-screen md:overflow-hidden" initial="hidden" animate="show">
      {/* Desktop backgrounds */}
      <motion.div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-white" variants={bgVariants} initial="hiddenLeft" animate="show" />

      {/* Mobile backgrounds */}
      <motion.div className="md:hidden absolute inset-0 w-full bg-gradient-to-b from-black via-gray-700 to-white" variants={bgVariants} initial="hiddenLeft" animate="show" />

      {/* Desktop Layout */}
      <div className="relative hidden md:flex h-full z-10">
        {/* Desktop Left: credit text */}
        <motion.div className="w-1/2 flex flex-col justify-center px-8 lg:px-16 text-white" variants={textVariants}>
          <h2 className="text-4xl font-extrabold mb-2">Credits</h2>
          <p className="text-lg font-light mb-8 opacity-80">A huge thank you to all the amazing assets and inspiration:</p>

          <motion.ul className="space-y-6" initial="hidden" animate="show" variants={listVariants}>
            <motion.li variants={itemVariants} className="text-lg flex items-center space-x-2">
              <span className="font-semibold">UI/UX Design:</span>
              <Link href="https://www.figma.com/@aprirandi" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 transition-colors duration-200 underline">
                Aprirandi on Figma
              </Link>
            </motion.li>

            <motion.li variants={itemVariants} className="text-lg flex items-center space-x-2">
              <span className="font-semibold">Icons Template:</span>
              <Link href="https://www.figma.com/community/file/1106439545579609121" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 transition-colors duration-200 underline">
                Landing Page Company Profile 2022
              </Link>
            </motion.li>

            <motion.li variants={itemVariants} className="text-lg flex flex-col space-y-2">
              <span className="font-semibold">Images:</span>
              <div className="pl-4 space-y-1">
                <Link href="https://unsplash.com/photos/turned-on-grey-laptop-computer-FBNxmwEVpAc" target="_blank" rel="noopener noreferrer" className="block text-indigo-400 hover:text-indigo-200 transition-colors duration-200 underline">
                  Home Page Image - Arnold Francisca
                </Link>
                <Link
                  href="https://unsplash.com/photos/person-in-blue-long-sleeve-shirt-using-black-laptop-computer-EA4RFyQfptk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-indigo-400 hover:text-indigo-200 transition-colors duration-200 underline"
                >
                  About Page Image - Peter Scherbatykh
                </Link>
                <Link
                  href="https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-with-laptops-UThaHAc8wh0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-indigo-400 hover:text-indigo-200 transition-colors duration-200 underline"
                >
                  Service Page Image - SOCIAL . CUT
                </Link>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="text-lg flex flex-col space-y-2">
              <span className="font-semibold">Made by:</span>
              <div className="pl-4 space-y-1">
                <Link href="https://github.com/hioov1" target="_blank" rel="noopener noreferrer" className="block text-indigo-400 hover:text-indigo-200 transition-colors duration-200 underline">
                  hioov1
                </Link>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Desktop Right side - decorative content */}
        <div className="w-1/2 flex items-center justify-center">
          <motion.div className="text-white/20 text-8xl font-thin" variants={heartVariants}>
            ❤️
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative md:hidden flex flex-col min-h-screen">
        {/* Mobile Header Section */}
        <motion.div className="flex-shrink-0 px-6 py-12 text-white min-h-[20vh] flex flex-col justify-center text-center" variants={mobileTextVariants}>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Credits</h2>
          <p className="text-sm font-light opacity-80">A huge thank you to all the amazing assets and inspiration:</p>
        </motion.div>

        {/* Mobile Content Section */}
        <motion.div className="flex-grow px-6 py-8 pb-12" variants={mobileListVariants}>
          <motion.ul className="space-y-6 max-w-md mx-auto" initial="hidden" animate="show" variants={mobileListVariants}>
            <motion.li variants={itemVariants} className="text-sm space-y-1">
              <span className="font-semibold text-white">UI/UX Design:</span>
              <div className="pl-2">
                <Link href="https://www.figma.com/@aprirandi" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-200 underline">
                  Aprirandi on Figma
                </Link>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="text-sm space-y-1">
              <span className="font-semibold text-white">Icons Template:</span>
              <div className="pl-2">
                <Link href="https://www.figma.com/community/file/1106439545579609121" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-200 underline">
                  Landing Page Company Profile 2022
                </Link>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="text-sm space-y-2">
              <span className="font-semibold text-white">Images:</span>
              <div className="pl-2 space-y-2">
                <Link href="https://unsplash.com/photos/turned-on-grey-laptop-computer-FBNxmwEVpAc" target="_blank" rel="noopener noreferrer" className="block text-blue-300 hover:text-blue-100 transition-colors duration-200 underline">
                  Home Page Image - Arnold Francisca
                </Link>
                <Link
                  href="https://unsplash.com/photos/person-in-blue-long-sleeve-shirt-using-black-laptop-computer-EA4RFyQfptk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-100 transition-colors duration-200 underline"
                >
                  About Page Image - Peter Scherbatykh
                </Link>
                <Link
                  href="https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-with-laptops-UThaHAc8wh0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-100 transition-colors duration-200 underline"
                >
                  Service Page Image - SOCIAL . CUT
                </Link>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="text-sm space-y-1">
              <span className="font-semibold text-white">Made by:</span>
              <div className="pl-2">
                <Link href="https://github.com/hioov1" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors duration-200 underline">
                  hioov1
                </Link>
              </div>
            </motion.li>
          </motion.ul>

          {/* Mobile Heart */}
          <motion.div className="flex justify-center mt-12" variants={mobileHeartVariants}>
            <div className="text-white/30 text-6xl">❤️</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
