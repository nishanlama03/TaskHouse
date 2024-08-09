// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwa1nflCEILarNMWyYV7LzYDBjz4UwZMA",
  authDomain: "taskhouse-8b16b.firebaseapp.com",
  projectId: "taskhouse-8b16b",
  storageBucket: "taskhouse-8b16b.appspot.com",
  messagingSenderId: "292456925813",
  appId: "1:292456925813:web:6b77ca1a2454d90cde463c",
  measurementId: "G-1YZD6Y6BY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);