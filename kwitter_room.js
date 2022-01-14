var firebaseConfig = {
      apiKey: "AIzaSyBvXr_wi4KPEBhP2prJJ7Aj5T128ZIh46g",
      authDomain: "kwitter-a723b.firebaseapp.com",
      databaseURL: "https://kwitter-a723b-default-rtdb.firebaseio.com",
      projectId: "kwitter-a723b",
      storageBucket: "kwitter-a723b.appspot.com",
      messagingSenderId: "864562821248",
      appId: "1:864562821248:web:1d862f0e29d62d54694e65"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+ username +"!";
function addroom(){
      roomname= document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname" , roomname);
      window.location="kwitter_page.html";
}
