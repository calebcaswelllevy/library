(function(){

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApGOFaDj07yo0nMLeOBrytNxD2sHoSSDI",
    authDomain: "library-2df85.firebaseapp.com",
    projectId: "library-2df85",
    storageBucket: "library-2df85.appspot.com",
    messagingSenderId: "218775717252",
    appId: "1:218775717252:web:505fc22d2f13c2547e89d1",
    measurementId: "G-S1GCY5S43S"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  console.log("firebase script running")

 

// To do:
// 1. set event new listener function
// 2. get values from submit
// 3. Get reference to firebase (DONE)
// 4. pass values to firebase
// 5. Figure out how to load from firebase on startup
// 6. Make toggle button that allows user to choose local or firebase
// 7. Function to toggle which data to load


}());