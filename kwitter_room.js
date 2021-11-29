
const firebaseConfig = {
      apiKey: "AIzaSyBz7km6NgccaskDnNDaC7o3rvTCNxqqgds",
      authDomain: "kwitter-c1dcf.firebaseapp.com",
      databaseURL: "https://kwitter-c1dcf-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1dcf",
      storageBucket: "kwitter-c1dcf.appspot.com",
      messagingSenderId: "408219125610",
      appId: "1:408219125610:web:3510cc9de8d8111afac713"
    };

    // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
