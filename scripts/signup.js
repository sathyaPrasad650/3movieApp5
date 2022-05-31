  // array to store the input from user in the form of object
  var userSingupData = JSON.parse(localStorage.getItem("userData")) || [];

  // getting the input values and pushing them in
  function singupFun() {
    event.preventDefault();
    console.log("sathya");
    let userObj = {
      name: document.querySelector("#name").value,
      contactNo: document.querySelector("#contact").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    //aleart if any one input is empty
    if (
      userObj.name.length == 0 ||
      userObj.contactNo.length == 0 ||
      userObj.email.length == 0 ||
      userObj.password.length == 0
    ) {
      alert("Enter valid data");
    } else {
      userSingupData.push(userObj);
      localStorage.setItem("userData", JSON.stringify(userSingupData));
      console.log("yes");
      window.location.href = "./login.html";
    }
  }