
//login

function myFunction() {
  var x = document.getElementById("login-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  // const displayName = signupForm["login-name"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {

      let currentUsers = firebase.auth().currentUser;
      console.log(currentUsers, "user");
      let currentUser = sessionStorage.setItem(
        "admin",
        firebase.auth().currentUser
      );
      const userName = document.querySelector("#login-username");

      let username = userName.value;
      let usernameSession = sessionStorage.setItem("adminUsername", username);
      sessionStorage.setItem("adminEmail", email);
      // console.log(cred.user);
      location.href = "instructor-dashboard.html";
    })
    .catch(err => {
      console.log(err);
      alert(err);
    });
});




function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    let currentUser = sessionStorage.removeItem("user");
    console.log("user is logging out");
    // location.href = "index.html";
  });
  // console.log("am logging out");
}
