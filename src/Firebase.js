import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAuy71oRk6zRaw5eViZNkMD0LQQQQnF_M",
    authDomain: "net-tube-e3311.firebaseapp.com",
    projectId: "net-tube-e3311",
    storageBucket: "net-tube-e3311.appspot.com",
    messagingSenderId: "1020170025590",
    appId: "1:1020170025590:web:d29415b0ec91eb49397d57"
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth }
export default db;