import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWO8MLSHvgyBq7BlAc2lI8J736_FPycvA",
  authDomain: "chat-app-4446a.firebaseapp.com",
  projectId: "chat-app-4446a",
  storageBucket: "chat-app-4446a.appspot.com",
  messagingSenderId: "25108522016",
  appId: "1:25108522016:web:13c9db73dc0794b87c8845",
  measurementId: "G-17DGE5T10J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();

auth.useEmulator("http://localhost:9099");
if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", "8080");
}

export { db, auth, analytics };

export default firebase;
