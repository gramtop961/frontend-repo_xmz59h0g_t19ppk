import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" /> Live in <span className="font-medium text-white">under 5 minutes</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
            Passwordless biometric logins for developers — ship identity that feels invisible and secure. Integrate with a single line of code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-0">Start free</a>
            <a href="#docs" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">See docs</a>
          </div>
          <ul id="features" className="mt-10 grid grid-cols-1 gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">• Face / Touch / Passkeys</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">• One SDK, all platforms</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">• End-to-end encrypted</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">• SOC 2 & GDPR ready</li>
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full lg:aspect-[5/4] xl:aspect-[16/10]">
          <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-cyan-500/10 via-cyan-400/5 to-transparent" />
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0A0B0F] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
