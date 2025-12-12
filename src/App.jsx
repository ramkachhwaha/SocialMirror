
import React, { useState, useEffect } from 'react';
import { Moon, Sun, LayoutGrid } from 'lucide-react';
import InputSection from './components/InputSection.jsx';
import ResultsSection from './components/ResultsSection.jsx';
import { simulateReactions } from './services/geminiService.js';
import Logo from './components/Logo.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [platform, setPlatform] = useState('Instagram');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleSimulate = async () => {
    if (!caption && !image) return;

    setLoading(true);
    setResults(null);

    try {
      const data = await simulateReactions(image, caption, platform);
      setResults(data);
    } catch (error) {
      console.error("Simulation failed", error);
      alert("Something went wrong. Please check your connection or API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen transition-colors duration-300">

        {/* Fixed Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-xl
          /* Dark Mode (Default) */
          bg-[#0a0a0a]/80 border-white/10
          /* Light Mode (High Contrast Fix) */
          [.light-mode_&]:bg-white/90 [.light-mode_&]:border-gray-200 [.light-mode_&]:shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Left: Brand Identity */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Logo size={26} />
              </div>
              <h1 className="text-xl font-bold tracking-tight transition-colors
        text-white [.light-mode_&]:text-gray-900"
              >
                Social<span className="text-blue-500">Mirror</span>
              </h1>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">

              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full transition-all duration-300 border backdrop-blur-sm
                
                bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20
                
                [.light-mode_&]:bg-white 
                [.light-mode_&]:border-gray-200 
                [.light-mode_&]:text-slate-700 
                [.light-mode_&]:shadow-md 
                [.light-mode_&]:hover:bg-gray-50 
                [.light-mode_&]:hover:text-blue-600
                [.light-mode_&]:hover:shadow-lg"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  // Sun Icon (Yellow Glow)
                  <Sun size={20} className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] transition-transform duration-500 hover:rotate-90" />
                ) : (
                  // Moon Icon (Dark Slate)
                  <Moon size={20} className="transition-transform duration-500 hover:-rotate-12" />
                )}
              </button>

            </div>
          </div>
        </nav>
        {/* Main Content */}
        <main className="max-w-7xl mx-auto pt-28 pb-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Panel: Input */}
            <div className="lg:col-span-4 xl:col-span-4">
              <div className="sticky top-28">
                <InputSection
                  platform={platform}
                  setPlatform={setPlatform}
                  caption={caption}
                  setCaption={setCaption}
                  image={image}
                  setImage={setImage}
                  onSimulate={handleSimulate}
                  loading={loading}
                />
              </div>
            </div>

            {/* Right Panel: Results */}
            <div className="lg:col-span-8 xl:col-span-8 min-h-[600px]">
              <ResultsSection
                results={results}
                loading={loading}
                userImage={image}
                userCaption={caption}
                platform={platform}
              />
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
