import firebase from 'firebase';
import dotenv from 'dotenv';
 
dotenv.config()

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "jimmy-fb-clone.firebaseapp.com",
    projectId: "jimmy-fb-clone",
    storageBucket: "jimmy-fb-clone.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });

  const db = firebaseApp.firestore();

  export default db;