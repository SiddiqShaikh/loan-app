import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coins } from "lucide-react";

const HeroSection = React.memo(() => {
  return (
    <section className="text-white w-full">
      <div className="container pt-32 px-2 mx-auto h-screen flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 flex flex-col md:justify-center">
          <motion.h1
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl  md:text-4xl lg:text-6xl transition text-center md:text-start font-semibold"
          >
            Borrow ZUSD Without Collateral
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-400 transition text-center md:text-start w-full max-w-[500px] mt-2 mx-auto md:mx-0"
          >
            Access instant liquidity with ZUSD loans. Trade, earn, and grow your
            crypto portfolio with ZeroLoan's advanced AI trading system.
          </motion.h1>
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-2xl w-full max-w-[200px] mt-4 inline-flex items-center justify-center gap-2 mx-auto md:mx-0">
            <Coins className="text-white text-sm" />
            Launch App
          </button>
          <div className="w-full flex items-center gap-8 mt-4 justify-center md:justify-start">
            <img
              className="w-20 md:w-28 h-36 object-contain"
              src="https://www.okx.com/cdn/assets/imgs/236/DD7AC9432E675714.png"
              alt="icon1"
            />
            <img
              className="w-20 md:w-28 h-36 object-contain"
              src="https://www.okx.com/cdn/assets/imgs/2210/499A92F3657A52EC.png"
              alt="icon1"
            />
            <img
              className="w-20 md:w-28 h-36 object-contain"
              src="https://www.okx.com/cdn/assets/imgs/2210/6279B178FADAFCC5.png"
              alt="icon1"
            />
          </div>
        </div>

        {/* Right Video */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <video
            src="https://www.okx.com/cdn/assets/files/243/78FBA21FD210816A.mp4"
            autoPlay
            loop
            muted
            className="object-contain w-full h-[450px] md:h-[600px]"
            alt="ZUSD Illustration"
          />
        </motion.div>
      </div>
    </section>
  );
});

export default HeroSection;
