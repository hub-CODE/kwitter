function login(){
    username=document.getElementById("user_name");
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}