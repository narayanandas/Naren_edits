import { GoogleGenAI, Type } from "@google/genai";
import { ContentIdea } from "../types";

// Initialize Gemini
// Note: The API key must be available in the environment variables.
const apiKey = process.env.API_KEY;
// We pass a fallback string to constructor to prevent immediate crash if env is empty,
// but we check for valid key before making calls.
const ai = new GoogleGenAI({ apiKey: apiKey || 'FALLBACK_KEY' });

export const generateContentIdeas = async (niche: string, platform: string): Promise<ContentIdea[]> => {
  if (!apiKey) {
    console.warn("API Key is missing in process.env.API_KEY. Returning mock data.");
    return [
      { title: "API Key Missing", concept: "Please configure your Gemini API Key in the environment variables.", hook: "System Check" }
    ];
  }

  try {
    const prompt = `Generate 3 viral video content ideas for a creator in the "${niche}" niche focusing on "${platform}".
    Return the response as a JSON array of objects with keys: title, concept, and hook.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              concept: { type: Type.STRING },
              hook: { type: Type.STRING }
            },
            required: ["title", "concept", "hook"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No content generated.");
    }
    
    return JSON.parse(text) as ContentIdea[];

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback for demo purposes if API fails or quota exceeded
    return [
      {
        title: "Day in the Life",
        concept: `Show behind the scenes of a ${niche} professional.`,
        hook: "You won't believe what happens..."
      },
      {
        title: "Top 5 Mistakes",
        concept: `Educational video on common ${niche} errors.`,
        hook: "Stop doing this immediately!"
      },
      {
        title: "Transformation Result",
        concept: "Before and after comparison.",
        hook: "From zero to hero in 30 days."
      }
    ];
  }
};