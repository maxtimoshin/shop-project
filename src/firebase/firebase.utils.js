import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBE5JwaqDONO0cgp5A6zwPbXSAN7W19y2s",
    authDomain: "crws-db.firebaseapp.com",
    projectId: "crws-db",
    storageBucket: "crws-db.appspot.com",
    messagingSenderId: "809053061518",
    appId: "1:809053061518:web:6af154d222c922cf5524df",
    measurementId: "G-Q84HEM5LER"
}

export const createUserProfileDocument = async (userAuth, additiotanData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additiotanData
            })
        } catch (error){
            console.log('error creatin user', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase