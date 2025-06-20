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
          <motion.div className="absolute top-1 left-1/4 pl-18" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <Link href="/" className="flex items-center">
              <Image src="/assets/img/devhio-logo.png" alt="logo" width={60} height={55} />
              <h2 className="font-bold text-lg text-black">
                Dev
                <span className="font-extrabold text-lg text-[#50D890]">H.io</span>
              </h2>
            </Link>
          </motion.div>
          <button onClick={() => setOpen(true)} className="absolute top-6 right-6 text-gray-900 cursor-pointer" aria-label="Open menu">
            <FiGrid size={24} />
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
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white cursor-pointer" aria-label="Close menu">
            <FiX size={24} />
          </button>
        )}

        {/* Menu items */}
        {open && (
          <div className="w-full lg:w-1/3 p-12 flex flex-col justify-center space-y-8 text-white">
            {NAV_ITEMS.map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-5xl font-semibold hover:opacity-80 hover:scale-105" onClick={() => setOpen(false)}>
                {item}
              </Link>
            ))}
            <div className="mt-12 flex space-x-10 text-lg">
              <Link href="/contact" onClick={() => setOpen(false)} className="hover:underline">
                Contact us
              </Link>
              <Link href="/help" onClick={() => setOpen(false)} className="hover:underline">
                Help
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Social & language (hanya saat tertutup) */}
      {!open && (
        <div className="absolute bottom-6 right-6 flex flex-col items-center space-y-6 text-gray-800">
          <Link href="https://facebook.com" aria-label="facebook">
            <Image src="/assets/svg/facebook.svg" alt="fb" width={24} height={24} />
          </Link>
          <Link href="mailto:hello@twiscode.com" aria-label="email">
            <Image src="/assets/svg/email.svg" alt="email" width={24} height={24} />
          </Link>
          <Link href="https://instagram.com" aria-label="instagram">
            <Image src="/assets/svg/instagram.svg" alt="ig" width={24} height={24} />
          </Link>
          <Link href="tel:+1234567890" aria-label="telephone">
            <Image src="/assets/svg/phone.svg" alt="tel" width={24} height={24} />
          </Link>
          <select className="bg-transparent text-sm focus:outline-none" defaultValue="EN">
            <option>EN</option>
            <option>ID</option>
          </select>
        </div>
      )}
    </nav>
  );
}
