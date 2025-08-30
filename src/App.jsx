import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
}
