# 🎓 Sathyabama CGPA Calculator

A sleek, modern **CGPA Calculator** built for **Sathyabama Institute of Science and Technology** students. Add your courses with grades and credits, and get your CGPA calculated instantly — built with vanilla HTML, CSS, and JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---

## ✨ Features

- **Add Courses** — Enter course name, select grade range, and assign credits
- **Real-time CGPA** — Instantly calculates your cumulative GPA as you add courses
- **Delete Courses** — Remove individual courses with smooth animations
- **Clear All** — Reset everything with one click
- **Print Results** — Print your CGPA summary for records
- **Responsive Design** — Works perfectly on mobile, tablet, and desktop
- **Dark Glassmorphism UI** — Premium design with animated backgrounds and micro-interactions
- **Toast Notifications** — Elegant validation messages instead of browser alerts
- **Keyboard Support** — Press Enter to add courses quickly
- **Accessibility** — Respects `prefers-reduced-motion`, focus-visible styles, and ARIA labels

---

## 🎨 Grade System

| Marks Range | Grade | Grade Point |
|-------------|-------|-------------|
| 90 – 100    | O     | 10          |
| 80 – 89     | A+    | 9           |
| 70 – 79     | A     | 8           |
| 60 – 69     | B+    | 7           |
| 50 – 59     | B     | 6           |
| 0 – 49      | F     | 0           |

**CGPA Formula:** `CGPA = Total Grade Points / Total Credits`

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools, frameworks, or dependencies required

### Run Locally

```bash
# Clone the repository
git clone https://github.com/shailesh7705/CGPA-Calculator.git

# Navigate to the project
cd CGPA-Calculator

# Open in browser
# Simply open index.html in your browser, or use a live server:
npx serve .
```

---

## 📁 Project Structure

```
CGPA-Calculator/
├── index.html          # Main application page
├── css/
│   └── styles.css      # Design system & styles
├── js/
│   └── app.js          # Calculator logic
├── README.md           # Documentation
├── .gitignore          # Git ignore rules
└── LICENSE             # MIT License
```

---

## 🌐 Deployment

This is a static site — no build step required. Deploy to any static host:
https://cgpa-calculator-pi-eight.vercel.app/
### GitHub Pages
1. Go to your repo **Settings → Pages**
2. Set source to **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Your site will be live at `https://shailesh7705.github.io/CGPA-Calculator/`

### Netlify
1. Go to [netlify.com](https://netlify.com) → **Add new site → Import existing project**
2. Connect your GitHub repo
3. Build command: _(leave empty)_
4. Publish directory: `.`
5. Click **Deploy**

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup with accessibility attributes
- **CSS3** — Custom properties, Grid, Flexbox, animations, glassmorphism
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Inter typeface for modern typography

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Shailesh Kumar**

- GitHub: [@shailesh7705](https://github.com/shailesh7705)

---

<p align="center">Built with ❤️ for learning and portfolio showcase</p>
