import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZpCUgWcqQTMbWzKU-M4bfxDw_l8SLLpc",
    authDomain: "jimmy-fb-clone.firebaseapp.com",
    projectId: "jimmy-fb-clone",
    storageBucket: "jimmy-fb-clone.appspot.com",
    messagingSenderId: "888852774712",
    appId: "1:888852774712:web:c66ddee0f943aa481bcbcd",
    measurementId: "G-E5WT1LFYC7"
  });

  const db = firebaseApp.firestore();

  export default db;