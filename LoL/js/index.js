import Champion from './char.js';

const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
fetch(url)
  .then(response => response.json())
  .then(data => {
    const champions = data.data;
    const container = document.getElementById('champion-container');
    for (let champ in champions) {
     const champion = new Champion(champions[champ])
      /* const name = champions[champ].name;
      const blurb = champions[champ].blurb;
      const tags = champions[champ].tags;
      const ids = champions[champ].id; */

      const championImageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

      const allChamps = document.getElementById('champion-container')

      allChamps.innerHTML+=`<div class="champion">
      <img src="${championImageUrl}"
      <h2 class="nombre"> Nombre: ${champion.name}</h2>
      <p class="tipos">Tipos: ${champion.tags.join(', ')}</p>
      <details>
      <sumamry>${champion.blurb}</summary></details>
      </div>`
  
  }
  });
