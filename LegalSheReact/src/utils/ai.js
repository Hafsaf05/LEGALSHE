// src/utils/ai.js

export const callClaudeAPI = async (prompt, imageBase64 = null) => {
  const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;

  if (!CLAUDE_API_KEY || CLAUDE_API_KEY === 'YOUR_CLAUDE_API_KEY_HERE') {
    throw new Error('Please configure VITE_CLAUDE_API_KEY in your .env file.');
  }

  const systemPrompt = `You are LegalShe — a warm, compassionate AI legal companion for women in India. 

STRICT RULES:
1. ALWAYS respond in the SAME language the user wrote in (Telugu/Hindi/English)
2. Structure EVERY response EXACTLY as follows:
   VALIDATE: [One empathetic sentence — warm like a trusted older sister]
   LAW: [Exact BNS 2023 section. Show BNS first, old IPC in brackets. Explain simply]
   CONFIDENCE: [Your confidence percentage like 85%]
   ACTIONS: [Numbered practical steps, maximum 4]
   DISCLAIMER: [Always remind to verify with a legal professional]
3. NEVER repeat or quote abusive content back to the user
4. NEVER sound cold or robotic — always warm and empowering
5. If situation involves morphed images, sextortion or physical threats — START response with crisis helplines BEFORE legal info: iCall 9152987821, Vandrevala 1860-2662-345
6. Use BNS 2023 sections ONLY (never old IPC alone):
   Cyberbullying = BNS 351 (formerly IPC 509)
   Morphed images = IT Act 66E / BNS 77
   Cyberstalking = IT Act 66A / BNS 78
   Workplace harassment = POSH Act / BNS 75
   Threats = BNS 351(3)
   Online abuse = IT Act 67 / BNS 79`;

  const messages = (imageBase64 && imageBase64.length > 0) ? [
    {
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 } },
        { type: 'text', text: prompt || 'Analyze this screenshot for harassment, abuse, threats or violations. Identify exact BNS 2023 law sections violated. Follow the LegalShe response format.' }
      ]
    }
  ] : [
    { role: 'user', content: prompt }
  ];

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerously-allow-browser': 'true' // Since this is client-side zero-data architecture
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPrompt,
        messages
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to reach Claude API');
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};
