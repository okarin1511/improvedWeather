import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBmPGwmLH7hcpb-OjfiDJbDajKsuiSfVRU",
    authDomain: "login-628eb.firebaseapp.com",
    projectId: "login-628eb",
    storageBucket: "login-628eb.appspot.com",
    messagingSenderId: "914542739667",
    appId: "1:914542739667:web:6d8b8c77f917b5209f5426",
    measurementId: "G-EBY6WK3FSP"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
