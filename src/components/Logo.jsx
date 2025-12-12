import React from 'react';

const Logo = ({ size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <defs>
        <linearGradient id="googleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" /> {/* Blue */}
          <stop offset="33%" stopColor="#EA4335" /> {/* Red */}
          <stop offset="66%" stopColor="#FBBC04" /> {/* Yellow */}
          <stop offset="100%" stopColor="#34A853" /> {/* Green */}
        </linearGradient>
      </defs>
      
      {/* Outer Chat Bubble Shape */}
      <path
        d="M21 11.5C21 16.7467 16.7467 21 11.5 21C9.83 21 8.27 20.55 6.91 19.76L3 21L4.24 17.09C3.45 15.73 3 14.17 3 12.5C3 7.25329 7.25329 3 12.5 3C17.7467 3 21 7.25329 21 12.5Z"
        stroke="url(#googleGradient)"
        strokeWidth="2"
        fill="rgba(255,255,255,0.05)"
      />

      {/* Inner AI Sparkle (Mirror Reflection) */}
      <path
        d="M12 8L13.5 11.5L17 13L13.5 14.5L12 18L10.5 14.5L7 13L10.5 11.5L12 8Z"
        fill="url(#googleGradient)"
      />
    </svg>
  );
};

export default Logo;