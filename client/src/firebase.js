import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "tenda-estate.firebaseapp.com",
    projectId: "tenda-estate",
    storageBucket: "tenda-estate.appspot.com",
    messagingSenderId: "695446258723",
    appId: "1:695446258723:web:a491eba967aca300ffdd96"
};

export const app = initializeApp(firebaseConfig);
