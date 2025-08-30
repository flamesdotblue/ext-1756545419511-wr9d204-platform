export default function Hero() {
  const coverUrl =
    'https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center';

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverUrl})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-indigo-900/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:py-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-fuchsia-400"></span>
          <span className="text-xs font-medium tracking-wide text-fuchsia-200">
            Blue → Purple • Soft • Digital • Modern
          </span>
        </div>

        <h1 className="text-balance font-extrabold tracking-tight text-white">
          <span className="block text-4xl sm:text-6xl md:text-7xl">Best for Nikita</span>
          <span className="mt-2 block bg-gradient-to-r from-sky-300 via-fuchsia-300 to-violet-300 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl">
            A vibrant, modern space crafted just for you
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-pretty text-base/7 text-slate-200 sm:text-lg/8">
          A fresh blend of tech-forward aesthetics and soft gradients—diagonal, dynamic, and delightfully abstract. Explore features designed to shine for Nikita.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:scale-[1.02] hover:from-indigo-400 hover:to-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          >
            Explore Features
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
