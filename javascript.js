let cities = [];

async function loadTXT() {
  try {
    const res = await fetch("varos.txt");
    const text = await res.text();

    const lines = text.split("\n").slice(1, 21);

    cities = lines.map(line => {
      const parts = line.split("\t");
      return {
        id: parts[0],
        nev: parts[1]
      };
    });

    render();
  } catch (err) {
    console.error("Hiba a TXT betöltésnél:", err);
  }
}

function render() {
  const table = document.getElementById("cityTable");
  table.innerHTML = "";

  cities.forEach((city, index) => {
    table.innerHTML += `
      <tr>
        <td>${city.id}</td>
        <td>${city.nev}</td>
        <td>
          <button onclick="deleteCity(${index})">Törlés</button>
        </td>
      </tr>
    `;
  });
}

function addCity() {
  const input = document.getElementById("newCity");

  if (!input.value.trim()) return;

  cities.push({
    id: Date.now(),
    nev: input.value
  });

  input.value = "";
  render();
}

function deleteCity(index) {
  cities.splice(index, 1);
  render();
}

// BIZTOS BETÖLTÉS
window.onload = loadTXT;
