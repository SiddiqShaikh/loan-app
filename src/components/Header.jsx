"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Coins, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-500 bg-black w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="text-2xl font-bold text-blue-500">
          ZeroLoan
        </a>
        <nav className="hidden space-x-8 md:flex">
          <NavLinks />
        </nav>
        <div className="hidden space-x-4 md:flex">
          {/* <button  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 w-full">
            Log In
          </button> */}
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-2xl w-full max-w-[200px] mt-4 inline-flex items-center justify-center gap-2 mx-auto md:mx-0">
            <Coins className="text-white text-sm" />
            Launch App
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black p-4 md:hidden"
        >
          <nav className="flex flex-col space-y-4 justify-center items-center mt-4">
            <NavLinks />
          </nav>
          <div className="w-full flex items-center justify-center mt-8">

          <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg w-full">
            Launch App
          </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <a
        href="#"
        className="text-gray-300 hover:text-blue-500 text-xl md:text-lg "
      >
        Home
      </a>
      <a
        href="#portfolio"
        className="text-gray-300 hover:text-blue-500 text-xl md:text-lg "
      >
        Portfolio
      </a>
      <a
        href="#arbitrage"
        className="text-gray-300 hover:text-blue-500 text-xl md:text-lg "
      >
        Arbitrage
      </a>
      <a
        href="#borrow"
        className="text-gray-300 hover:text-blue-500 text-xl md:text-lg "
      >
        Borrow
      </a>
    </>
  );
}
