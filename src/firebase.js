import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABlZCIiANhDMhe_XEfLAIOAWGVVIBn8Ss",
  authDomain: "twitter-project-b8dc1.firebaseapp.com",
  databaseURL: "https://twitter-project-b8dc1-default-rtdb.firebaseio.com",
  projectId: "twitter-project-b8dc1",
  storageBucket: "twitter-project-b8dc1.appspot.com",
  messagingSenderId: "269125287995",
  appId: "1:269125287995:web:9c00c629ea5cfe8527dc1e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const fb = app.firestore();

export default fb;