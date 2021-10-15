//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCxq_6_pV3Xn5gtwz0v-bySQAP_-ZM6KRc",
      authDomain: "kwitter-e8537.firebaseapp.com",
      databaseURL: "https://kwitter-e8537-default-rtdb.firebaseio.com",
      projectId: "kwitter-e8537",
      storageBucket: "kwitter-e8537.appspot.com",
      messagingSenderId: "1010266170305",
      appId: "1:1010266170305:web:62fb6482ca9b8bd096c540"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("p name");
room_name=localStorage.getItem("roomName");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();



function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            Like:0
      });
      document.getElementById("msg").value=" ";
};

function logout(){
      localStorage.removeItem("p name");
      localStorage.removeItem("roomName");
      window.location="index.html";
}