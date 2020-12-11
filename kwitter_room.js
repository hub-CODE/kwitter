var firebaseConfig = {
      apiKey: "AIzaSyAvwbzy6-ddY3tFxD7Avb5VH6SrjlSq_Dg",
      authDomain: "lets-chat-web-app-cd2ff.firebaseapp.com",
      databaseURL:"https://lets-chat-web-app-cd2ff-default-rtdb.firebaseio.com/",
      projectId: "lets-chat-web-app-cd2ff",
      storageBucket: "lets-chat-web-app-cd2ff.appspot.com",
      messagingSenderId: "459549928233",
      appId: "1:459549928233:web:acd0d35500f3d915a76538",
      measurementId: "G-PDRH10VD8L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username=document.getElementById("username").innerHTML="Hi"+username+"!";
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
