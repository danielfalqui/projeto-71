import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyCUMthMKmV2WCA7SEsg7vHLz_jCcxxnIyg",
    authDomain: "ciclista-eletronico-6bc1c.firebaseapp.com",
    projectId: "ciclista-eletronico-6bc1c",
    storageBucket: "ciclista-eletronico-6bc1c.appspot.com",
    messagingSenderId: "13813161968",
    appId: "1:13813161968:web:2d40d9c78fc3cc87984735",
    measurementId: "G-HDEC5VL48Y"
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
