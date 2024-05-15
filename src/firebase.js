import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDoTuqYaEcK-D6ZpfHDSgNlBdDccDcNd74",
  authDomain: "todo-list-a7f1a.firebaseapp.com",
  projectId: "todo-list-a7f1a",
  storageBucket: "todo-list-a7f1a.appspot.com",
  messagingSenderId: "986153161760",
  appId: "1:986153161760:web:9059860f7813c6669b5845",
  measurementId: "G-9NP6KE22Q9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)