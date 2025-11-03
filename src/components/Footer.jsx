import React from 'react';
import { Shield, Lock, Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="security" className="relative mt-20 border-t border-white/5 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">VanishAuth</h3>
            <p className="mt-2 max-w-sm text-sm text-slate-300">Passwordless biometrics that blend into your product. Faster checkouts, safer accounts, happier users.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">© {new Date().getFullYear()}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Made for builders</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-200">Trusted by modern teams</h4>
            <div className="mt-3 grid grid-cols-3 gap-2 text-slate-300">
              {['LumenPay', 'HyperCart', 'FluxAI', 'NovaBank', 'Shiply', 'SentryOps'].map((name) => (
                <div key={name} className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs">
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-200">Security & Compliance</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-cyan-400" /> SOC 2 Type II controls</li>
              <li className="flex items-center gap-2"><Lock className="h-4 w-4 text-cyan-400" /> End-to-end encryption</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-400" /> GDPR & ISO 27001 aligned</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {['SOC 2', 'GDPR', 'ISO 27001', 'WebAuthn'].map((b) => (
                <span key={b} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-cyan-200">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-slate-400 md:flex-row">
          <p>Built with security-first design. No passwords to steal.</p>
          <div className="flex items-center gap-4">
            <a href="#docs" className="hover:text-slate-200">Docs</a>
            <span className="text-slate-600">•</span>
            <a href="#get-started" className="hover:text-slate-200">Get API Key</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
