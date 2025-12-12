import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const AICoach = ({ riskScore, analysis, proTip }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* Risk Meter */}
      <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-google-red relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-google-red flex items-center gap-2">
              <Info size={16} /> Risk Level
            </h4>
            <span className="text-2xl font-black">{riskScore}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${riskScore}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full ${
                riskScore < 30 ? 'bg-google-green' : 
                riskScore < 70 ? 'bg-google-yellow' : 'bg-google-red'
              }`} 
            />
          </div>
          <p className="mt-3 text-sm opacity-80 leading-relaxed">{analysis}</p>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-google-blue">
         <h4 className="font-bold text-google-blue flex items-center gap-2 mb-2">
           <Info size={16} /> AI Coach Tip
         </h4>
         <p className="text-sm font-medium leading-relaxed">{proTip}</p>
      </div>
    </motion.div>
  );
};

export default AICoach;