import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaChartBar, FaWallet, FaEthereum, FaDollarSign, FaArrowUp, FaArrowDown } from 'react-icons/fa';

// Use Tailwind for styling
const PortfolioDashboard: React.FC = () => {
  // Animation variants
  const boxVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-black text-white gap-6 rounded-lg shadow-lg pl-5">
      {/* Left Side - Portfolio Value */}
      <div className="flex flex-col lg:flex-row items-center gap-6 ">
        {/* Income */}
        <motion.div
          className="bg-gray-900 p-4 rounded-lg w-full sm:w-56 flex flex-col justify-between text-center"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="text-lg font-semibold">Income</div>
          <div className="text-3xl font-bold">$34,394</div>
          <div className="mt-2 flex items-center justify-center">
            {/* Bar Graph */}
            <div className="h-16 flex items-end space-x-1">
              <div className="bg-yellow-500 w-2 rounded-full h-8"></div>
              <div className="bg-yellow-400 w-2 rounded-full h-10"></div>
              <div className="bg-yellow-600 w-2 rounded-full h-6"></div>
              <div className="bg-yellow-300 w-2 rounded-full h-12"></div>
              <div className="bg-yellow-500 w-2 rounded-full h-9"></div>
            </div>
          </div>
          <div className="text-sm text-green-500 mt-2">+4.5%</div>
        </motion.div>

        {/* Expense */}
        <motion.div
          className="bg-gray-900 p-4 rounded-lg w-full sm:w-56 flex flex-col justify-between text-center"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }} // Add delay for staggered animation
        >
          <div className="text-lg font-semibold">Expense</div>
          <div className="text-3xl font-bold">$12,550</div>
          <div className="mt-2 flex items-center justify-center">
            {/* Bar Graph */}
            <div className="h-16 flex items-end space-x-1">
              <div className="bg-green-500 w-2 rounded-full h-8"></div>
              <div className="bg-green-400 w-2 rounded-full h-10"></div>
              <div className="bg-green-600 w-2 rounded-full h-6"></div>
              <div className="bg-green-300 w-2 rounded-full h-12"></div>
              <div className="bg-green-500 w-2 rounded-full h-9"></div>
            </div>
          </div>
          <div className="text-sm text-green-500 mt-2">+1.5%</div>
        </motion.div>

        {/* Last Year Stats */}
        <motion.div
          className="bg-gray-900 p-4 rounded-lg w-full sm:w-56 flex flex-col justify-between text-center"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }} // Add delay for staggered animation
        >
          <div className="text-lg font-semibold">Last Year</div>
          <div className="text-3xl font-bold">$98,120</div>
          <div className="mt-4 pl-16">
            {/* Circular progress bar */}
            <div className="relative w-16 h-16 pl-5">
              <svg className="absolute inset-0 w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="20"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="calc(27 * 3.14), calc(100 * 3.14)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                27%
              </div>
            </div>
          </div>
          <div className="text-sm text-green-500 mt-2">+2.5%</div>
        </motion.div>
      </div>

      {/* Right Side - Crypto Cards */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* ETH Card */}
        <motion.div
          className="bg-gray-900 p-4 rounded-lg w-full sm:w-48 flex flex-col justify-between text-center"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }} // Add delay for staggered animation
        >
          <div className="text-sm text-gray-400">05.01.2020</div>
          <div className="text-2xl font-bold">$32,430</div>
          <div className="text-lg">32 ETH</div>
          <div className="text-sm text-green-500 mt-2">+4.5%</div>
          <div className="mt-4">
            <FaEthereum className="mx-auto" size={40} /> {/* Use FaEthereum icon */}
          </div>
        </motion.div>

        {/* ADA Card */}
        <motion.div
          className="bg-gray-900 p-4 rounded-lg w-full sm:w-48 flex flex-col justify-between text-center"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }} // Add delay for staggered animation
        >
          <div className="text-sm text-gray-400">05.01.2020</div>
          <div className="text-2xl font-bold">$8,500</div>
          <div className="text-lg">12 ADA</div>
          <div className="text-sm text-green-500 mt-2">+11.5%</div>
          <div className="mt-4">
            <FaDollarSign className="mx-auto" size={40} /> {/* Use FaDollarSign icon */}
          </div>
        </motion.div>

        {/* STX Card */}
        <motion.div
          className="bg-gray-900 p-4 rounded-lg w-full sm:w-48 flex flex-col justify-between text-center"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }} // Add delay for staggered animation
        >
          <div className="text-sm text-gray-400">05.01.2020</div>
          <div className="text-2xl font-bold">$12,980</div>
          <div className="text-lg">89 STX</div>
          <div className="text-sm text-green-500 mt-2">+1.2%</div>
          <div className="mt-4">
            <FaUser className="mx-auto" size={40} /> {/* Use FaUser icon or any other preferred icon */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
