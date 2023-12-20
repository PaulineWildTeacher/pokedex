import { pokemons } from "./assets/pokemon.js";

const pokemonContainer = document.querySelector("#pokemon-container");

function displayPokemon() {
  pokemons.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    pokemonContainer.appendChild(pokemonCard);

    const pokemonName = document.createElement("h1");
    pokemonName.classList.add("pokemon-name");
    pokemonName.innerHTML = pokemon.name;
    pokemonCard.appendChild(pokemonName);

    const pokemonPicture = document.createElement("img");
    pokemonPicture.src = pokemon.img;
    pokemonPicture.classList.add("pokemon-profile");
    pokemonCard.appendChild(pokemonPicture);

    const elementTypesContainer = document.createElement("div");
    elementTypesContainer.classList.add("types-container");
    pokemonCard.appendChild(elementTypesContainer);

    pokemon.types.map((type) => {
      const elementButton = document.createElement("button");
      const elementType = document.createElement("span");
      elementType.classList.add("material-symbols-outlined");

      const typeIcon = getTypeIcon(type);
      elementType.innerHTML = typeIcon;

      elementButton.appendChild(elementType);
      elementTypesContainer.appendChild(elementButton);

      elementButton.addEventListener("click", function (event) {
        event.preventDefault();
        filterByType(type);
      });
    });
  });
}

function getTypeIcon(type) {
  switch (type) {
    case "Electrik":
      return "bolt";
    case "Plante":
      return "Psychiatry";
    case "Feu":
      return "local_fire_department";
    case "Eau":
      return "water_drop";
    case "Insecte":
      return "emoji_nature";
    case "Vol":
      return "air";
    case "Poison":
      return "skull";
    default:
      return "";
  }
}

function filterByType(selectedType) {
  const pokemonCards = document.querySelectorAll(".pokemon-card");

  pokemonCards.forEach((pokemonCard) => {
    const pokemonName = pokemonCard.querySelector(".pokemon-name").innerText;
    const isHidden = pokemons.some(
      (pokemon) =>
        pokemon.name === pokemonName && !pokemon.types.includes(selectedType)
    );

    if (isHidden) {
      pokemonCard.style.display = "none";
    } else {
      pokemonCard.style.display = "flex";
    }
  });
}

const allPokemons = document.getElementById("all-pokemon-display");
allPokemons.addEventListener("click", () => {
  const pokemonCards = Array.from(
    document.getElementsByClassName("pokemon-card")
  );

  pokemonCards.forEach((card) => {
    card.style.display = "unset";
  });
});

displayPokemon();
