"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiGrid, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const NAV_ITEMS = ["Home", "About", "Service", "Contact"];

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-0 z-50">
      {/* Logo & Grid toggle */}
      {!open && (
        <>
          {/* Logo - Desktop positioning unchanged, Mobile responsive */}
          <motion.div className="absolute top-1 left-4 sm:left-8 md:left-1/4 md:pl-18" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo/devhio_logo.png" alt="logo" width={60} height={55} className="w-10 h-9 sm:w-12 sm:h-11 md:w-[60px] md:h-[55px]" />
              <h2 className="font-bold text-base sm:text-lg text-cyan-300 ml-2">
                Dev
                <span className="font-extrabold text-base sm:text-lg text-cyan-300">H.io</span>
              </h2>
            </Link>
          </motion.div>

          {/* Menu button - responsive positioning with color change */}
          <button onClick={() => setOpen(true)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white md:text-gray-900 cursor-pointer" aria-label="Open menu">
            <FiGrid size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Circular-reveal overlay */}
      <div
        style={{
          clipPath: open ? "circle(150% at calc(100% - 1.5rem) 1.5rem)" : "circle(0% at calc(100% - 1.5rem) 1.5rem)",
          transition: "clip-path 0.6s ease-in-out",
        }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-end pointer-events-auto"
      >
        {/* Close button */}
        {open && (
          <button onClick={() => setOpen(false)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white cursor-pointer z-10" aria-label="Close menu">
            <FiX size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Menu items - Mobile: full width with padding, Desktop: 1/3 width */}
        {open && (
          <div className="w-full md:w-1/2 lg:w-1/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center space-y-6 sm:space-y-8 text-white">
            {NAV_ITEMS.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}>
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-3xl sm:text-4xl md:text-5xl font-semibold hover:opacity-80 hover:scale-105 transition-all duration-300 block" onClick={() => setOpen(false)}>
                  {item}
                </Link>
              </motion.div>
            ))}

            {/* Additional links - responsive spacing and sizing */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link href="/credit" onClick={() => setOpen(false)} className="hover:underline transition-all duration-300">
                Credit
              </Link>
            </motion.div>
          </div>
        )}
      </div>

      {/* Social & language (only when closed) - Hidden on small screens, visible on larger screens */}
      {!open && (
        <div className="hidden sm:flex absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex-col items-center space-y-4 sm:space-y-6 text-gray-800">
          <Link href="https://facebook.com" aria-label="facebook" className="hover:scale-110 transition-transform duration-300">
            <Image src="/assets/svg/facebook.svg" alt="fb" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="mailto:hello@twiscode.com" aria-label="email" className="hover:scale-110 transition-transform duration-300">
            <Image src="/assets/svg/email.svg" alt="email" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://instagram.com" aria-label="instagram" className="hover:scale-110 transition-transform duration-300">
            <Image src="/assets/svg/instagram.svg" alt="ig" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="tel:+1234567890" aria-label="telephone" className="hover:scale-110 transition-transform duration-300">
            <Image src="/assets/svg/phone.svg" alt="tel" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <select className="bg-transparent text-xs sm:text-sm focus:outline-none hover:bg-gray-100 hover:text-gray-900 rounded px-1 transition-colors duration-300" defaultValue="EN">
            <option>EN</option>
            <option>ID</option>
          </select>
        </div>
      )}
    </nav>
  );
}
