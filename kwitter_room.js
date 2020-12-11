var firebaseConfig = {
      apiKey: "AIzaSyCkAaO12T3cDFFTDDtHDCTCzpG5uHrZKzI",
      authDomain: "kwitter-250e5.firebaseapp.com",
      databaseURL:"https://kwitter-250e5-default-rtdb.firebaseio.com/",
      projectId: "kwitter-250e5",
      storageBucket: "kwitter-250e5.appspot.com",
      messagingSenderId: "1065699304015",
      appId: "1:1065699304015:web:6f890ca561e3e54b20c03a",
      measurementId: "G-3PVZS5RBY4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username=document.getElementById("username").innerHTML="Welcome"+username+"!";
function addroom() {
      roomname=document.getElementById("room_name").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"This is just for addding room name"
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("roomname:"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
