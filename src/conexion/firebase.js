// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{ getAuth} from "firebase/auth";
import{ getFirestore} from "firebase/firestore";
import{ getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0GNxm7xDZZNs0Uu30Hrb8kl4bw95oyq8",
  authDomain: "react-app01-88153.firebaseapp.com",
  databaseURL: "https://react-app01-88153-default-rtdb.firebaseio.com",
  projectId: "react-app01-88153",
  storageBucket: "react-app01-88153.appspot.com",
  messagingSenderId: "332890738003",
  appId: "1:332890738003:web:5432a345b06b7469ae65a6",
  measurementId: "G-59XQSY00EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);
