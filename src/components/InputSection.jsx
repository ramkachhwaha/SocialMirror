import React, { useRef, useState } from 'react';
import { Upload, X, Instagram, Linkedin, Ghost, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PLATFORMS = [
  { id: 'Instagram', icon: Instagram, color: 'text-pink-500' },
  { id: 'X', icon: X, color: 'text-whait-500' },
  { id: 'LinkedIn', icon: Linkedin, color: 'text-blue-600' },
  { id: 'Snapchat', icon: Ghost, color: 'text-yellow-400' },
];

const InputSection = ({ platform, setPlatform, caption, setCaption, image, setImage, onSimulate, loading }) => {
  const fileInputRef = useRef(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
  };

  const readFile = (file) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files?.[0]) readFile(e.dataTransfer.files[0]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-panel rounded-3xl p-6 shadow-2xl shadow-black/5"
    >
      <div className="space-y-6">

        {/* Platform Selector */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">Select Platform</label>
          <div className="grid grid-cols-4 gap-2">
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-200 border ${platform === p.id
                  ? 'bg-white/10 border-google-blue shadow-inner'
                  : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                <p.icon size={24} className={`mb-1 ${platform === p.id ? p.color : 'text-gray-400'}`} />
              </button>
            ))}
          </div>
          <div className="text-center mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            {platform} Context
          </div>
        </div>

        {/* Image Upload */}
        <div
          className={`relative h-64 border-2 border-dashed rounded-2xl transition-all duration-300 flex flex-col items-center justify-center overflow-hidden cursor-pointer
            ${isDragActive ? 'border-google-blue bg-google-blue/5' : 'border-gray-300 dark:border-gray-700 hover:border-google-blue/50'}
            ${image ? 'border-none' : ''}
          `}
          onDragOver={(e) => { e.preventDefault(); setIsDragActive(true); }}
          onDragLeave={() => setIsDragActive(false)}
          onDrop={handleDrop}
          onClick={() => !image && fileInputRef.current.click()}
        >
          {image ? (
            <div className="w-full h-full relative">
              <img src={image} alt="Preview" className="w-full h-full object-cover" />
              <button
                onClick={(e) => { e.stopPropagation(); setImage(null); }}
                className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors backdrop-blur-md"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3">
                <Upload size={20} className="text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Click or drag image</p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP</p>
            </div>
          )}
          <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Caption */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full h-24 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-google-blue/50 resize-none transition-all placeholder-gray-400"
          />
        </div>

        {/* Action Button */}
        <button
          onClick={onSimulate}
          disabled={loading || (!image && !caption)}
          className="w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-google-blue/20 hover:shadow-google-blue/40 transform active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-google-blue via-google-red to-google-yellow background-animate"
          style={{ backgroundSize: '200% 200%' }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Sparkles size={18} className="text-yellow-100" />
              Simulate Reactions
            </span>
          )}
        </button>

      </div>
    </motion.div>
  );
};

export default InputSection;