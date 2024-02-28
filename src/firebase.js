// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVvtWeTrmOVPZbIEPGoczKXp5TDJlz1fI",
  authDomain: "podcast-platform-ad30e.firebaseapp.com",
  projectId: "podcast-platform-ad30e",
  storageBucket: "podcast-platform-ad30e.appspot.com",
  messagingSenderId: "67516823008",
  appId: "1:67516823008:web:4ef3b0075e46819e126785",
  measurementId: "G-JWY7F158DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
