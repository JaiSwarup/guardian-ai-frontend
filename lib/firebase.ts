import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


// Securely load Firebase config using environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase (Prevent multiple initializations)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

// Authentication functions wrapped in a "firewall"
export const firewall = {
  db,
  auth,
  signIn: (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password),
  signUp: (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password),
};
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };

export { db, auth ,signInWithEmailAndPassword, createUserWithEmailAndPassword };
