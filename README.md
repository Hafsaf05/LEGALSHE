<div align="center">

<img src="https://img.shields.io/badge/She%20Builds%20She%20Leads-DevQueens%20Hackathon-purple?style=for-the-badge" />
<img src="https://img.shields.io/badge/Lords%20Engineering%20College-Hyderabad-gold?style=for-the-badge" />

# ⚖️ LegalShe
### *AI-Powered Multilingual Legal Companion for Women in India*

**Built at DevQueens Hackathon · Women-Only · Lords Engineering College, Hyderabad**

</div>

---

## 🔥 The Problem

In India, **millions of women face harassment, workplace abuse, and domestic violence daily** — but most never take legal action. Why?

- They don't know their rights
- Legal language is complex and intimidating  
- Most resources exist only in English
- They don't know where to start or who to call

**LegalShe changes that.**

---

## 💡 What is LegalShe?

LegalShe is a **free, AI-powered legal companion** built specifically for women in India. It helps users understand their legal rights, analyze harassment situations, and generate formal complaint letters — in **Telugu, Hindi, or English** — within seconds.

No lawyers. No fees. No jargon.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🧠 **Legal Analyzer** | Describe your situation → get severity assessment, applicable BNS 2023 laws, and action steps |
| ⚡ **Is This Legal? Checker** | Quick yes/no verdict on any situation with plain-language explanation |
| 📄 **Complaint Letter Generator** | Auto-generates formal complaint letters citing correct BNS 2023 sections |
| 🛡️ **Online Harassment Shield** | Upload screenshots of harassment with blur/annotation tools |
| 📞 **Find Help** | Hardcoded verified helplines for Hyderabad (no AI hallucination risk) |
| 🔒 **Safe Mode** | Zero data storage — nothing is saved or logged |

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS (dark glassmorphism theme) |
| Animations | Framer Motion |
| AI Backend | Groq API — `llama-3.1-8b-instant` |
| PDF Generation | jsPDF |
| Voice Input | Web Speech API (multilingual) |
| Deployment | Vercel |

---

## ⚖️ Legal Accuracy — Why BNS 2023?

India replaced the Indian Penal Code (IPC) with the **Bharatiya Nyaya Sanhita (BNS) 2023**, effective July 2024. Most legal tech tools still reference outdated IPC sections. LegalShe explicitly uses **BNS 2023** throughout — making it legally current and credible.

All AI outputs include:
- Confidence disclaimers
- "Verify with a licensed advocate" notices  
- BNS Section 182 declaration checkboxes on complaint letters

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Free Groq API key from [console.groq.com](https://console.groq.com/keys) (no credit card needed)

### Installation
```bash
# Clone the repo
git clone https://github.com/Haseeba-f/legalshe.git
cd legalshe/LegalSheReact

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Add your Groq API key to .env:
# VITE_GROQ_API_KEY=gsk_your_key_here

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🌍 Multilingual Support

LegalShe detects and responds in the user's language automatically:

- 🇮🇳 **Telugu** — Primary target language for Hyderabad users
- 🇮🇳 **Hindi** — National reach
- 🇬🇧 **English** — Default fallback

Voice input via Web Speech API supports all three languages.

---

## 🛡️ Privacy & Safety Design

- **Safe Mode**: Zero data retention — no conversations stored
- **No user accounts required**
- **Hardcoded helplines** — critical numbers are never AI-generated
- **Crisis prioritization** — severe cases surface emergency contacts immediately
- **API key never exposed** — loaded via Vite env variables only

---

## 📁 Project Structure
```
LegalSheReact/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx         # Landing page
│   │   ├── LegalAnalyzer.jsx       # AI situation analysis
│   │   ├── QuickChecker.jsx        # Is This Legal? tool
│   │   ├── ComplaintGenerator.jsx  # PDF complaint letters
│   │   ├── HarassmentShield.jsx    # Screenshot tool
│   │   └── FindHelp.jsx            # Verified helplines
│   ├── hooks/
│   │   └── useGroqAPI.js           # Groq API integration
│   └── utils/
│       ├── systemPrompts.js        # Optimized AI prompts
│       └── helplines.js            # Hardcoded verified numbers
```

---

## 🏆 Built For

**DevQueens Hackathon** — *She Builds She Leads*  
Lords Engineering College, Hyderabad  
Theme: Women in Technology & Social Impact

---

## ⚠️ Disclaimer

LegalShe provides **legal information, not legal advice**. All AI-generated content should be verified with a licensed advocate before taking action. Helpline numbers are verified for Hyderabad, Telangana.

---

<div align="center">
Built with 💜 by Haseeba · DevQueens 2025
</div>
