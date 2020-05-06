import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBN0M_MwebAzoBWWKXNcCvg1AEpkIJitTM",
    authDomain: "lazyda-db.firebaseapp.com",
    databaseURL: "https://lazyda-db.firebaseio.com",
    projectId: "lazyda-db",
    storageBucket: "lazyda-db.appspot.com",
    messagingSenderId: "1005598931955",
    appId: "1:1005598931955:web:5b87e47fac7d73213c7086",
    measurementId: "G-JB7T3DBYBS"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message)
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