importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js','https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
// INCOLLA QUI la stessa configurazione di index.html
firebase.initializeApp({
  apiKey:"INCOLLA", authDomain:"INCOLLA", projectId:"INCOLLA",
  storageBucket:"INCOLLA", messagingSenderId:"INCOLLA", appId:"INCOLLA"
});
firebase.messaging();
