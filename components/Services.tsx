import React from 'react';
import { Film, Image as ImageIcon, Layout } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Reels & Shorts Editing',
    description: 'High-retention Instagram reels and YouTube shorts designed to keep viewers watching.',
    icon: Film,
  },
  {
    id: 2,
    title: 'Thumbnail Design',
    description: 'Eye-catching thumbnails that boost click-through rate and attract new audiences.',
    icon: ImageIcon,
  },
  {
    id: 3,
    title: 'Poster & Banner Design',
    description: 'Clean, modern posters for brands and creators that communicate your message effectively.',
    icon: Layout,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What We Edit Best</h2>
          <p className="text-slate-400 text-lg">
            Powerful edits designed to grab attention, increase engagement, and grow your social media presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-900/50 border border-slate-800 p-6 sm:p-8 rounded-2xl hover:bg-slate-800/80 hover:border-teal-500/30 transition-all duration-300 group cursor-pointer h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-teal-500/50">
                {service.icon && <service.icon className="w-6 h-6 text-teal-400" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;