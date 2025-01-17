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
}

displayPokemonData();
