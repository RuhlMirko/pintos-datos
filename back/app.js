import USERS_DB from "./users.js";

const errorElement = document.getElementById("error");
const loginBtn = document.querySelector("#login button");
const userInput = document.getElementById("user");
const passInput = document.getElementById("passw");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const username = userInput.value.trim();
  const password = passInput.value.trim();

  const user = USERS_DB.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    window.location.href = "base.html";
  } else {
    errorElement.style.display = "block";
  }
});
