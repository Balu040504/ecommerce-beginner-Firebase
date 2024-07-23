// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ZVUgca65xBw701c1vIDiZ-AMln4vogQ",
  authDomain: "myecom-b0a38.firebaseapp.com",
  projectId: "myecom-b0a38",
  storageBucket: "myecom-b0a38.appspot.com",
  messagingSenderId: "656986251023",
  appId: "1:656986251023:web:3d9a8616b64e02d374e87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app);

const auth=getAuth(app);

export {auth, fireDB}