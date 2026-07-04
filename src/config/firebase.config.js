// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiDowjXG9ZFCe9ZHMB0Q_UvPVGPbZNPwQ",
    authDomain: "my-portfolio-website-29451.firebaseapp.com",
    projectId: "my-portfolio-website-29451",
    storageBucket: "my-portfolio-website-29451.firebasestorage.app",
    messagingSenderId: "766987985391",
    appId: "1:766987985391:web:fe0eee84cea245392b161a",
    measurementId: "G-8F6CNHLSNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Cloud firestore initialization
const db = getFirestore(app);

export default db;