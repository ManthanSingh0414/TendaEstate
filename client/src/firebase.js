// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "tenda-estate.firebaseapp.com",
    projectId: "tenda-estate",
    storageBucket: "tenda-estate.appspot.com",
    messagingSenderId: "695446258723",
    appId: "1:695446258723:web:a491eba967aca300ffdd96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);