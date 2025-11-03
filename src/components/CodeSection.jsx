import React, { useMemo, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const LANGS = ['JavaScript', 'React', 'Python'];

const SNIPPETS = {
  JavaScript: `// Install: npm i @vanishauth/sdk\nimport { login } from '@vanishauth/sdk';\n\n// One line to start a biometric session\nawait login();`,
  React: `// Install: npm i @vanishauth/react\nimport { VanishProvider, LoginButton } from '@vanishauth/react';\n\nexport default function App() {\n  return (\n    <VanishProvider apiKey={import.meta.env.VITE_VANISH_KEY}>\n      <LoginButton /> {/* biometric prompt, device-native */}\n    </VanishProvider>\n  );\n}`,
  Python: `# Install: pip install vanishauth\nfrom vanishauth import login\n\n# One call to authenticate user with biometrics\nlogin()`,
};

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (_) {}
  };

  const lines = useMemo(() => code.split('\n'), [code]);

  return (
    <div className="relative rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl shadow-cyan-500/5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <span className="h-2 w-2 rounded-full bg-green-500/80" />
        </div>
        <button onClick={onCopy} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10 transition">
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />} {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto text-sm leading-relaxed text-slate-200">
        {lines.map((l, i) => (
          <code key={i} className="block whitespace-pre">{l}</code>
        ))}
      </pre>
    </div>
  );
};

const CodeSection = () => {
  const [active, setActive] = useState('JavaScript');

  return (
    <section id="code" className="relative border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Integrate in one line</h2>
          <p className="mt-3 text-slate-300">Drop-in biometric auth that feels native. Works across web, iOS, and Android with the same API.</p>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setActive(l)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === l ? 'bg-cyan-500 text-black' : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <CodeBlock code={SNIPPETS[active]} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 text-slate-300 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm">No passwords, no OTPs. Native Face/Touch/Passkeys under the hood.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm">SDK auto-negotiates the best factor per device for maximum conversion.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm">Works with your stack: REST, WebAuthn, OIDC bridges, and webhooks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
