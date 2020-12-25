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



  
  //Get Elements
  const preObject = document.getElementById('library')

  //Create references
  const dbRefObject = firebase.database().ref().child('library');
  
  //Sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));

}());