// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0T5n8QDtAv40IZWlSNc6dhUc4G0FhqKs",
  authDomain: "er-website-1c4c6.firebaseapp.com",
  projectId: "er-website-1c4c6",
  storageBucket: "er-website-1c4c6.appspot.com",
  messagingSenderId: "630544928033",
  appId: "1:630544928033:web:c8af345ee9b11867094260",
  measurementId: "G-B9CXNCBTD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);