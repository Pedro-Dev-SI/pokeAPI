
const pokemon = (num) => Math.floor(Math.random() * num + 1);

const btn = document.querySelector("#btn-generate");
const input = document.querySelector("#poke-place");
let listAbility = document.querySelector("#ability-list");
let textArea = document.querySelector("#text-area");

function createAbilities(abilities, textArea){
   abilities.forEach((ability) => {
      textArea.value = ability['ability'] ['name'] + " / " + textArea.value;
   })
   
}

function showImage(pokeID){
   let PokeImage = document.querySelector('#poke-img');
   PokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
}



btn.addEventListener("click", (event) => {

   let poke = pokemon(600);

   fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
   .then((response) =>{
      return response.json()
         .then((data) =>{
            input.value = data.name;
            console.log(data);
            let arrayAbilities = data.abilities

            if(textArea.value != null){
               textArea.value = " ";
            }
            
            createAbilities(arrayAbilities, textArea);
            showImage(poke)

         })
   })
   .catch((err) =>{
      console.log(err.message);
   })
})



