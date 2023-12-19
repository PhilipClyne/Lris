// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADK1AmGdiaFpjQZOsckQJtrVYeFKamNw4",
  authDomain: "mern-book-inventory-ea312.firebaseapp.com",
  projectId: "mern-book-inventory-ea312",
  storageBucket: "mern-book-inventory-ea312.appspot.com",
  messagingSenderId: "1088548437948",
  appId: "1:1088548437948:web:0bcbcddae7a9b0c02ff5b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
