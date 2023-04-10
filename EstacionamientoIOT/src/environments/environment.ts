// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  firebase: {
    projectId: 'iot-estacionamiento-51db2',
    appId: '1:371970653145:web:b043088a2166b9abfcb7c8',
    databaseURL: 'https://iot-estacionamiento-51db2-default-rtdb.firebaseio.com',
    storageBucket: 'iot-estacionamiento-51db2.appspot.com',
    apiKey: 'AIzaSyASspuA_-E_CnLcoBy5XaVnKU1xV-YduAw',
    authDomain: 'iot-estacionamiento-51db2.firebaseapp.com',
    messagingSenderId: '371970653145',
    measurementId: 'G-HL6RH0K9CY',
  },
  apiKey: "AIzaSyASspuA_-E_CnLcoBy5XaVnKU1xV-YduAw",
  authDomain: "iot-estacionamiento-51db2.firebaseapp.com",
  databaseURL: "https://iot-estacionamiento-51db2-default-rtdb.firebaseio.com",
  projectId: "iot-estacionamiento-51db2",
  storageBucket: "iot-estacionamiento-51db2.appspot.com",
  messagingSenderId: "371970653145",
  appId: "1:371970653145:web:b043088a2166b9abfcb7c8",
  measurementId: "G-HL6RH0K9CY"
};

// Initialize Firebase
const app = initializeApp(environment.firebase);