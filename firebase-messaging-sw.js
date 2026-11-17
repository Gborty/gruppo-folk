importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js','https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
// INCOLLA QUI la stessa configurazione di index.html
firebase.initializeApp({
  apiKey: "AIzaSyDxRXoFhkrsZ0TdzsvKccEVNOWPu1Uudoo",
  authDomain: "gruppo-folk-b2134.firebaseapp.com",
  projectId: "gruppo-folk-b2134",
  storageBucket: "gruppo-folk-b2134.firebasestorage.app",
  messagingSenderId: "1083835155627",
  appId: "1:1083835155627:web:ac48f2129be94f781763ee"
});
firebase.messaging();
