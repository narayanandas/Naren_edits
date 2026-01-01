import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const ContactFooter: React.FC = () => {
  const contactEmail = "narensedit@gmail.com"; 
  // Direct link to Gmail compose window
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;
  const instagramLink = "https://www.instagram.com/narens_edit/";
  const whatsappLink = "https://wa.me/918870441141";

  return (
    <>
      {/* Green CTA Section */}
      <section id="contact" className="bg-teal-400 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4">
            Ready to Upgrade Your Content?
          </h2>
          <p className="text-teal-900 font-medium mb-8 max-w-xl mx-auto text-lg">
            Let Narens Edits handle the edits while you focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4">
            <a 
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 text-white font-bold py-4 px-8 rounded-full hover:bg-slate-800 transition-transform transform hover:scale-105 shadow-xl w-full sm:w-auto flex items-center justify-center cursor-pointer"
            >
              Get Started
            </a>
            <a 
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-slate-950 text-slate-950 font-bold py-4 px-8 rounded-full hover:bg-slate-950 hover:text-white transition-colors w-full sm:w-auto flex items-center justify-center cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-slate-500 text-center md:text-left">
            <p>© 2025 Narens Edits. All Rights Reserved.</p>
            <p className="mt-1 text-xs text-slate-600">Designed for creators.</p>
          </div>
          
          <div className="flex gap-4">
             {/* Instagram */}
             <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 border border-slate-800 hover:border-pink-500 group">
               <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
             </a>
             
             {/* WhatsApp */}
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 border border-slate-800 hover:border-green-400 group">
               {/* WhatsApp SVG Logo */}
               <svg 
                 viewBox="0 0 24 24" 
                 fill="currentColor" 
                 className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
               >
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
               </svg>
             </a>
             
             {/* Email */}
             <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 border border-slate-800 hover:border-blue-500 group">
               <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
             </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;