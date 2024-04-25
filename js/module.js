const loginBtn = document.querySelector(".header__btn__sigin");
const module = document.querySelector(".module");
const moduleLog = document.querySelector(".module__btn");
const moduleBack = document.querySelector(".module__back-btn");
const moduleName = document.querySelector(".module__username");
const modulePassword = document.querySelector(".module__password");
const error = document.querySelector(".module__error");
const API_URL = "https://dummyjson.com";

const moduleForm = document.querySelector(".module__form");
loginBtn.addEventListener("click", () => {
  module.style.display = "block";
});

moduleBack.addEventListener("click", () => {
  module.style.display = "none";
});

moduleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = {
    username: moduleName.value,
    password: modulePassword.value,
  };
  signIn(user);
});

async function signIn(user) {
  await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.message === "Invalid credentials") {
        return (error.style.opacity = 1);
      }
      localStorage.setItem("x-auth-token", res.token);
      window.open("./pages/admin.html", "_self");
    })
    .catch((err) => console.log(err));
}
