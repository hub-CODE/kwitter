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
//YOUR FIREBASE LINKS

username=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            message:msg,
            user_name:username
      });
      document.getElementById("msg").innerHTML="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
message=message_data['message'];
like=message_data['like'];
user_name=message_data['user_name'];
name_with_tag="<h4>"+user_name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
firebase.database().ref("room_name").child(message_id).update({
      like:update_likes
});
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html"
}
