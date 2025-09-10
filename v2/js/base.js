import DATASET from "./dataset.js";

const recordAmountElement = document.getElementById("record-amount");
const searchInput = document.getElementById("searchInput");
const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", function logout() {
  window.location.href = "index2.html";
});

recordAmountElement.textContent = `Registros cargados: ${DATASET.length}`;

searchInput.addEventListener("input", function () {
  console.log("update");
});
