  //getting the data from local storage
  let signinData = JSON.parse(localStorage.getItem("userData"));
  console.log(signinData);

  //compaing the signin-data with login-data
  function loginFun() {
    event.preventDefault();
    console.log("sathya");
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    // comparing
    for (let i = 0; i < signinData.length; i++) {
      var correct = false;
      if (signinData[i].email == email && signinData[i].password == password) {
        correct = true;
        break;
      } else {
        correct = false;
      }
    }
    if (correct == true) {
      // alert("Login successful");
      window.location.href = "./index.html";
    } else {
      alert("Invalid Credentials");
    }
  }