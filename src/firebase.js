import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDOL0dko6T4IuCkcUN-ni_1XZ2bTWNHX48",
    authDomain: "lets-social-a540f.firebaseapp.com",
    databaseURL: "https://lets-social-a540f.firebaseio.com",
    projectId: "lets-social-a540f",
    storageBucket: "lets-social-a540f.appspot.com",
    messagingSenderId: "83435197309",
    appId: "1:83435197309:web:0f540593a2313b75a7f214",
    measurementId: "G-S0K5NCJSSK"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }