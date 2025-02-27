import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className="absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10"
        style={{ padding: "15px 50px" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff] ">Ayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full stack developer
          </p>
        </div>
      </div>

      {/* Computers Canvas */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <ComputersCanvas className="w-full h-full sm:w-[80%] sm:h-[80%] mx-auto" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[64px] rounded-3xl border-4 border-s-amber-50 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-slate-50 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
