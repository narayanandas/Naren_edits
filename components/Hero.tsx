import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import unnamed from '../assets/unnamed.png';
const Hero: React.FC = () => {
  return (
    <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden"
        >

      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
         <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl opacity-60"></div>
         <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
             <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs sm:text-sm font-medium mb-6 animate-fade-in-up">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Premium Editing Services
             </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              We Edit. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                You Grow Online.
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              High-quality reels, thumbnails, posters and creative edits crafted to boost your brand visibility across social media platforms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.3)]"
              >
                Get Your Edit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-full text-white bg-slate-900/50 hover:bg-slate-800 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative flex justify-center lg:block">
             <div className="relative w-64 h-72 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group bg-slate-900">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img
                  src={unnamed}
                  alt="Naren - Video Editor"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_10%] transition-transform duration-700 group-hover:scale-105"
/>

                
                {/* Overlay details */}
                <div className="absolute inset-0 border-[6px] border-teal-400/30 rounded-2xl pointer-events-none"></div>
                <div className="absolute bottom-4 right-4">
                    <Sparkles className="w-6 h-6 text-teal-400 animate-pulse" />
                </div>
             </div>

             {/* Floating Elements */}
             <div className="absolute -top-6 -right-6 lg:right-0 bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-xl hidden sm:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                   <span className="font-semibold text-sm">Recording...</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;