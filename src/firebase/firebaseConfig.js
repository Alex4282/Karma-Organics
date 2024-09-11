import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCGYrXUNnqTw4jn5glw5zmtLdRVf9h_q5g",
    authDomain: "karma-organics.firebaseapp.com",
    projectId: "karma-organics",
    storageBucket: "karma-organics.appspot.com",
    messagingSenderId: "900587979523",
    appId: "1:900587979523:web:750d82682b5d00dccc9f36",
    measurementId: "G-7XMRY343WP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};


