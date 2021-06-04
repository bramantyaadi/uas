import firebase from "firebase/app";
import 'firebase/firestore';
var firebaseConfig = {
//diisi data dari firebase masing2
  apiKey: "AIzaSyB3KIpEp_ZByaxdBHXyYQhl5VEN13owGLk",
  authDomain: "uasisomorphic.firebaseapp.com",
  projectId: "uasisomorphic",
  storageBucket: "uasisomorphic.appspot.com",
  messagingSenderId: "297370943807",
  appId: "1:297370943807:web:bb4dd8eff60c109cb5138a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
