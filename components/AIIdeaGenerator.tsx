import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { generateContent } from '../services/geminiService';
import { ContentIdea } from '../types';

const AIIdeaGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [platform, setPlatform] = useState('Instagram Reels');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState<ContentIdea[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;

    setLoading(true);
    setIdeas([]);

    try {
      // Ask Gemini clearly for structured ideas
      const prompt = `
        Generate 3 viral ${platform} content ideas for the niche: ${niche}.
        Return the result as a JSON array with:
        title, concept, and hook.
      `;

      const [response] = await Promise.all([
        generateContent(prompt),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);

      // Gemini response parsing (safe)
      const text =
        response?.candidates?.[0]?.content?.parts?.[0]?.text ?? '[]';

      const parsedIdeas: ContentIdea[] = JSON.parse(text);

      setIdeas(parsedIdeas);
    } catch (error) {
      console.error('Failed to generate ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold mb-6 tracking-wide uppercase">
          <Sparkles className="w-3 h-3 mr-2" />
          AI-Powered Bonus
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">
          Content Strategy Generator
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Stuck on ideas? Let our AI suggest viral concepts for your next edit.
        </p>

        <form
          onSubmit={handleGenerate}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-12"
        >
          <input
            type="text"
            placeholder="Enter your niche (e.g., Fitness, Gaming)"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:outline-none placeholder-slate-600"
            required
          />

          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="bg-slate-950 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 focus:outline-none"
          >
            <option>Instagram Reels</option>
            <option>YouTube Shorts</option>
            <option>TikTok</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center min-w-[140px]"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              'Generate Ideas'
            )}
          </button>
        </form>

        {ideas.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3 text-left">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors"
              >
                <div className="w-8 h-8 bg-teal-900/30 text-teal-400 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {idea.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  {idea.concept}
                </p>
                <div className="text-xs bg-slate-900 p-3 rounded border border-slate-800 text-teal-300">
                  <span className="font-bold text-slate-500 uppercase block mb-1">
                    Hook:
                  </span>
                  "{idea.hook}"
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIIdeaGenerator;
