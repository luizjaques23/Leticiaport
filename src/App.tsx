/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import SkillsAndCredentials from "./components/SkillsAndCredentials";
import Contact from "./components/Contact";
import ResumeModal from "./components/ResumeModal";
import { motion } from "motion/react";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="bg-paper min-h-screen text-ink font-sans selection:bg-accent/20 selection:text-ink scroll-smooth antialiased">
      {/* Premium Sticky Navigation */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single Page Sections Wrapper */}
      <main className="w-full">
        {/* Animated Slide In / Fade In Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
        </motion.div>

        {/* Chronological Detailed Trajectory */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Timeline />
        </motion.div>



        {/* Dynamic & Interactive Skills and Academic Credentials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SkillsAndCredentials />
        </motion.div>

        {/* Polished Contact & Booking Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Interactive Official Executive Resume Modal Dossiê */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
