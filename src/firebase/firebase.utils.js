import firebase from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6n5uSnIrsYnESHFvofof3o-K_TEuVMp4",
    authDomain: "crown-clothing-77547.firebaseapp.com",
    databaseURL: "https://crown-clothing-77547.firebaseio.com",
    projectId: "crown-clothing-77547",
    storageBucket: "crown-clothing-77547.appspot.com",
    messagingSenderId: "835792019901",
    appId: "1:835792019901:web:b9647008ce1679eee732d4",
    measurementId: "G-FX72HP70PV"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = new Date();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error craeting user', error.message);

        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
