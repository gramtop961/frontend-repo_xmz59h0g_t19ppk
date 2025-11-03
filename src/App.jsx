import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CodeSection from './components/CodeSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0ea5e9]/10 via-transparent to-transparent" />
      <Navbar />
      <main>
        <Hero />
        <CodeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
