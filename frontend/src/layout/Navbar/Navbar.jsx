import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Button from "../../common/Button"; // Import the reusable Button component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren", // Start child animations after parent
        staggerChildren: 0.2,  // Delay each child by 0.2 seconds
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for each menu item
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-transparent text-white py-4 px-6 flex justify-between items-center z-50">
    {/* /* Logo */}
    <div className="text-6xl font-bold text-[#fff]"><span>Ski</span><span className="text-[#00C2D1] text-7xl font-semibold font">LLN</span><span>ation</span></div>

    {/* /* Hamburger Menu */ }
      <div className="flex gap-10 justify-center items-center">
        <Button
          text="APPLY NOW"
          bgColor="#00C2D1"
          textColor="#fff"
          className="text-xl border border-[#00C2D1]"
        />
        <Button
          text="BECOME A PARTNER"
          bgColor="#285F74"
          textColor="#fff"
          className="text-xl border border-[#285F74]"
        />

        <div
          className="text-3xl cursor-pointer z-30 text-white"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </div>
      </div>
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full bg-white z-40 flex flex-col items-center justify-center"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-3xl text-[#285F74]"
          style={{ zIndex: 50 }}
        >
          <RxCross1 />
        </button>
        <motion.div
          className="flex flex-col items-start text-[#285F74]"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={menuVariants} // Apply stagger effect to children
        >
          <motion.div
            className="text-4xl leading-relaxed hover:bg-[#e3e7e8] duration-500 cursor-pointer rounded-full w-full py-4 px-6 font-bold mb-6"
            variants={itemVariants} // Individual item animation
          >
            WHAT IS SKILL NATION ?
          </motion.div>
          <motion.div
            className="text-4xl leading-relaxed hover:bg-[#e3e7e8] duration-500 cursor-pointer rounded-full w-full p-4 font-bold mb-6"
            variants={itemVariants}
          >
            WHY SKILL NATION ?
          </motion.div>
          <motion.div
            className="text-4xl leading-relaxed hover:bg-[#e3e7e8] duration-500 cursor-pointer rounded-full w-full p-4 font-bold mb-6"
            variants={itemVariants}
          >
            TRAINING AND CERTIFICATION
          </motion.div>
          <motion.div
            className="text-4xl leading-relaxed hover:bg-[#e3e7e8] duration-500 cursor-pointer rounded-full w-full p-4 font-bold mb-6"
            variants={itemVariants}
          >
            VERIFY CERTIFICATE
          </motion.div>
          <motion.div
            className="text-4xl leading-relaxed hover:bg-[#e3e7e8] duration-500 cursor-pointer rounded-full w-full p-4 font-bold mb-6"
            variants={itemVariants}
          >
            CONTACT US
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
