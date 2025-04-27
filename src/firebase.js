import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi6wv41qoGfgdLYvaQg8unfW0O9HmFpU0",
  authDomain: "kevaat-2d31b.firebaseapp.com",
  projectId: "kevaat-2d31b",
  storageBucket: "kevaat-2d31b.firebasestorage.app",
  messagingSenderId: "548456451162",
  appId: "1:548456451162:web:1509809ed9838cfb311c63"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };