// src/components/Pages/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// ✅ Only one firebaseConfig block
const firebaseConfig = {
  apiKey: "AIzaSyAUk47uErmifvj5v3xcbn9a0ovwaL7zrVQ",
  authDomain: "royal-india-trails.firebaseapp.com",
  projectId: "royal-india-trails",
  storageBucket: "royal-india-trails.firebasestorage.app",
  messagingSenderId: "562973523044",
  appId: "1:562973523044:web:0ecb350aafb01c3210f371",
  measurementId: "G-NFHPJSCJVH"
};

// ✅ Initialize once
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Setup auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export all needed
export { auth, provider, signInWithPopup };
