export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/60 via-slate-950/40 to-fuchsia-950/50 p-1">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_80%_-10%,rgba(168,85,247,0.15),transparent),radial-gradient(800px_300px_at_10%_120%,rgba(56,189,248,0.12),transparent)]" />

        <div className="relative grid grid-cols-1 items-center gap-8 rounded-[calc(theme(borderRadius.3xl)-4px)] p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Crafted with a diagonal, vibrant flow</h2>
            <p className="mt-3 text-slate-300">
              This page embraces a blue-to-purple, mottled gradient aesthetic—abstract yet balanced. It’s digital and modern, with soft edges and thoughtful spacing that keep things airy and calm.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>• Gradient-rich visuals with subtle texture</li>
              <li>• Responsive, accessible, and fast</li>
              <li>• Friendly micro-interactions that feel alive</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#features"
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                See the details
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:from-sky-400 hover:to-fuchsia-400"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <div className="h-full w-full bg-[conic-gradient(at_30%_20%,rgba(99,102,241,0.25),rgba(217,70,239,0.25),rgba(14,165,233,0.25),rgba(99,102,241,0.25))]" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
