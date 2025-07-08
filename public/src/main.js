import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configure provider to request Gmail scope
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/gmail.readonly");

// Function to fetch Gmail messages
async function fetchGmailMessages(accessToken) {
  try {
    console.log("🔑 Access Token:", accessToken);
    
    // Fetch the latest 5 email message IDs
    const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=5", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Gmail API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("📧 Gmail Messages Response:", data);

    if (data.messages && data.messages.length > 0) {
      console.log("📬 Latest 5 Email Message IDs:");
      data.messages.forEach((message, index) => {
        console.log(`${index + 1}. Message ID: ${message.id}`);
      });
      
      alert(`✅ Successfully fetched ${data.messages.length} latest email message IDs. Check console for details.`);
      
      // Optionally fetch detailed info for the first message
      await fetchMessageDetails(accessToken, data.messages[0].id);
    } else {
      console.log("📭 No messages found");
      alert("No messages found in your Gmail inbox.");
    }
  } catch (error) {
    console.error("❌ Gmail fetch error:", error);
    alert(`Error fetching Gmail messages: ${error.message}`);
  }
}

// Function to fetch detailed message info (optional)
async function fetchMessageDetails(accessToken, messageId) {
  try {
    const response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const messageData = await response.json();
      console.log("📄 Sample Message Details:", {
        id: messageData.id,
        snippet: messageData.snippet,
        subject: messageData.payload?.headers?.find(h => h.name === "Subject")?.value || "No subject",
        from: messageData.payload?.headers?.find(h => h.name === "From")?.value || "Unknown sender"
      });
    }
  } catch (error) {
    console.error("Error fetching message details:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      try {
        console.log("🚀 Starting Google Sign-In with Gmail scope...");
        
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log("👤 User:", {
          name: user.displayName,
          email: user.email,
          uid: user.uid
        });

        alert(`Welcome, ${user.displayName}! 🎉`);

        // Check if we have access token
        if (token) {
          console.log("✅ Access token received, fetching Gmail messages...");
          await fetchGmailMessages(token);
        } else {
          console.error("❌ No access token received");
          alert("No access token received. Please try again.");
        }
      } catch (error) {
        console.error("❌ Login error:", error);
        alert(`Login failed: ${error.message}`);
      }
    });
  } else {
    console.error("Login button not found!");
  }
});

