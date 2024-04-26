let isLogin = localStorage.getItem("x-auth-token");
let logOut = document.querySelector(".admin__logout");
function checkUser() {
  if (!checkUser) {
    window.location.replace("../pages/login.html");
  }
}

logOut.addEventListener("click", () => {
  console.log("ok");
  localStorage.clear();
  window.open("../index.html");
});
