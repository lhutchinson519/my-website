  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyANL31Zv6UxU6XClN1SNuWYfS4TFwJMAoY",
    authDomain: "my-portfolio-f541b.firebaseapp.com",
    databaseURL: "https://my-portfolio-f541b.firebaseio.com",
    projectId: "my-portfolio-f541b",
    storageBucket: "my-portfolio-f541b.appspot.com",
    messagingSenderId: "1049838750049"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //initial variables
  var name = "";
  var email = "";
  var message = "";

  $("#emailSubmit").on("click", function() {
      event.preventDefault();

      name = $("#name_input").val().trim();
      email = ("#mail_input").val().trim();
      message = ("#msg").val().trim();

      database.ref().push({
          name: name,
          email: email,
          message: message
      })
  });
