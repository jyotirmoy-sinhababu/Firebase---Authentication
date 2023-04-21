// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXwno05FQKK-ROvevT_x0zlDPbLhKoMOY',
  authDomain: 'authentication-using-fir-61257.firebaseapp.com',
  projectId: 'authentication-using-fir-61257',
  storageBucket: 'authentication-using-fir-61257.appspot.com',
  messagingSenderId: '706224021513',
  appId: '1:706224021513:web:e94139d02bcb01d5c858d8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
