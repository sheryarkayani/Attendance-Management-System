// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const app = initializeApp({
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_ID,
// });

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQgxjzQWqzclNGoAhTqKbBIdERc-ZBLcg",
  authDomain: "attendance-management-sy-5c065.firebaseapp.com",
  projectId: "attendance-management-sy-5c065",
  storageBucket: "attendance-management-sy-5c065.appspot.com",
  messagingSenderId: "46070283356",
  appId: "1:46070283356:web:9fd7babacfde4c3da73a99",
  measurementId: "G-S6MN4Y410Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

