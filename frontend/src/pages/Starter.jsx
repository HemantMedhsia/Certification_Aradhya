import React from "react";
import sampleVideo from "../assets/bgv2.mp4"; // Replace with your video file
import Navbar from "../layout/Navbar/Navbar";
import { motion } from "framer-motion";
import MainPageComponent2 from "./MainPageComponent2";

const Starter = () => {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for darker background (Optional) */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-20"></div>

        <Navbar />

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-30 flex items-center ml-16 h-full"
        >
          <div className="text-white font-bold">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-9xl font-bold mb-4"
            >
              ELEVATE YOUR
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-9xl font-bold mb-4"
            >
              C
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-red-500"
              >
                A
              </motion.span>
              RRIER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-5xl"
            >
              -With SkillNation
            </motion.p>
          </div>
        </motion.div>
      </div>
      <div>
        <MainPageComponent2 />
      </div>
    </div>
  );
};

export default Starter;
