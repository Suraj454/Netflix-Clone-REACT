

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

/*
const {
VITE_FIREBASE_API_KEY ,
VITE_FIREBASE_AUTH_DOMAIN ,
VITE_FIREBASE_PROJECT_ID ,
VITE_FIREBASE_STORAGE_BUCKET ,
VITE_FIREBASE_MESSAGING_SENDER_ID,
VITE_FIREBASE_APP_ID
} = import.meta.env

*/

const firebaseConfig = {
  apiKey: "AIzaSyBbM1BAvrr3aArGZazkzSAYsiQhncBPC0U",
  authDomain: "netflix-app-e68cd.firebaseapp.com",
  projectId: "netflix-app-e68cd",
  storageBucket: "netflix-app-e68cd.appspot.com",
  messagingSenderId: "1072201951351",
  appId: "1:1072201951351:web:8b562e2a74f690aa64fe72"
};

 
/*
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,

};

*/
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

