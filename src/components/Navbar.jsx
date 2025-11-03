import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="text-xl">VanishAuth</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition">Features</a>
            <a href="#code" className="text-sm text-slate-300 hover:text-white transition">Code</a>
            <a href="#security" className="text-sm text-slate-300 hover:text-white transition">Security</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#docs" className="hidden sm:inline-flex rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition">Docs</a>
            <a href="#get-started" className="inline-flex rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 transition">Get API Key</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
