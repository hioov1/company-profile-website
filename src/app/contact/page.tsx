"use client";

import { motion, Variants } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { useState } from "react";

const bgVariants: Variants = {
  hiddenLeft: { x: "-100%" },
  hiddenRight: { x: "100%" },
  show: {
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const detailsVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
  },
};

const mobileDetailsVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const bgRight: Variants = {
  hidden: { x: "100%" },
  show: { x: "0%", transition: { duration: 0.8, ease: "easeInOut" } },
};

const formContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.2,
    },
  },
};

const mobileFormContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactPage() {
  const [method, setMethod] = useState<"email" | "phone">("email");

  return (
    <motion.section className="relative md:h-screen md:overflow-hidden" initial="hidden" animate="show">
      {/* Desktop backgrounds */}
      <motion.div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-gray-400 to-white" variants={bgVariants} initial="hiddenLeft" animate="show" />

      {/* Mobile backgrounds */}
      <motion.div className="md:hidden absolute inset-0 w-full bg-gradient-to-b from-black via-gray-400 to-white" variants={bgVariants} initial="hiddenLeft" animate="show" />

      {/* Desktop Layout */}
      <div className="relative hidden md:flex h-full">
        {/* Desktop Left: contact details */}
        <motion.div className="w-1/2 flex flex-col justify-center px-8 lg:px-16 text-white space-y-6" variants={detailsVariants}>
          <h2 className="text-4xl font-bold">Contact us</h2>
          <div className="flex items-start space-x-3">
            <FiMapPin className="mt-1" />
            <p>
              Kayoon St No.24, Scomptec, Building, Surabaya City,
              <br />
              East Java 60271
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FiMail />
            <a href="mailto:andree@twiscode.com">andree@twiscode.com</a>
          </div>
          <div className="flex items-center space-x-3">
            <FiPhone />
            <a href="tel:+623199251551">+62 31 9925 1551</a>
          </div>
        </motion.div>

        {/* Desktop Right: form */}
        <motion.div className="absolute inset-y-0 right-0 w-4/6 flex items-center justify-center" variants={bgRight}>
          <motion.form className="bg-gradient-to-b from-gray-900 to-gray-800 bg-opacity-80 p-10 rounded-xl w-5/6 max-w-2xl space-y-6" variants={formContainer}>
            <motion.h3 className="text-xl font-semibold text-white" variants={fieldVariants}>
              Send us a Message
            </motion.h3>

            <motion.input type="text" placeholder="Name" className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2" variants={fieldVariants} />

            <motion.input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2" variants={fieldVariants} />

            <motion.input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2" variants={fieldVariants} />

            <motion.div className="space-y-2" variants={fieldVariants}>
              <p className="text-white">Preferred method of communication</p>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="method" value="email" checked={method === "email"} onChange={() => setMethod("email")} />
                  <span className="text-white">Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="method" value="phone" checked={method === "phone"} onChange={() => setMethod("phone")} />
                  <span className="text-white">Phone</span>
                </label>
              </div>
            </motion.div>

            <motion.textarea placeholder="Message" rows={4} className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2 resize-none" variants={fieldVariants} />

            <motion.button type="submit" className="mt-4 w-full bg-white text-gray-900 font-medium py-3 rounded-lg" variants={fieldVariants}>
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="relative md:hidden flex flex-col min-h-screen">
        {/* Mobile Contact Details Section */}
        <motion.div className="flex-shrink-0 px-6 py-12 text-white space-y-4 min-h-[35vh] flex flex-col justify-center" variants={mobileDetailsVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact us</h2>

          <div className="space-y-4 max-w-sm mx-auto">
            <div className="flex items-start space-x-3">
              <FiMapPin className="mt-1 flex-shrink-0" />
              <p className="text-sm">Kayoon St No.24, Scomptec, Building, Surabaya City, East Java 60271</p>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="flex-shrink-0" />
              <a href="mailto:andree@twiscode.com" className="text-sm">
                andree@twiscode.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FiPhone className="flex-shrink-0" />
              <a href="tel:+623199251551" className="text-sm">
                +62 31 9925 1551
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mobile Form Section */}
        <motion.div className="flex-grow px-6 py-8 pb-12" variants={bgRight}>
          <motion.form className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl space-y-4 max-w-md mx-auto" variants={mobileFormContainer}>
            <motion.h3 className="text-lg font-semibold text-white text-center" variants={fieldVariants}>
              Send us a Message
            </motion.h3>

            <motion.input type="text" placeholder="Name" className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2 text-sm" variants={fieldVariants} />

            <motion.input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2 text-sm" variants={fieldVariants} />

            <motion.input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2 text-sm" variants={fieldVariants} />

            <motion.div className="space-y-2" variants={fieldVariants}>
              <p className="text-white text-sm">Preferred method of communication</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="method" value="email" checked={method === "email"} onChange={() => setMethod("email")} />
                  <span className="text-white text-sm">Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="method" value="phone" checked={method === "phone"} onChange={() => setMethod("phone")} />
                  <span className="text-white text-sm">Phone</span>
                </label>
              </div>
            </motion.div>

            <motion.textarea placeholder="Message" rows={3} className="w-full bg-transparent border-b border-gray-400 placeholder-gray-400 focus:outline-none text-white py-2 resize-none text-sm" variants={fieldVariants} />

            <motion.button type="submit" className="mt-4 w-full bg-white text-gray-900 font-medium py-3 rounded-lg text-sm" variants={fieldVariants}>
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
