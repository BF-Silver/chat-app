// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDslLSUZ030NfkP7eRPSgn3pTtjmtj7cgc",
  authDomain: "chat-app-b2c5d.firebaseapp.com",
  projectId: "chat-app-b2c5d",
  storageBucket: "chat-app-b2c5d.appspot.com",
  messagingSenderId: "912846598976",
  appId: "1:912846598976:web:8d71500f9c3ab8264c00a5",
  measurementId: "G-2J65M6DY6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };