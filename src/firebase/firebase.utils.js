import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD8Rxq_CdD0pxMpewv5Qn2ZEOBLsByTwcM",
  authDomain: "crwn-db-e0d32.firebaseapp.com",
  databaseURL: "https://crwn-db-e0d32.firebaseio.com",
  projectId: "crwn-db-e0d32",
  storageBucket: "crwn-db-e0d32.appspot.com",
  messagingSenderId: "664600752462",
  appId: "1:664600752462:web:181a0a07c540b42c35ee1f",
  measurementId: "G-1V8S4ZJTBE"
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const fireStore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, aditioalData) => {
  if (!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditioalData
      });
    } catch (err) {
      console.log("error");
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
