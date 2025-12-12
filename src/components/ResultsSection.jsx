
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, Copy, Check, MoreHorizontal } from 'lucide-react';
import AICoach from './AICoach.jsx';

const CommentCard = ({ data, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.suggestedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="glass-panel p-4 rounded-xl hover:bg-white/10 dark:hover:bg-white/[0.08] transition-colors group"
    >
      <div className="flex gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg text-sm shrink-0
          ${index % 4 === 0 ? 'bg-google-blue' : 
            index % 4 === 1 ? 'bg-google-red' : 
            index % 4 === 2 ? 'bg-google-yellow' : 'bg-google-green'}
        `}>
          {data.handle.substring(0,2).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-bold text-sm truncate">{data.handle}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/5 uppercase tracking-wider opacity-70">
              {data.persona}
            </span>
          </div>
          
          <p className="text-sm leading-snug mb-3 opacity-90">{data.text}</p>
          
          <div className="relative mt-2 p-3 bg-google-blue/5 dark:bg-google-blue/10 border border-google-blue/20 rounded-lg group/reply">
             <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-bold text-google-blue uppercase tracking-widest mb-1">Suggested Reply</p>
                  <p className="text-xs italic opacity-80">"{data.suggestedReply}"</p>
                </div>
                <button 
                  onClick={handleCopy}
                  className="p-1.5 hover:bg-google-blue/20 rounded-md text-google-blue transition-colors opacity-0 group-hover/reply:opacity-100"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ResultsSection = ({ results, loading, userImage, userCaption, platform }) => {
  
  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-google-blue/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-google-blue border-r-google-red border-b-google-yellow border-l-google-green animate-spin"></div>
        </div>
        <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-google-blue to-google-red">
          Generating Personas...
        </p>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
        <div className="w-32 h-32 bg-gray-200 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
          <MessageCircle size={48} />
        </div>
        <h3 className="text-xl font-bold">Waiting for input</h3>
        <p className="max-w-md mt-2">Upload a photo and simulate to see how the world reacts.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-300">
      
      {/* 1. User Post Preview */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl overflow-hidden max-w-xl mx-auto shadow-2xl"
      >
        <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 bg-white/50 dark:bg-black/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-google-blue to-google-green" />
            <div className="leading-tight">
              <p className="font-bold text-sm">you</p>
              <p className="text-xs opacity-60">{platform}</p>
            </div>
          </div>
          <MoreHorizontal size={18} className="opacity-50" />
        </div>

        {userImage && (
          <div className="aspect-square bg-black flex items-center justify-center">
            <img src={userImage} alt="Post" className="max-h-full w-full object-contain" />
          </div>
        )}

        <div className="px-4 py-3">
          <div className="flex justify-between mb-3">
            <div className="flex gap-4">
              <Heart size={24} className="hover:text-google-red transition-colors cursor-pointer" />
              <MessageCircle size={24} className="hover:text-google-blue transition-colors cursor-pointer" />
              <Send size={24} className="hover:text-google-green transition-colors cursor-pointer" />
            </div>
            <Bookmark size={24} className="hover:text-google-yellow transition-colors cursor-pointer" />
          </div>
          
          <div className="text-sm">
            <span className="font-bold mr-2">you</span>
            <span>{userCaption}</span>
          </div>
          <p className="text-xs opacity-50 mt-1 uppercase tracking-wide">Just Now</p>
        </div>
      </motion.div>

      {/* 2. AI Coach Dashboard (Risk & Tips) */}
      <AICoach 
        riskScore={results.riskScore}
        analysis={results.analysis}
        proTip={results.proTip}
      />

      {/* 3. Comments Feed */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold px-1">Simulation Results</h3>
        {results.comments.map((comment, idx) => (
          <CommentCard key={idx} data={comment} index={idx} />
        ))}
      </div>

    </div>
  );
};

export default ResultsSection;
