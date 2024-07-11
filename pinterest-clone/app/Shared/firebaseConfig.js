// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnOFt6GNV9NGWcnh3tHUQRR2_Sj2dHc8Y",
  authDomain: "pinterest-project-429020.firebaseapp.com",
  projectId: "pinterest-project-429020",
  storageBucket: "pinterest-project-429020.appspot.com",
  messagingSenderId: "939542486386",
  appId: "1:939542486386:web:598b8e1866d9e977e951eb",
  measurementId: "G-YLS35E4EPD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;