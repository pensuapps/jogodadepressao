import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

export async function writeToFirestore(data) {
  try {
    console.log(data)
    const docRef = await addDoc(collection(db, 'dados'), data)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
