const firebaseConfig = {
    apiKey: "AIzaSyAikt1fDrVlDXNxJ0RSDh6PVI_al1QUmQE",
    authDomain: "kwitter94-e141d.firebaseapp.com",
    databaseURL: "https://kwitter94-e141d-default-rtdb.firebaseio.com",
    projectId: "kwitter94-e141d",
    storageBucket: "kwitter94-e141d.appspot.com",
    messagingSenderId: "961347740666",
    appId: "1:961347740666:web:f219b3935cfb36118bfa43",
    measurementId: "G-53F9EBDZ59"
  };
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += rom;

//End code
 } });  }); }
getData();

function send()
{
 msg = document.getElementById("mesg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:mesg,
       like:0
 });
 document.getElementById("msg").value = "";
}