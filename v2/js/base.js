import DATASET from "./dataset.js";

const recordAmountElement = document.getElementById("record-amount");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", function logout() {
  window.location.href = "index2.html";
});

recordAmountElement.textContent = `Registros cargados: ${DATASET.length}`;

searchBtn.addEventListener("click", function () {
  const resultsContainer = document.getElementById("results");

  resultsContainer.innerHTML = ""; // Clear previous results

  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    resultsContainer.innerHTML =
      "<h2>Por favor ingrese un número de local para buscar.</h2>";
    resultsContainer.style.display = "block";
    resultsContainer.style.backgroundColor = "#a52a17";
    return;
  }

  const foundLocal = DATASET.find(
    (local) => String(local.localNumber) === query
  );
  resultsContainer.style.display = "block";
  resultsContainer.style.backgroundColor = "#464646";
  if (foundLocal) {
    resultsContainer.innerHTML = `
    <h2> Información del Local: ${foundLocal.localNumber}</h2>
        <div>
            <p>N° Local: <em>${foundLocal.localNumber}</em> </p>
            <p>Direccion: <em>${foundLocal.direccion}</em> </p>
            <p>Barrio: <em>${foundLocal.barrio}</em> </p>
            <p>Delegado: <em>${foundLocal.delegado}</em> </p>
            <p>Zona: <em>${foundLocal.zona}</em> </p>
            <p>Gerente regional: <em>${foundLocal.gerente}</em> </p>
        </div>
          `;
  } else {
    resultsContainer.innerHTML = `<h2>No se encontró el local con el número "${query}".</h2>`;
  }
});
