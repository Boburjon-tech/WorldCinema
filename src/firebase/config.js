
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArbULZNfxqH9Ys477iKezmpQoMz3kqW3I",
  authDomain: "worldcinema-78374.firebaseapp.com",
  projectId: "worldcinema-78374",
  storageBucket: "worldcinema-78374.firebasestorage.app",
  messagingSenderId: "1097709854082",
  appId: "1:1097709854082:web:51a221845b53e0d377439b",
  measurementId: "G-2NCC2ZYVLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };    