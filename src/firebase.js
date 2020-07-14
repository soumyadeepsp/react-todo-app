import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBBtaX5KVX9vsON8seBhNjwE2JQSq4Kus",
    authDomain: "todo-react-app-528b0.firebaseapp.com",
    databaseURL: "https://todo-react-app-528b0.firebaseio.com",
    projectId: "todo-react-app-528b0",
    storageBucket: "todo-react-app-528b0.appspot.com",
    messagingSenderId: "1080191111064",
    appId: "1:1080191111064:web:36e3f1bf45170ca92fe5ed",
    measurementId: "G-5144ZG1D3J"
});

const db = firebase.firestore();

export {db};