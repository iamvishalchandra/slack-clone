import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwAp1KF2XJfkmAlz2dlEBJ6mFPfcoRrzY",
  authDomain: "slackclonebyvishalchandra.firebaseapp.com",
  projectId: "slackclonebyvishalchandra",
  storageBucket: "slackclonebyvishalchandra.appspot.com",
  messagingSenderId: "811033686795",
  appId: "1:811033686795:web:dfaa6e7813a2e54942280e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
