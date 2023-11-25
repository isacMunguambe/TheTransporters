// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLCKhh_Q3zaZd4VIsO7Wcxj76C1rwg7ys",
  authDomain: "transporters-1451e.firebaseapp.com",
  projectId: "transporters-1451e",
  storageBucket: "transporters-1451e.appspot.com",
  messagingSenderId: "684480864212",
  appId: "1:684480864212:web:f61134c94a00164e090041"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getAuth(FIREBASE_APP);