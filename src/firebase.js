import { useEffect, useState } from "react";


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut }
 from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGKmjAwsr7oDdu6QVccky_LdxjcM6M9lE",
    authDomain: "react-firebase-auth-a78e4.firebaseapp.com",
    projectId: "react-firebase-auth-a78e4",
    storageBucket: "react-firebase-auth-a78e4.appspot.com",
    messagingSenderId: "900908429182",
    appId: "1:900908429182:web:b9061af105da41473a0d2f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const signout = onAuthStateChanged(auth, user => setCurrentUser(user));
    return signout;
  }, [])

  return currentUser;
}