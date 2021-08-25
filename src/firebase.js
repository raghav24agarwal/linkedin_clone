import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwatoOo1p8pGsUYjHQDIF33TG8eUIZqM0",
    authDomain: "linkedin-react-project.firebaseapp.com",
    projectId: "linkedin-react-project",
    storageBucket: "linkedin-react-project.appspot.com",
    messagingSenderId: "902968974121",
    appId: "1:902968974121:web:00562ef17d2947d400f538"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }