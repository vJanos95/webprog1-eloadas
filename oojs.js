class Card {
  constructor(title) {
    this.title = title;
  }

  createBase() {
    const div = document.createElement("div");
    div.className = "card";

    const h2 = document.createElement("h2");
    h2.innerText = this.title;

    div.appendChild(h2);

    return div;
  }
}

class CityCard extends Card {
  constructor(city, population) {
    super(city);
    this.population = population;
  }

  render() {
    const card = this.createBase();

    const p = document.createElement("p");
    p.innerText = "Lakosság: " + this.population;

    card.appendChild(p);

    document.getElementById("app").appendChild(card); // kötelező elem
  }
}

// Demo adatok
const cities = [
  { name: "Budapest", pop: 1756000 },
  { name: "Debrecen", pop: 200000 },
  { name: "Szeged", pop: 160000 }
];

// Render
cities.forEach(c => {
  const card = new CityCard(c.name, c.pop);
  card.render();
});
