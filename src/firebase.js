// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCRkSB3txtb2RciZyp2AwMFKPiN7erCKt8",
	authDomain: "new-signup-test-9b73e.firebaseapp.com",
	projectId: "new-signup-test-9b73e",
	storageBucket: "new-signup-test-9b73e.appspot.com",
	messagingSenderId: "99921724203",
	appId: "1:99921724203:web:8aa680f1f3990783ba3b6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentification
export const auth = getAuth(app);

//Initialize Firstore
export const db = getFirestore(app);
