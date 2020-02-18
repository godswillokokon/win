// auth.onAuthStateChanged(user => {
//   if (user) {
//     console.log("user logged in");
//   } else {
//     console.log("user not logged in");
//   }
// });

function myFunction() {
  var x = document.getElementById("login-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  // const displayName = signupForm["login-name"].value;
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  //   console.log(error.code);
  //   console.log(error.message);
  // });
  console.log(email, password);

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {

      let currentUser = sessionStorage.setItem(
        "user",
        firebase.auth().currentUser
      );
      const RegNum = document.querySelector("#login-regnum");

      let regNum = RegNum.value;
      console.log(regNum);
      let regNumSession = sessionStorage.setItem("regnum", regNum);
      // console.log(cred.user);
      location.href = "student-edit-account.html";
    })
    .catch(err => {
      console.log(err.message);
      alert("Err", err.message)
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
