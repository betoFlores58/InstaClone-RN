
import firebase from 'firebase'
require('firebase/firestore')
require('firebase/analytics')

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5EKEUsrvC7mdFyL9XrCYgh3wOAByNq3k",
    authDomain: "insta-clone-b23cc.firebaseapp.com",
    projectId: "insta-clone-b23cc",
    storageBucket: "insta-clone-b23cc.appspot.com",
    messagingSenderId: "205072919373",
    appId: "1:205072919373:web:70bdbe20acc302d05de504",
    measurementId: "G-TGXJJX0HSB"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

export default db;