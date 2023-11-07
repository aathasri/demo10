//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB3MhMUhQhXPbyjqUlG3rn-D-Bc2eO9en4",
    authDomain: "demo10-9c616.firebaseapp.com",
    projectId: "demo10-9c616",
    storageBucket: "demo10-9c616.appspot.com",
    messagingSenderId: "312705229291",
    appId: "1:312705229291:web:76dbff2103618ed83039ae"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const storage = firebase.storage();
