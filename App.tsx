
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-teal-400 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;