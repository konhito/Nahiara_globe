"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [hideGlobe, setHideGlobe] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGlobeSection, setShowGlobeSection] = useState(true);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (showGlobeSection && window.scrollY > window.innerHeight * 0.1) {
        
        setHideGlobe(true);

        
        setTimeout(() => {
          setShowGlobeSection(false);
        }, 500); 
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showGlobeSection]);

  useEffect(() => {
    let animationFrameId: number;
    let position = scrollPosition;

    const animate = () => {
      position -= 0.1; 
      if (position <= -100) {
        position = 0;
      }
      setScrollPosition(position);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);


  return (
    <>
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#d9c498] origin-[0%] z-50"
        style={{ scaleX }}
      />

      <motion.div
        className="bg-white text-gray-800 min-h-screen"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Globe section with fade out animation */}
        {showGlobeSection && (
          <div
            className={`relative bg-[#1c3f60] min-h-screen transition-opacity duration-500 ${
              hideGlobe ? "opacity-0" : "opacity-100"
            }`}
          >
            <HeroSection />
          </div>
        )}
      </motion.div>
    </>
  );
}
