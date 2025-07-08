# 🔧 OAuth Port Configuration Issue - Solution

## 🚨 **Problem:**
MailMind shows "Access Blocked" when opened on ports other than `localhost:8080` because Google OAuth is configured for specific URLs.

## ✅ **Solutions:**

### **Method 1: Use the Correct Port (Recommended)**
Run the app on `localhost:8080` which is already authorized:

```bash
# Navigate to public folder
cd "c:\Users\ASUS\Documents\MailMind\public"

# Start server on port 8080
python -m http.server 8080

# Open in browser
# http://localhost:8080/working-solution.html
```

### **Method 2: VS Code Live Server Port Configuration**
Configure VS Code Live Server to use port 8080:

1. Open VS Code Settings (`Ctrl + ,`)
2. Search for "live server"
3. Find "Live Server > Settings: Port" 
4. Change from `5500` to `8080`
5. Restart Live Server

### **Method 3: Package.json Script (Easiest)**
Use the pre-configured script in the `mailmind` folder:

```bash
# Navigate to mailmind folder
cd "c:\Users\ASUS\Documents\MailMind\mailmind"

# Run the dev script (configured for port 8080)
npm run dev
```

## 🔍 **Why This Happens:**
Google OAuth requires **authorized redirect URIs** to be configured in Google Cloud Console. Currently authorized:
- `http://localhost:8080`
- `https://localhost:8080` 

**Not authorized** (causes "Access Blocked"):
- `http://localhost:5500` (VS Code Live Server default)
- `http://localhost:8000` (Python server default)
- `http://localhost:3000` (Node.js default)

## 🛠️ **For Developers: Add More Ports**
To add more authorized ports in Google Cloud Console:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Go to APIs & Services → Credentials
4. Click on your OAuth 2.0 Client ID
5. Add to "Authorized redirect URIs":
   - `http://localhost:5500`
   - `http://localhost:8000`
   - `http://localhost:3000`
6. Save changes

## 💡 **Quick Fix Command:**
```bash
# One-line command to start on correct port
cd "c:\Users\ASUS\Documents\MailMind\public" && python -m http.server 8080
```

**Then open:** `http://localhost:8080/working-solution.html`

---

**✅ This will solve the "Access Blocked" error and allow Gmail authentication to work properly!**
