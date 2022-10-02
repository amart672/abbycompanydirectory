import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.evn.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.evn.VITE_FIREBASE_AUTHDOMIN,
  projectId: import.meta.evn.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.evn.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.evn.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.evn.VITE_FIREBASE_APPID,
}

export const app = initializeApp(firebaseConfig)
