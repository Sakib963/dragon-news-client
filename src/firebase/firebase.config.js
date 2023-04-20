// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvsJm8zhGLtOMCV9cuCR5Czv30MdYDgmo",
  authDomain: "the-dragon-news-client-2a067.firebaseapp.com",
  projectId: "the-dragon-news-client-2a067",
  storageBucket: "the-dragon-news-client-2a067.appspot.com",
  messagingSenderId: "1021457970084",
  appId: "1:1021457970084:web:1ca0ad360ddd6d59874731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;