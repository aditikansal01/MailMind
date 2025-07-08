# 📬 MailMind — Smart Gmail Summarizer

**MailMind** is a privacy-first Gmail summarizer that helps you intelligently manage your inbox. It connects with your Gmail account, fetches recent emails, and presents them with beautiful, clean insights — all in your browser. No setup. No servers. No data stored.

> ⚡ Built for quick access, smart email management, and peace of mind.

## 📋 Table of Contents
- [📸 Screenshots](#-app-screenshots)
- [🧠 Features](#-what-mailmind-does-for-you)
- [🔧 Tech Stack](#-tech-stack)
- [⚙️ Quick Start](#️-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔐 OAuth Setup](#-oauth-setup)
- [🚨 Troubleshooting](#-troubleshooting)
- [🌟 Highlights](#-highlights)

---

## 📸 App Screenshots

### 🎯 **1. Landing Page Overview**
![Landing Page - Top Section](./screenshots/1)hero-dashboard-top.png)
*Clean welcome interface with modern gradient design and Gmail connection prompt*

![Landing Page - Complete View](./screenshots/2)hero-dashboard-full.png)  
*Full landing page showing all features, benefits, and call-to-action*

### 🔐 **2. Authentication Flow**
![Google OAuth Integration](./screenshots/3)google-oauth.png)
*Secure Google OAuth 2.0 authentication with proper Gmail API scopes*

### ✅ **3. Connection Success**
![Successfully Connected](./screenshots/4)user-connected.png)
*Post-authentication confirmation with user profile and ready state*

### 📧 **4. Email Dashboard**
![Email Insights - Top Section](./screenshots/5)email-insights-top.png)
*Beautiful email analytics dashboard with smart categorization (upper view)*

![Email Insights - Complete Dashboard](./screenshots/6)email-insights-full.png)
*Full email management interface with all insights and features visible*

---

## 🧠 What MailMind Does for You

* 📊 **Smart Analytics** – Get patterns about your inbox, response time & frequency
* 🎯 **Priority Detection** – Highlights important or time-sensitive emails
* 🔐 **Privacy First** – Your data stays on your device; nothing is ever stored
* 📥 **Latest Emails Feed** – See your recent messages in a clean, elegant UI
* 🌈 **Modern UI** – Gradient styling, smooth animations & mobile responsiveness

---

## 🔧 Tech Stack

### 💻 **Frontend**
* **HTML5** – Semantic, accessible structure
* **CSS3** – Custom gradients, Flexbox, Grid, transitions & responsive layouts
* **Vanilla JavaScript (ES6+)** – Async/await logic, DOM manipulation, no frameworks

### 🔐 **Authentication & APIs**
* **Google OAuth 2.0** – Secure authentication with Google Identity Services
* **Gmail API v1** – Real-time email fetching and metadata parsing
* **Firebase Authentication** – Alternative auth implementation (optional)

### 🛠️ **Development & Deployment**
* **VS Code Live Server** – Local development environment
* **Python HTTP Server** – Alternative local hosting
* **Firebase Hosting** – Optional cloud deployment platform
* **Git** – Version control

### 📦 **Available Implementations**
* **Pure Client-Side** – Main working solution (no backend)
* **Firebase Integration** – Alternative version with Firebase services
* **CDN Version** – Standalone with external libraries

> **Note**: The main application is **100% client-side** with no backend services. Firebase integration is available as an alternative implementation.

---

## ⚙️ Quick Start

### 🚀 **Option 1: VS Code Live Server (Recommended)**

1. **Clone the repository:**
```bash
git clone https://github.com/aditikansal01/mailmind.git
cd mailmind
```

2. **Open in VS Code:**
```bash
code .
```

3. **Start Live Server:**
   - Right-click on `public/working-solution.html`
   - Select "Open with Live Server"
   - App opens at `http://localhost:8080`

### 🐍 **Option 2: Python Server**

```bash
# Navigate to public folder
cd public

# Start server on port 8080 (required for OAuth)
python -m http.server 8080

# Open in browser
# http://localhost:8080/working-solution.html
```

### 📦 **Option 3: npm Script**

```bash
cd mailmind
npm install
npm run dev
```

> ⚠️ **Important**: Use port **8080** for OAuth to work properly. See [OAuth troubleshooting](OAUTH-PORT-FIX.md) if you get "Access Blocked" errors.

---

## 📁 Project Structure

```
MailMind/
├── 📁 public/                           # Main application
│   ├── ⭐ working-solution.html         # Main app file
│   ├── 💾 working-solution-backup.html  # Backup copy
│   ├── 🔥 mailmind-firebase-version.html # Alternative versions
│   ├── 🌐 mailmind-cdn-version.html     # CDN version
│   ├── 🎨 mailmind-*.html              # Other variants
│   ├── 🎨 styles.css                   # Additional styling
│   └── 📁 src/                         # Modular components
├── 📁 mailmind/                        # npm development tools
│   ├── package.json                    # Dependencies
│   └── node_modules/                   # npm packages
├── 📁 screenshots/                     # App screenshots
├── 📁 .vscode/                         # VS Code configuration
├── 📖 README.md                        # This file
├── 🔧 OAUTH-PORT-FIX.md               # OAuth troubleshooting
├── 🎨 styles.css                      # Legacy styling
├── 🚫 .gitignore                      # Git ignore rules
```

---

## 🔐 OAuth Setup

**For most users**: No setup needed! The app uses pre-configured OAuth credentials.

**For developers/customization**:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Gmail API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:8080` to authorized URLs
6. Replace `CLIENT_ID` in `working-solution.html`

**Required scope:**
```
https://www.googleapis.com/auth/gmail.readonly
```

---

## 🚨 Troubleshooting

### **"Access Blocked" Error**
- **Cause**: Running on wrong port (Live Server uses 5500 by default)
- **Solution**: Use port 8080 or see [OAUTH-PORT-FIX.md](OAUTH-PORT-FIX.md)

### **VS Code Live Server Port Issue**
1. Go to VS Code Settings (`Ctrl + ,`)
2. Search "live server port"
3. Change from `5500` to `8080`
4. Restart Live Server

### **Emails Not Loading**
- Check browser console for errors
- Ensure you're logged into the correct Google account
- Try refreshing the OAuth token

**For more help**: See [OAUTH-PORT-FIX.md](OAUTH-PORT-FIX.md)

---

## 🌟 Highlights

* 🔒 **100% Client-Side** – No servers, no data storage, complete privacy
* 📧 **Real Gmail Integration** – Actual Gmail API, not demo data
* 🎨 **Modern UI/UX** – Beautiful gradients, smooth animations, responsive design
* ⚡ **Fast & Lightweight** – Pure JavaScript, no framework bloat
* 🔐 **Secure OAuth** – Google-standard authentication flow
* 📱 **Cross-Platform** – Works on desktop, tablet, and mobile
* 🛠️ **Developer Friendly** – Clean code, easy to customize

---

## 📄 License

MIT License — Free to use, modify, and build upon (with proper credit).

---

## 🤝 Credits

Created with ❤️ by **Aditi Kansal**  
GitHub: [@aditikansal01](https://github.com/aditikansal01)

> ✨ MailMind makes your inbox calm, private, and smart — just how it should be.
