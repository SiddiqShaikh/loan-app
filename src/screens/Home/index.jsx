import {
  ArrowRightLeft,
  Bot,
  ChevronLeft,
  ChevronRight,
  Coins,
  HandCoins,
  PiggyBank,
  RotateCcw,
  Shield,
  TrendingUp,
} from "lucide-react";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const HeroSection = lazy(() => import("./HeroSection"));
const HowItWorks = lazy(() => import("./HowItWorks"));
const VideoTutorial = lazy(() => import("./VideoTutorial"));
const Home = () => {
  return (
    <main className="min-h-screen w-full bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <HowItWorks />
        <VideoTutorial />
        <MoreAboutUs />
        <Testimonials />
        <FAQs />
      </Suspense>
    </main>
  );
};

export default Home;

// const HeroSection = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [
//     "https://www.okx.com/cdn/assets/imgs/243/F485DEA432C68FD9.png?x-oss-process=image/format,webp",
//     "https://hycm.com/assets/img/trade-mobile-app/trade-mobile.png",
//     "https://devexperts.com/app/uploads/2020/12/mobile-business-tools-2x_d9e83f8d.png",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length); // Loop through images
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <section className="text-white w-full">
//       <div className="container pt-32 px-2 mx-auto h-screen flex flex-col md:flex-row">
//         {/* Left Content */}
//         <div className="flex-1 flex flex-col md:justify-center">
//           <motion.h1
//             initial={{ opacity: 1, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl md:text-4xl lg:text-6xl transition text-center md:text-start font-semibold"
//           >
//             Borrow ZUSD Without Collateral
//           </motion.h1>
//           <motion.h1
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="text-lg md:text-xl text-neutral-400 transition text-center md:text-start w-full max-w-[500px] mt-2 mx-auto md:mx-0"
//           >
//             Access instant liquidity with ZUSD loans. Trade, earn, and grow your
//             crypto portfolio with ZeroLoan's advanced AI trading system.
//           </motion.h1>
//           <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-2xl w-full max-w-[200px] mt-4 inline-flex items-center justify-center gap-2 mx-auto md:mx-0">
//             <Coins className="text-white text-sm" />
//             Launch App
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 flex items-center justify-center">
//           <motion.div
//             className="w-full max-w-[500px] px-4 py-4"
//             key={currentImage} // Ensure re-rendering each time the image changes
//             initial={{ opacity: 0, x: 50 }} // Initial position to the right
//             animate={{ opacity: 1, x: 0 }} // Animate to the center
//             exit={{ opacity: 0, x: -50 }} // Exit position to the left
//             transition={{ duration: 1, ease: "easeInOut" }}
//           >
//             <img
//               src={images[currentImage]}
//               className="object-contain w-full h-[450px] md:h-[600px]"
//               alt="ZUSD Illustration"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

const testimonials = [
  {
    id: 1,
    content:
      "ZeroLoan's AI trading system has revolutionized my investment strategy. I've seen consistent returns since I started using it.",
    author: "Jane Doe",
    position: "Professional Trader",
  },
  {
    id: 2,
    content:
      "The real-time analytics provided by ZeroLoan have given me unprecedented insights into market trends. It's a game-changer.",
    author: "John Smith",
    position: "Financial Analyst",
  },
  {
    id: 3,
    content:
      "I was skeptical about AI trading at first, but ZeroLoan has proven its worth. The results speak for themselves.",
    author: "Emily Johnson",
    position: "Retail Investor",
  },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="my-40 text-white">
      <div className="container px-2 mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center font-semibold mb-6">
          Don’t Just Take Our Word for It
        </h1>
        <p className="text-center text-neutral-400 mb-8">
          Read how we’ve helped our users achieve their goals and grow
        </p>
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
            >
              <p className="mb-4 text-xl italic text-gray-300">
                "{testimonials[currentIndex].content}"
              </p>
              <p className="font-semibold text-white">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].position}
              </p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full bg-blue-500 p-3 text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full bg-blue-500 p-3 text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which accordion is open

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "How can I borrow ZUSD without collateral?",
      answer:
        "You can borrow ZUSD without collateral by simply connecting your wallet and requesting a loan amount between $100 and $100,000 ZUSD. Our system will process your request instantly.",
    },
    {
      question: "How does the AI trading system work?",
      answer:
        "Our advanced AI trading system analyzes market trends and executes trades automatically to maximize your earnings. You can start trading by allocating your  borrowed ZUSD to the AI system.",
    },
    {
      question: "When do I need to repay the loan?",
      answer:
        "You can repay the loan at any time. However, you must repay the full amount before converting your ZUSD earnings to USDT and withdrawing to your wallet.",
    },
  ];
  return (
    <section className="my-20 text-white">
      <div className="container px-2 mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center font-semibold mb-6">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4 w-full max-w-[800px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <div
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer py-3 px-4 flex justify-between items-center text-lg font-semibold"
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.1 }}
                    className="overflow-hidden px-4 py-2 text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MoreAboutUs = () => {

    const [selectedTab, setSelectedTab] = useState("loans");

    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };
  
    const tabContent = {
      loans: {
        image: "https://www.okx.com/cdn/assets/imgs/243/F485DEA432C68FD9.png?x-oss-process=image/format,webp", // Replace with your actual image URL
        text: "Access instant liquidity with ZUSD loans. Trade, earn, and grow your crypto portfolio with ZeroLoan's advanced AI trading system.",
      },
      trading: {
        image: "https://hycm.com/assets/img/trade-mobile-app/trade-mobile.png", // Replace with your actual image URL
        text: "Enhance your crypto trading with cutting-edge AI algorithms designed for maximum profit. Start your journey now.",
      },
    };
  return (
    <section className="text-white bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:flex-row flex-col-reverse">
          {/* Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={tabContent[selectedTab].image}
              alt="Tab content"
              className="object-contain w-full h-[400px] md:h-[500px]"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 mt-8 md:mt-0">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-6xl font-semibold mb-4"
            >
              {selectedTab === "exchange"
                ? "One app. Unlimited possibilities."
                : "Explore the Future with Web3."}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-neutral-400 max-w-lg mx-auto md:mx-0"
            >
              {tabContent[selectedTab].text}
            </motion.p>
            <div className="flex mt-8 mb-8">
            <button
            onClick={() => handleTabClick("loans")}
            className={`px-6 py-3 mr-4 rounded-full font-semibold ${
              selectedTab === "loans" ? "bg-white text-black" : "bg-transparent text-white"
            }`}
          >
            ZUSD Loans
          </button>
          <button
            onClick={() => handleTabClick("trading")}
            className={`px-6 py-3 rounded-full font-semibold ${
              selectedTab === "trading" ? "bg-white text-black" : "bg-transparent text-white"
            }`}
          >
            AI Trading
          </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
