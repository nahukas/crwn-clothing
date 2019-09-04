import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDStwpK-cPHTFE6DaK0rrAzmSveHAAksPI",
  authDomain: "crwn-db-dae91.firebaseapp.com",
  databaseURL: "https://crwn-db-dae91.firebaseio.com",
  projectId: "crwn-db-dae91",
  storageBucket: "",
  messagingSenderId: "469315306728",
  appId: "1:469315306728:web:2c13d94d8fbd8b8f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
