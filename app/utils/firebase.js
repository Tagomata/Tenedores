import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNnRCa6n1DJ6QC_sW1-b2QHGDmoXj71aw",
  authDomain: "tene2res.firebaseapp.com",
  databaseURL: "https://tene2res.firebaseio.com",
  projectId: "tene2res",
  storageBucket: "tene2res.appspot.com",
  messagingSenderId: "839543816384",
  appId: "1:839543816384:web:083aa97e556e94acd2ad25",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
