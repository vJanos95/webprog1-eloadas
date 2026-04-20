import { useState, useEffect } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState("");

  // TXT betöltés (ugyanaz mint JS feladat)
  useEffect(() => {
    fetch("/varos.txt")
      .then(res => res.text())
      .then(text => {
        const lines = text.split(/\r?\n/).slice(1, 21);

        const data = lines.map(line => {
          const parts = line.split("\t");
          return {
            id: parts[0],
            nev: parts[1]
          };
        });

        setCities(data);
      });
  }, []);

  const addCity = () => {
    if (!input.trim()) return;

    setCities([...cities, { id: Date.now(), nev: input }]);
    setInput("");
  };

  const deleteCity = (id) => {
    setCities(cities.filter(c => c.id !== id));
  };

  return (
    <div className="container">
      <h1>React CRUD</h1>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Új város"
      />

      <button onClick={addCity}>Hozzáadás</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Művelet</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.nev}</td>
              <td>
                <button onClick={() => deleteCity(city.id)}>
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
