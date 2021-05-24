import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2RmaqEMkGrVKsMLKHh6QHfL98Olb3qos",
  authDomain: "disney-bba34.firebaseapp.com",
  projectId: "disney-bba34",
  storageBucket: "disney-bba34.appspot.com",
  messagingSenderId: "727139943600",
  appId: "1:727139943600:web:91dedcdaf99b45533ba775",
  measurementId: "G-SYLDPQRRDJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
