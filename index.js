const startersWrapper = document.getElementById("starters-wrapper");
const selectedDiv = document.getElementById("selected");
const selectedImg = document.getElementById("selected-img");
const selectedName = document.getElementById("selected-name");
const confirmButton = document.getElementById("confirm-button");
confirmButton.style.opacity = "0";

class Pokemon {
    constructor(name, type, attacks, xp = 0) {
        this.name = name;
        this.type = type;
        this.attacks = attacks;
        this.xp = xp;
     }
 }

let player;
let charmander = new Pokemon("Charmander", ["fire"], ["scratch"]);
let squirtle = new Pokemon("Squirtle", ["water"], ["tackle"]);
let bulbasaur = new Pokemon("Bulbasaur", ["fire"], ["tackle"]);
let starters = [charmander, squirtle, bulbasaur];

starters.forEach((pokemon) => {
    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("starter-div");
    let img = document.createElement("img");
    img.setAttribute("src", "../assets/pokeball.png");
    img.classList.add("starter-img");
    img.addEventListener("click", () => {
        confirmButton.style.opacity = "1";
        // selectedDiv
        selectedImg.setAttribute("src", `/assets/${pokemon.name}.png`);
        selectedName.innerHTML = `${pokemon.name}`;
    });
    wrapperDiv.appendChild(img);
    startersWrapper.appendChild(wrapperDiv);
});

function choosePokemon(pokemon) {
    switch (pokemon) {
        case 1:
            player = charmander;
            break;
        case 2:
            player = squirtle;
            break;
        case 3:
            player = bulbasaur;
            break;
     }
}