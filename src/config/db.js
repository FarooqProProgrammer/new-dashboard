// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAsNmeaciWfEbyDz9XcRLyw7L9PgaiVZGc",
  authDomain: "woven-space-356802.firebaseapp.com",
  projectId: "woven-space-356802",
  storageBucket: "woven-space-356802.appspot.com",
  messagingSenderId: "768236697889",
  appId: "1:768236697889:web:bae81b3a8680d37e1a6660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

