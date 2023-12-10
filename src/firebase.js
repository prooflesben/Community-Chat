// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkXhvi9la88ppXd_zJIbx7vP8DiGlCn_I",
  authDomain: "c4c-chat-project.firebaseapp.com",
  projectId: "c4c-chat-project",
  storageBucket: "c4c-chat-project.appspot.com",
  messagingSenderId: "22548952015",
  appId: "1:22548952015:web:68f67287082d6506ed58ba",
  measurementId: "G-6962BJ2WR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);