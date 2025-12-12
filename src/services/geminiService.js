import { GoogleGenAI } from "@google/genai";

const PERSONA_TYPES = [
  "The Troll",
  "The Super Fan",
  "The Intellectual",
  "The Gen-Z",
  "The Bot",
  "The Concerned Relative",
  "The Skeptic",
  "The Comedian"
];

export const simulateReactions = async (imageBase64, caption, platform) => {
  // We use process.env.API_KEY as per instructions
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-2.5-flash";

  const promptText = `
    Roleplay as a sophisticated social media simulator. 
    Platform Context: ${platform}
    User Caption: "${caption || ''}"
    
    TASKS:
    1. **Language Detection (CRITICAL):** Detect the language of the User Caption. ALL generated comments, analysis, and tips MUST be in that SAME language.
    2. **Generate 8 Personas:** Create a comment for each: ${PERSONA_TYPES.join(", ")}.
       - Handles must be realistic (e.g., @sarah_explores, not User1).
       - Tone must match the persona and the chosen platform.
    3. **Analyze Risk:** Give a controversy score (0-100).
    4. **Coach Advice:** Provide a specific tip to improve the post.

    OUTPUT JSON FORMAT:
    {
      "riskScore": number,
      "analysis": "string (brief explanation)",
      "proTip": "string (actionable advice)",
      "comments": [
        {
          "persona": "string (e.g., The Troll)",
          "handle": "string",
          "text": "string (the comment)",
          "suggestedReply": "string (witty reply for the user)"
        }
      ]
    }
  `;

  const parts = [{ text: promptText }];

  if (imageBase64) {
    const mimeMatch = imageBase64.match(/^data:(image\/[a-zA-Z+]+);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/png";
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, "");

    parts.push({
      inlineData: {
        mimeType: mimeType,
        data: cleanBase64
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: { parts },
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};