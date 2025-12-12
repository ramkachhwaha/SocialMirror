<div align="center">

<!-- 1. Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=soft&color=4285F4,EA4335,FBBC04,34A853&height=300&section=header&text=Google%20DeepMind%20Hackathon&fontSize=50&fontColor=ffffff&animation=twinkling&fontAlign=50&desc=Project:%20SocialMirror&descAlign=50&descSize=25&descColor=ffffff" alt="Google DeepMind Liquid Banner" />

<br>

<!-- 2. Typing Animation -->
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=25&pause=1000&color=3366CC&center=true&vCenter=true&width=600&lines=Vibe+Check+Your+Posts;Powered+by+Gemini+3+Pro;Simulate+Trolls,+Fans+&+More" alt="Typing SVG" />

<br>

<!-- 3. Action Badges (Updated with Netlify) -->
<a href="https://socialmirrorg.netlify.app/">
  <img src="https://img.shields.io/badge/🔴_Live_Demo-SocialMirror-FF5722?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
</a>
<a href="https://kaggle.com/competitions/gemini-3">
  <img src="https://img.shields.io/badge/Google_DeepMind-Hackathon_2025-4285F4?style=for-the-badge&logo=google&logoColor=white&labelColor=101010" alt="Hackathon Badge" />
</a>
<a href="https://ai.studio/">
  <img src="https://img.shields.io/badge/Powered_by-Gemini_3_Pro-informational?style=for-the-badge&logo=googlegemini&logoColor=white&color=8E44AD" alt="Gemini 3 Pro" />
</a>
<a href="https://ai.studio/apps/drive/112tkWmwFnlYTJk5ICPpRiT0Cl2VBm_jS">
  <img src="https://img.shields.io/badge/View_in-AI_Studio-success?style=for-the-badge&logo=google-cloud&logoColor=white" alt="View App" />
</a>

</div>

---

## 🏆 The Problem & Solution

### 😟 The Problem: Social Anxiety
67% of people draft a post but delete it before publishing due to fear of judgement, trolling, or low engagement. We lack a "safe space" to test our digital presence against reality.

### 💡 The Solution: SocialMirror
**SocialMirror** is a "Flight Simulator" for social media. It allows you to test-drive your content against AI agents simulating 8 different realistic personas (from Trolls to Super Fans) before you post it to the real world.

> **Built with Google Gemini 3 Pro's advanced Multimodality (Vision + Text) & Reasoning.**

---

## 🚀 Live Demo

Check out the live application here:
### [🌐 https://socialmirrorg.netlify.app/](https://socialmirrorg.netlify.app/)

---

## ✨ Key Features

- **📸 Multimodal Analysis:** Upload an image + caption. The AI "sees" visual details (e.g., messy background, lighting, outfits) and "reads" the tone to generate context-aware comments.
- **🎭 8 Unique AI Personas:**
  - *The Troll* (Roasts flaws in the image)
  - *The Super Fan* (Uses ❤️ emojis)
  - *The Intellectual* (Critiques grammar/logic)
  - *The Gen-Z* (Slang heavy: "no cap", "fr")
  - *The Concerned Relative* (Asks personal questions)
- **🌍 Platform Context Switcher:** Switch modes between **Instagram** (Lifestyle), **Twitter/X** (Chaos), **LinkedIn** (Professional), and **Snapchat** (Casual).
- **🗣️ Native Language Support:** If you type in **Hindi/Hinglish**, the AI agents reply in the same language.
- **🧠 AI Coach Dashboard:** Get a "Controversy Risk Score" (0-100) and actionable advice to improve engagement.
- **🌗 Responsive UI:** Glassmorphism design with Dark/Light mode toggling.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS + Framer Motion
- **AI Model:** Google Gemini 3 Pro (via Google GenAI SDK)
- **Deployment:** Netlify

---
## 🚀 Run and Deploy (Locally)

This project contains everything you need to run your app locally.

**View your app in AI Studio:** [Click Here](https://ai.studio/apps/drive/112tkWmwFnlYTJk5ICPpRiT0Cl2VBm_jS)

### Prerequisites
*   [Node.js](https://nodejs.org/) installed on your machine.
*   A Google Gemini API Key.

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR-USERNAME/SocialMirror.git
    cd SocialMirror
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a file named `.env.local` in the root directory and add your key:
    *(Note: The `VITE_` prefix is mandatory for Vite apps)*
    ```env
    VITE_GEMINI_API_KEY=your_actual_api_key_here
    ```

4.  **Run the app:**
    ```bash
    npm run dev
    ```

Open your browser and navigate to `http://localhost:5173` to start vibe coding!

---

## 📂 Project Structure

```bash
SocialMirror/
├── public/              # Static assets (Favicons)
├── src/
│   ├── components/      # React Components (Input, Results, Footer)
│   ├── App.jsx          # Main Application Logic
│   ├── index.css        # Tailwind & Custom Styles
│   └── main.jsx         # Entry Point
├── .env.local           # API Keys (Not pushed to GitHub)
└── README.md            # Documentation

````
---
---

## 🤝 Contributing

This project is a proudly created submission for the **Google DeepMind Vibe Coding Hackathon**.
We welcome contributions! Feel free to **fork** the repository, create **issues**, or drop a **star ⭐** if you liked the vibe.

<br>

<div align="center">
  <!-- Author Name with GitHub Link -->
  <sub>Designed & Developed with ❤️ by <a href="https://github.com/ramkachhwaha"><b>ramkachhwaha</b></a></sub>
  <br>
  <!-- Hackathon Context -->
  <sub><i>This project is a submission for the Google DeepMind Gemini 3 Pro Hackathon.</i></sub>
  <br>
  <!-- Copyright -->
  <sub>© 2025 SocialMirror. All rights reserved.</sub>
</div>

