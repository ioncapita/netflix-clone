import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaAp2yK-OkMHKXkOMnYig1OtOd-uYiyhU",
  authDomain: "netflix-project-1b6c9.firebaseapp.com",
  projectId: "netflix-project-1b6c9",
  storageBucket: "netflix-project-1b6c9.appspot.com",
  messagingSenderId: "217989963309",
  appId: "1:217989963309:web:b9512a93e0632e8f8822a4",
};

const app = require("@firebase/app");
require("@firebase/auth");
require("@firebase/firestore");


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
