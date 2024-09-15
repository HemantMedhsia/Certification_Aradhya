import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const Cursor = () => {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  // Using Framer Motion's spring values for smooth animation
  const springX = useSpring(0, { stiffness: 100, damping: 20 });
  const springY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Update the spring values when the target position changes
  useEffect(() => {
    springX.set(targetPosition.x);
    springY.set(targetPosition.y);
  }, [targetPosition.x, targetPosition.y, springX, springY]);

  return (
    <motion.div
      className={`fixed w-64 h-64 rounded-full bg-[#00C2D1] bg-opacity-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity ease-out duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        x: springX,
        y: springY,
        zIndex: 1000, // Ensure it's on top of other elements
      }}
      animate={{
        scale: isVisible ? [1, 1.2, 1] : 1, // Pulsating effect
        opacity: isVisible ? [0.5, 1, 0.5] : 0.5, // Fade in and out
      }}
      transition={{
        scale: {
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
        opacity: {
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ width: '100%', height: '100%' }}
        animate={{
          rotate: isVisible ? [0, 360] : 0, // Rotating effect
        }}
        transition={{
          rotate: {
            duration: 2, // Adjust duration for rotation speed
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <div className="text-white font-bold text-xl">Rotate Me!</div>
      </motion.div>
    </motion.div>
  );
};

export default Cursor;
