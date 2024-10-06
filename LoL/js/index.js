import Champion from './char.js';

const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
fetch(url)
  .then(response => response.json())
  .then(data => {
    const champions = data.data;
    const container = document.getElementById('champion-container');

    container.innerHTML = '';

    for (let champ in champions) {
      const name = champions[champ].name;
      const blurb = champions[champ].blurb;
      const tags = champions[champ].tags;

      const championImageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;

      const championDiv = document.createElement('div');
      championDiv.classList.add('champion');

      const nameElement = document.createElement('h2');
      nameElement.textContent = name;
      nameElement.classList.add('nombre')

      const imageElement = document.createElement('img');
      imageElement.src = championImageUrl;
      imageElement.alt = name;
      imageElement.style.width = '100%';

      const tagsElement = document.createElement('p');
      tagsElement.textContent = `Tipos: ${tags.join(', ')}`;
      tagsElement.classList.add('tipos')

      const detailsElement = document.createElement('details');
      const summaryElement = document.createElement('summary');
      summaryElement.textContent = "Más información";

      const blurbElement = document.createElement('p');
      blurbElement.textContent = blurb;
      blurbElement.style.maxHeight = 'none'; 

      detailsElement.appendChild(summaryElement);
      detailsElement.appendChild(blurbElement);

      championDiv.appendChild(imageElement);
      championDiv.appendChild(nameElement);
      championDiv.appendChild(tagsElement);
      championDiv.appendChild(detailsElement);
      container.appendChild(championDiv);
    }
  })
  .catch(error => {
    console.error("Error al obtener el JSON: ", error);
  });
