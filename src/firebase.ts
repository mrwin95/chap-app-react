// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVlBJ3X1QYh3q0KDS9OhQQNJlOBdk4lAQ",
  authDomain: "chat-app-b3d04.firebaseapp.com",
  projectId: "chat-app-b3d04",
  storageBucket: "chat-app-b3d04.appspot.com",
  messagingSenderId: "922058015100",
  appId: "1:922058015100:web:888eda61636668c34fa4f9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);
