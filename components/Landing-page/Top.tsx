import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Top = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulates a load time of 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className="pl-10">
        {/* Dashboard Title positioned to the top left */}
        <div className="absolute top-4 left-20">
          <h2 className="text-xl font-semibold">Cyber Risk and Exposure Management Dashboard</h2>
        </div>
        <div className="absolute top-2 right-4 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search your network"
            className="bg-gray-800 p-2 rounded-full text-white outline-none"
          />
          <div className="bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
            GB
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-8 mt-8 border-t border-gray-700 pt-6">
          {/* Analyzed Assets */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: "calc(100% * 1.02)" }} // Increase height by 2%
          >
            <p className="text-gray-400 text-sm">Analyzed Assets</p>
            <div className="flex justify-center items-center">
              <h3 className="text-3xl font-bold">4.1K</h3>
              <div className="w-16 ml-2 h-2 relative">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    isLoading ? "bg-gray-500" : "bg-gradient-to-r from-blue-400 to-transparent"
                  } shadow-lg transition-all duration-1000`}
                  style={{ width: isLoading ? "0%" : "100%" }}
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">+5% in last 24 hr</p>
            <div className="absolute right-0 top-1/2 h-[70%] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          </motion.div>

          {/* Cyber Risk */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ height: "calc(100% * 1.02)" }} // Increase height by 2%
          >
            <p className="text-gray-400 text-sm">Cyber Risk</p>
            <div className="flex justify-center items-center">
              <h3 className="text-3xl font-bold">$16.4M</h3>
              <div className="w-16 ml-2 h-2 relative">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    isLoading ? "bg-gray-500" : "bg-gradient-to-r from-red-400 to-transparent"
                  } shadow-lg transition-all duration-1000`}
                  style={{ width: isLoading ? "0%" : "100%" }}
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">+5% in last 24 hr</p>
            <div className="absolute right-0 top-1/2 h-[70%] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          </motion.div>

          {/* What's Changed */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ height: "calc(100% * 1.02)" }} // Increase height by 2%
          >
            <p className="text-gray-400 text-sm">What's Changed</p>
            <div className="flex justify-center items-center">
              <h3 className="text-2xl font-bold">-2.1K Fixes</h3>
            </div>
            <p className="text-red-400 text-sm">+1.7K New Exposures</p>
            <p className="text-white text-sm">+700 New Assets</p>
            <p className="text-gray-400 text-xs">in last 24 hr</p>
            <div className="absolute right-0 top-1/2 h-[70%] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          </motion.div>

          {/* System Health */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ height: "calc(100% * 1.02)" }} // Increase height by 2%
          >
            <p className="text-gray-400 text-sm">Balbix System Health</p>
            <p className="text-green-400 text-3xl font-bold">All Good</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Top;
