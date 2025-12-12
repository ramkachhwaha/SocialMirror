import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-12 py-8 border-t border-gray-800 text-center relative z-10">

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

            <div className="relative flex flex-col items-center gap-3">


                <p className="text-gray-400 text-sm">
                    Designed & Developed by
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">



                        <a
                            href="https://github.com/ramkachhwaha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:opacity-80 transition-opacity"
                        >

                            <img
                                src="/github-icon.svg"
                                alt="GitHub"
                                className="w-5 h-5 inline-block ml-2 opacity-70 hover:opacity-100 transition-opacity invert [.light-mode_&]:invert-0"
                            />


                            ramkachhwaha
                        </a>
                    </span>
                </p>

                {/* Hackathon Badge */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Submission for</span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:border-blue-500/50 transition-colors cursor-default">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#4285F4">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                        Google DeepMind Hackathon 2025
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-gray-600 text-xs mt-2">
                    © {new Date().getFullYear()} SocialMirror. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;