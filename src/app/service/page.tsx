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

export default function ServicePage() {
  const logos = [
    { src: "/assets/logo/mandiri.png", alt: "Mandiri Sekuritas" },
    { src: "/assets/logo/amartha.png", alt: "Amartha" },
    { src: "/assets/logo/paxel.png", alt: "Paxel" },
    { src: "/assets/logo/wahyoo.png", alt: "Wahyoo" },
    { src: "/assets/logo/cisco.png", alt: "Cisco" },
    { src: "/assets/logo/legoas.png", alt: "Legoas" },
    { src: "/assets/logo/lubna.png", alt: "Lubna" },
    { src: "/assets/logo/riliv.png", alt: "Riliv" },
    { src: "/assets/logo/unair.png", alt: "Universitas Airlangga" },
  ];

  return (
    <motion.section className="relative md:h-screen md:overflow-hidden" initial="hidden" animate="show">
      {/* Desktop backgrounds - same as About */}
      <motion.div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-black" variants={bgVariants} initial="hiddenLeft" animate="show" />
      <motion.div className="hidden md:block absolute inset-y-0 right-0 w-1/2 bg-white" variants={bgVariants} initial="hiddenRight" animate="show" />

      {/* Mobile backgrounds - same as About */}
      <motion.div className="md:hidden absolute inset-0 h-1/6 w-full bg-black" variants={bgVariants} initial="hiddenLeft" animate="show" />
      <motion.div className="md:hidden absolute bottom-0 h-3/5 w-full bg-white" variants={bgVariants} initial="hiddenRight" animate="show" />

      {/* Desktop Layout */}
      <div className="relative hidden md:flex h-full">
        {/* Desktop Image (slide in from left) */}
        <motion.div className="w-1/2 flex items-center justify-center" variants={imageVariants}>
          <Image src="/assets/img/service.jpg" alt="Happy customers" width={600} height={500} className="rounded-lg object-cover shadow-2xl" />
        </motion.div>

        {/* Desktop Content */}
        <motion.div className="w-1/2 flex flex-col justify-center px-8 lg:px-16" variants={listVariants}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Customers are our biggest fans</h2>

          {/* Logo Grid - Desktop */}
          <div className="grid grid-cols-3 gap-6">
            {logos.map(({ src, alt }) => (
              <motion.div key={alt} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" variants={itemVariants}>
                <Image src={src} alt={alt} width={100} height={50} className="filter grayscale opacity-60 hover:opacity-80 transition-opacity max-w-full max-h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="relative md:hidden flex flex-col min-h-screen">
        {/* Mobile Image Section */}
        <motion.div className="flex-shrink-0 flex items-center justify-center px-6 py-16 min-h-[40vh]" variants={mobileImageVariants}>
          <Image src="/assets/img/service.jpg" alt="Happy customers" width={400} height={300} className="rounded-lg object-cover w-full max-w-sm shadow-lg" />
        </motion.div>

        {/* Mobile Content Section */}
        <motion.div className="flex-grow bg-white px-6 py-6 space-y-6 pb-12" variants={listVariants}>
          <motion.h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6" variants={mobileItemVariants}>
            Our Customers are our biggest fans
          </motion.h2>

          {/* Logo Grid - Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto">
            {logos.map(({ src, alt }) => (
              <motion.div key={alt} className="flex items-center justify-center p-3 bg-gray-50 rounded-lg aspect-square" variants={mobileItemVariants}>
                <Image src={src} alt={alt} width={70} height={35} className="filter grayscale opacity-60 max-w-full max-h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
