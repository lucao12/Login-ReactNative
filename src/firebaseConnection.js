import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAnP8VZfmo7OUzZYxH1KGAAFG4LL1l92yQ",
    authDomain: "projetologin-27fea.firebaseapp.com",
    projectId: "projetologin-27fea",
    storageBucket: "projetologin-27fea.appspot.com",
    messagingSenderId: "872716841850",
    appId: "1:872716841850:web:893a1e12f9fdc327f35cc3",
    measurementId: "G-H0EP3WTDM0"
  };

  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
    
export default firebase;