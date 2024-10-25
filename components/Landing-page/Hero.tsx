import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaChartBar, FaWallet, FaEthereum, FaDollarSign, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsStack, BsGrid3X3 } from 'react-icons/bs';
import CryptoChart from './CryptoChart';
import PortfolioDashboard from './CryptoPortfolio';
import Top from './Top';

// Sample data for the chart
const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

// Define prop types for HeaderBox
interface HeaderBoxProps {
  icon: React.ElementType; // Type for the icon prop
  title: string;
  value: string;
  percentage: string;
  color: string;
}

// Updated HeaderBox component to accept an icon prop
const HeaderBox: React.FC<HeaderBoxProps> = ({ icon: Icon, title, value, percentage, color }) => (
  <motion.div
    className="bg-black p-4 rounded-lg text-white flex flex-col items-start"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: -20 }} // Initial state for animation
    animate={{ opacity: 1, y: 0 }}   // Animation on load
    exit={{ opacity: 0, y: 20 }}      // Animation on exit (if needed)
    transition={{ duration: 0.5 }}    // Duration of the animation
  >
    {/* Display the icon */}
    <Icon className="text-3xl mb-2" />
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className={`text-2xl ${color}`}>{value}</p>
    <span className={`text-sm ${color}`}>{percentage}</span>
  </motion.div>
);

// Dismissible Card Component
const DismissibleCard: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // If not visible, return null to remove the card from the DOM

  return (
    <motion.div
      className="fixed top-20 right-10 bg-gradient-to-r from-purple-700 to-blue-800 text-white p-6 rounded-lg shadow-lg w-80"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Modern CRQ: A Symphony of AI and Human Insights</h2>
        {/* Close button */}
        <button onClick={() => setVisible(false)} className="text-xl hover:text-gray-300">
          &times;
        </button>
      </div>
      <p className="mt-2 text-sm">Tuesday, April 9, 2024 | 11 AM ET</p>
      <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
        Register
      </button>
    </motion.div>
  );
};

// Side Navigation Bar Component
const SideNavBar: React.FC = () => {
  const avatars = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/women/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-16 bg-black flex flex-col items-center space-y-8 py-4">
      {/* Icons */}
      <BsGrid3X3 className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer" />
      <FaHome className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer" />
      <FaWallet className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer" />
      <FaChartBar className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer" />
      <FaEthereum className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer" />
      <BsStack className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer" />
      <FaUser className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer" />
      
      {/* Dots */}
      <div className="space-y-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </div>

      {/* Random Profile Avatars */}
      <div className="space-y-3">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Profile ${index}`}
            className="w-10 h-10 rounded-full border-2 border-gray-700 hover:border-white cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

// Main Component
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Top />
      <PortfolioDashboard />
      {/* Side Nav */}
      <SideNavBar />

      {/* Dismissible Card */}
      <DismissibleCard />

      {/* Responsive grid layout for portfolio value */}
      <div className="pl-20 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 align-middle items-center">
          <HeaderBox title="Income" value="$34,394" percentage="+4.5%" color="text-green-400" icon={FaDollarSign} />
          <HeaderBox title="Expense" value="$12,550" percentage="+1.5%" color="text-red-400" icon={FaArrowDown} />
          <HeaderBox title="Last Year" value="$98,120" percentage="+2.5%" color="text-blue-400" icon={FaArrowUp} />
        </div>

        {/* Crypto balances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <HeaderBox title="Ethereum" value="$32,430" percentage="+4.5%" color="text-green-400" icon={FaEthereum} />
          <HeaderBox title="Cardano" value="$8,500" percentage="+11.5%" color="text-green-400" icon={FaEthereum} />
          <HeaderBox title="Stacks" value="$12,980" percentage="+1.2%" color="text-blue-400" icon={BsStack} />
        </div>

        {/* Interactive charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
        </div>
        <CryptoChart />
      </div>
    </div>
  );
};

export default Dashboard;
