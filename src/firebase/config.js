import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQQbORG8am3arHbtJ77IcD22ieGSntD9Y",
  authDomain: "olxpro-5b035.firebaseapp.com",
  projectId: "olxpro-5b035",
  storageBucket: "olxpro-5b035.appspot.com",
  messagingSenderId: "229630310108",
  appId: "1:229630310108:web:cca0cc010100a6bc216619",
  measurementId: "G-Y4CQEKHDQ2"
};

export default firebase.initializeApp(firebaseConfig)

