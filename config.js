import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBRsyWmz9nHSMo9daoGpc-JIGoKgTEwM54",
    authDomain: "project71-d3101.firebaseapp.com",
    projectId: "project71-d3101",
    storageBucket: "project71-d3101.appspot.com",
    messagingSenderId: "647482536145",
    appId: "1:647482536145:web:b035a1b668f1160cf095f0"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
