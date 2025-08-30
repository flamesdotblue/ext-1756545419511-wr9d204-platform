export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Best for Nikita. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-300 hover:text-white">Privacy</a>
          <span className="text-slate-600">•</span>
          <a href="#" className="text-slate-300 hover:text-white">Terms</a>
          <span className="text-slate-600">•</span>
          <a href="#" className="text-slate-300 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
