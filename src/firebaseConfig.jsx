import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1KuWwFFq0aM-ZCXMBu9SSZZH6k9EqrjU",
  authDomain: "weather-64602.firebaseapp.com",
  projectId: "weather-64602",
  storageBucket: "weather-64602.firebasestorage.app",
  messagingSenderId: "769418074493",
  appId: "1:769418074493:web:a3353b3beec8ddcfbe9414",
  measurementId: "G-2H2KJ6W140",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth service
const auth = getAuth(app);

// Create Google provider instance
const provider = new GoogleAuthProvider();

// Function to trigger Google Sign-In popup
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth };
