<div align="center">

<img src="https://img.shields.io/badge/WeatherGlimpse-v1.0.0-00C9FF?style=for-the-badge&labelColor=0a0a0a" />

# 🌤 WeatherGlimpse

### *What's the sky doing out there?*

Search any city worldwide for a real-time weather snapshot.

<br/>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20App-00C9FF?style=for-the-badge&labelColor=111)](https://react-weather-glimpse-bysl.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-white?style=for-the-badge&logo=github&labelColor=111)](https://github.com/Shivanshu-GITH/react-weather-glimpse)
[![Deploy Status](https://img.shields.io/badge/Vercel-Deployed-00C9FF?style=for-the-badge&logo=vercel&labelColor=111)](https://react-weather-glimpse-bysl.vercel.app)

<br/>

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=61DAFB&labelColor=0a0a0a)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=646CFF&labelColor=0a0a0a)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=flat-square&logo=javascript&logoColor=F7DF1E&labelColor=0a0a0a)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-ffffff?style=flat-square&logo=vercel&logoColor=white&labelColor=0a0a0a)

</div>

---

## 📌 Overview

**WeatherGlimpse** is a fast, minimal weather application built with React + Vite. Enter any city name and get an instant real-time weather snapshot — temperature, conditions, and more — powered by a live weather API.

Designed with a dark, modern aesthetic and deployed on Vercel for production-level performance.

---

## ✨ Features

- 🔍 **Global City Search** — Search any city in the world by name
- ⚡ **Real-time Data** — Live weather conditions fetched on demand
- 🎨 **Dark UI** — Sleek, modern dark-themed interface
- 📱 **Responsive** — Fully functional on desktop and mobile
- ⚠️ **Error Handling** — Informative messages for invalid queries or API issues
- 🚀 **Vite-Powered** — Lightning-fast dev server and optimized production build

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 |
| **Build Tool** | Vite 5 |
| **Linting** | ESLint |
| **Weather Data** | Weather API (OpenWeatherMap / WeatherAPI.com) |
| **Hosting** | Vercel |

---

## 📁 Project Structure

```
react-weather-glimpse/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable React components
│   ├── App.jsx              # Root application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── .gitignore
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies & scripts
├── package-lock.json
└── vite.config.js           # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- A valid **Weather API key** (see [Getting an API Key](#-getting-an-api-key))

### 1. Clone the Repository

```bash
git clone https://github.com/Shivanshu-GITH/react-weather-glimpse.git
cd react-weather-glimpse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the **project root**:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ **Critical:** This project uses **Vite**. Environment variables **must** be prefixed with `VITE_` to be exposed to the browser. Variables using `REACT_APP_` will be ignored.

In your code, access the key as:

```js
import.meta.env.VITE_WEATHER_API_KEY
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🔑 Getting an API Key

1. Sign up at your chosen weather provider (e.g., [OpenWeatherMap](https://openweathermap.org/api) or [WeatherAPI.com](https://www.weatherapi.com/))
2. **Confirm your email** — keys are inactive until email is verified
3. Navigate to your dashboard → **API Keys**
4. Copy the key and paste it into your `.env` file

> 💡 Newly generated keys can take a few minutes to activate after email confirmation.

---

## ☁️ Deployment on Vercel

This project is live at: **[react-weather-glimpse-bysl.vercel.app](https://react-weather-glimpse-bysl.vercel.app)**

### Deploy Your Own Instance

**Step 1** — Push your code to GitHub

**Step 2** — Import the project at [vercel.com/new](https://vercel.com/new)

**Step 3** — Add the environment variable in Vercel:

Go to **Project → Settings → Environment Variables**

```
Name:   VITE_WEATHER_API_KEY
Value:  your_api_key_here
```

> ⚠️ Always use `VITE_` prefix — not `REACT_APP_`. Vercel does not automatically add any prefix.

**Step 4** — Click **Redeploy** from the Deployments tab for env changes to take effect

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🐛 Troubleshooting

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| City "not found" on deployed app | Missing/incorrect env variable | Add `VITE_WEATHER_API_KEY` in Vercel settings and redeploy |
| API key not working | Email not confirmed | Confirm your email with the API provider |
| Works locally, fails on Vercel | Env var not set in Vercel | Add the variable in Project → Settings → Environment Variables |
| `undefined` API key in code | Using `process.env` instead of `import.meta.env` | Change to `import.meta.env.VITE_WEATHER_API_KEY` |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "feat: add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built by [Shivanshu Tiwari](https://github.com/Shivanshu-GITH)**

[![GitHub followers](https://img.shields.io/github/followers/Shivanshu-GITH?style=social)](https://github.com/Shivanshu-GITH)

*If you found this project helpful, consider giving it a ⭐ on GitHub!*

</div>
