import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', Bitcoin: 20000, Avalanche: 18000, Cardano: 15000, NearProtocol: 14000, Stacks: 12000 },
  { month: 'Feb', Bitcoin: 22000, Avalanche: 20000, Cardano: 16000, NearProtocol: 15000, Stacks: 12500 },
  { month: 'Mar', Bitcoin: 24000, Avalanche: 23000, Cardano: 18000, NearProtocol: 16000, Stacks: 14000 },
  { month: 'Apr', Bitcoin: 25000, Avalanche: 24000, Cardano: 20000, NearProtocol: 17000, Stacks: 15000 },
  { month: 'May', Bitcoin: 26000, Avalanche: 25000, Cardano: 21000, NearProtocol: 18000, Stacks: 15500 },
  { month: 'Jun', Bitcoin: 27000, Avalanche: 26000, Cardano: 22000, NearProtocol: 19000, Stacks: 16000 },
  { month: 'Jul', Bitcoin: 28000, Avalanche: 27000, Cardano: 23000, NearProtocol: 20000, Stacks: 16500 },
  { month: 'Aug', Bitcoin: 29000, Avalanche: 28000, Cardano: 24000, NearProtocol: 21000, Stacks: 17000 },
  { month: 'Sep', Bitcoin: 30000, Avalanche: 29000, Cardano: 25000, NearProtocol: 22000, Stacks: 18000 },
  { month: 'Oct', Bitcoin: 31000, Avalanche: 30000, Cardano: 26000, NearProtocol: 23000, Stacks: 19000 },
  { month: 'Nov', Bitcoin: 32000, Avalanche: 31000, Cardano: 27000, NearProtocol: 24000, Stacks: 20000 },
  { month: 'Dec', Bitcoin: 33000, Avalanche: 32000, Cardano: 28000, NearProtocol: 25000, Stacks: 21000 },
];

const colors = {
  Bitcoin: '#ff7300',
  Avalanche: '#8884d8',
  Cardano: '#82ca9d',
  NearProtocol: '#ffc658',
  Stacks: '#ff6347',
};

const CryptoChart: React.FC = () => {
  const [highlighted, setHighlighted] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll event to check if the chart is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (chartRef.current) {
        const rect = chartRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll); // Remove listener after it becomes visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  const handleLegendClick = (crypto: keyof typeof colors) => {
    setHighlighted((prev) => (prev === crypto ? '' : crypto));
  };

  return (
    <div ref={chartRef} className="bg-black p-6 rounded-lg text-white w-[95%]">
      <h2 className="text-xl font-bold mb-4">Crypto Summary</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start hidden and below
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animate when visible
        transition={{ duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <defs>
              <filter id="glow" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#ddd" />
            <YAxis stroke="#ddd" />
            <Tooltip
              contentStyle={{ backgroundColor: '#222', borderRadius: '8px', borderColor: '#222' }}
              itemStyle={{ color: '#fff' }}
            />
            {Object.keys(colors).map((crypto) => (
              <Line
                key={crypto}
                type="monotone"
                dataKey={crypto}
                stroke={colors[crypto as keyof typeof colors]}
                strokeWidth={3}
                strokeOpacity={highlighted === crypto || highlighted === '' ? 1 : 0.3}
                dot={false}
                filter={highlighted === crypto ? 'url(#glow)' : ''}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
      <div className="flex space-x-2 mt-4 pl-20">
        {Object.keys(colors).map((crypto) => (
          <div
            key={crypto}
            onClick={() => handleLegendClick(crypto as keyof typeof colors)}
            className={`cursor-pointer flex items-center space-x-1 px-2 py-1 rounded  ${
              highlighted === crypto ? 'bg-gray-800' : 'bg-gray-700'
            }`}
          >
            <span
              className="block w-2 h-2 rounded-full"
              style={{ backgroundColor: colors[crypto as keyof typeof colors] }}
            ></span>
            <span className="text-sm ">{crypto}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoChart;
