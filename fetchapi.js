const API_URL = "varosok.php";

async function loadCities() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const table = document.getElementById("cityTable");
    table.innerHTML = "";

    data.slice(0, 20).forEach(city => {
      table.innerHTML += `
        <tr>
          <td>${city.id}</td>
          <td>${city.nev}</td>
          <td>
            <button onclick="deleteCity(${city.id})">Törlés</button>
          </td>
        </tr>
      `;
    });
  } catch (err) {
    console.error("Hiba az API betöltésnél:", err);
  }
}

async function addCity() {
  const input = document.getElementById("cityName");

  if (!input.value.trim()) return;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nev: input.value,
      megyeid: 1
    })
  });

  input.value = "";
  loadCities();
}

async function deleteCity(id) {
  await fetch(API_URL + "?id=" + id, {
    method: "DELETE"
  });

  loadCities();
}

// BIZTOS BETÖLTÉS
window.onload = loadCities;
