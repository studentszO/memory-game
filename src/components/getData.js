export default async function fetchPokemonData(pokemon) {
  if (!pokemon) return;
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!data.ok)
      throw new Error(`Failed fetching this pokémon: ${data.status}`);
    const dataStorage = await data.json();
    const neededData = {
      name: dataStorage.name,
      img: dataStorage.sprites.other.dream_world.front_default,
      id: dataStorage.id,
      clicked: false,
    };
    return neededData;
  } catch (error) {
    console.log(error);
  }
}
