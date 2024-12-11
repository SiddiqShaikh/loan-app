import {
  ArrowRightLeft,
  Bot,
  HandCoins,
  PiggyBank,
  RotateCcw,
  Shield,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <HandCoins className="h-12 w-12 text-blue-500" />,
    title: "Borrow ZUSD",
    description: "Borrow $100 - $100,000 ZUSD without collateral",
  },
  {
    icon: <Bot className="h-12 w-12 text-blue-500" />,
    title: "Trade with AI",
    description: "Use our advanced AI to trade and earn more ZUSD",
  },
  {
    icon: <PiggyBank className="h-12 w-12 text-blue-500" />,
    title: "Deposit USDT",
    description: "Add USDT to your account to repay the loan",
  },
  {
    icon: <RotateCcw className="h-12 w-12 text-blue-500" />,
    title: "Repay Loan",
    description: "Pay back the loan with no interest",
  },
  {
    icon: <ArrowRightLeft className="h-12 w-12 text-blue-500" />,
    title: "Convert & Withdraw",
    description: "Convert ZUSD to USDT and withdraw to your wallet",
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-500" />,
    title: "Enhanced Security",
    description:
      "State-of-the-art security measures to protect your assets and personal information.",
  },
];

const HowItWorks = () => {
  return (
    <section className="my-36 text-white">
      <div className="container px-2 mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center font-semibold">
          How It Works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg bg-gray-800 p-6 flex flex-col items-center justify-center text-center h-full"
            >
              <div className="flex-shrink-0 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
