import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Zap, TrendingUp, Cpu } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  { id: 1, value: '300+', label: 'Videos Edited', fullWidth: true },
  { id: 2, value: '100+', label: 'Happy Clients', fullWidth: false },
  { id: 3, value: '48 Hrs', label: 'Fast Delivery', fullWidth: false },
  { id: 4, value: '100%', label: 'Satisfaction', fullWidth: true },
];

const features = [
  { icon: CheckCircle2, text: "Social-media-first editing" },
  { icon: Zap, text: "Fast delivery" },
  { icon: TrendingUp, text: "Trend-aware edits" },
  { icon: Cpu, text: "AI-powered creativity" },
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse value to separate number and suffix (e.g., "300+" -> 300 and "+")
  const numericValue = parseInt(value);
  // Extract non-numeric characters to append later (e.g. "+", " Hrs", "%")
  const suffix = value.replace(numericValue.toString(), '');
  const duration = 2000; // 2 seconds animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function (easeOutCubic) for smoother effect
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeProgress * numericValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericValue); // Ensure we land exactly on the target
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 } // Start animation when 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
};

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Brands Choose <br />
              Narens Edits
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              We don't just edit videos — we build content that performs. Every frame is designed to convert viewers into followers.
            </p>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                   <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 group-hover:border-teal-500/50 transition-colors">
                     <item.icon className="w-5 h-5 text-teal-400" />
                   </div>
                   <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className={`bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-1 ${stat.fullWidth ? 'col-span-2' : 'col-span-1'}`}
              >
                <span className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;