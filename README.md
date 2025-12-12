<div align="center">

<!-- 1. Main Project Banner (Top) -->
<img src="https://capsule-render.vercel.app/api?type=soft&color=4285F4,EA4335,FBBC04,34A853&height=300&section=header&text=Google%20DeepMind%20Hackathon&fontSize=50&fontColor=ffffff&animation=twinkling&fontAlign=50&desc=Project:%20SocialMirror&descAlign=50&descSize=25&descColor=ffffff" alt="Google DeepMind Liquid Banner" />

<br>

<!-- 2. Typing Animation (Sub-header) -->
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=25&pause=1000&color=3366CC&center=true&vCenter=true&width=600&lines=Vibe+Check+Your+Posts;Powered+by+Gemini+3+Pro;Simulate+Trolls,+Fans+&+More" alt="Typing SVG" />

<br>

<!-- 3. Action Badges -->
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

## 🏆 About The Project & Hackathon

**Built for the Google DeepMind "Vibe Code" Hackathon.**

This project was created to solve a very human problem: **Social Media Anxiety**. Millions of users draft posts but delete them out of fear of judgement. 

We used **Gemini 3 Pro's** advanced reasoning and multimodality to create a "Social Flight Simulator."
*   **Why Gemini 3?** We needed a model that could "see" an image (Vision), "read" the caption (Text), and "act" like 8 different human personalities simultaneously (Reasoning).
*   **The Vibe Code:** This entire application was built using Google AI Studio's vibe coding capabilities, turning natural language prompts into a complex, responsive web application.

---

## 💡 What is SocialMirror?

**SocialMirror** allows you to test-drive your content against AI agents simulating 8 different realistic personas before you post it to the real world.

### ✨ Key Features
*   **📸 Multimodal Analysis:** Analyzes your uploaded image + caption together.
*   **🎭 8 Unique Personas:** From *The Troll* (who roasts your background) to *The Super Fan* (who loves everything).
*   **🌍 Platform Context:** Switch between **Instagram**, **Twitter/X**, **LinkedIn**, and **Snapchat** modes.
*   **🗣️ Native Language Support:** Speaks your language (Hindi, English, Hinglish, etc.).
*   **🧠 AI Coach:** Provides a "Risk Score" and suggests improvements.
*   **🌗 Day/Night Mode:** Fully responsive UI with theme toggling.

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

<div align="center"> <sub>Designed & Developed with ❤️ by <b>ramkachhwaha</b></sub> <br> <sub><i>This project is a submission for the Google DeepMind Gemini 3 Pro Hackathon.</i></sub> </div> 
