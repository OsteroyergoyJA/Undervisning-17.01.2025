async function getPokemonData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  // console.log(data.results[131]);
  return data;
}

//getPokemonData();

async function displayPokemonData() {
  const id = 132; // 132 gives Ditto(array plassering fra API)
  const pokemonData = await getPokemonData(id);
  //console.log(pokemonData);
  //console.log(pokemonData.sprites);
  console.log(pokemonData.sprites.back_shiny);
  console.log(pokemonData.stats[1].base_stat); // attack number
  console.log(pokemonData.stats[1].stat.name); // attack name

  for (let i = 0; i < pokemonData.stats.length; i++) {
    const pokemonStats = pokemonData.stats[i];
    console.log(pokemonStats);
    console.log(pokemonStats.base_stat); // Attack number
    console.log(pokemonStats.stat.name); // attack name
  }

  const pokemonCard = `

  <div>
      <h2>${pokemonData.id}. ${pokemonData.name}</h2>
      <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
      <ul>
        ${pokemonData.stats.map((stat) => `
          <li>${stat.base_stat} ${stat.stat.name}</li>
        `).join('')}
      </ul>
    </div>
  `;


  console.log(pokemonCard);
  
  // const pokeDex = document.getElementById("pokedex");
  /*<div>
  <h2>
  ${pokemonData.id}. ${pokemonData.name}
  </h2>
  <img src="${pokemonData.sprites.front_default}"/s>
  <ul>
  `;
  <li>${pokemonStats.base_stats} ${pokemonStats.stat.name}</li>
  <li>${pokemonStats.base_stats} ${pokemonStats.stat.name}</li>
  <li>${pokemonStats.base_stats} ${pokemonStats.stat.name}</li>
  <li>${pokemonStats.base_stats} ${pokemonStats.stat.name}</li>
  <li>${pokemonStats.base_stats} ${pokemonStats.stat.name}</li>
  </ul>
  </div>
  // pokeDex.appendChild(pokemonCard.innerHTML);*/

  document.getElementById('pokedex').innerHTML = pokemonCard;
}

displayPokemonData();
