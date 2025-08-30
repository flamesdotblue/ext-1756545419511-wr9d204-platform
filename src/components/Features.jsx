import { Rocket, Star, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Smooth & Modern',
    desc: 'A clean, tech-forward interface with soft gradients and subtle glassmorphism.',
    icon: Sparkles,
    accent: 'from-sky-500 to-fuchsia-500',
  },
  {
    title: 'Performance First',
    desc: 'Optimized transitions and responsive layouts for a seamless experience.',
    icon: Rocket,
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Curated for Nikita',
    desc: 'Thoughtful copy and visuals tailored to your vibe—vibrant, abstract, modern.',
    icon: Star,
    accent: 'from-fuchsia-500 to-violet-500',
  },
  {
    title: 'Privacy & Safety',
    desc: 'Accessible design and mindful choices that keep things safe and friendly.',
    icon: Shield,
    accent: 'from-blue-500 to-indigo-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What makes it the best</h2>
        <p className="mt-3 text-base text-slate-300">
          A focused set of details that highlight what matters—clarity, motion, and delightful polish.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg shadow-black/20 transition hover:translate-y-[-2px] hover:bg-white/[0.06]"
            >
              <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${f.accent} p-3 text-white shadow-lg shadow-indigo-900/30`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
