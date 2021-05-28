
const pokemon = (num) => Math.floor(Math.random() * num + 1);

const btn = document.querySelector("#btn-generate");
const input = document.querySelector("#poke-place");
let listAbility = document.querySelector("#ability-list");


function createAbilities(abilities, ul){
   abilities.forEach((ability) => {
      let abilityLi = document.createElement('li');
      abilityLi.classList.add('item');
      abilityLi.innerText = ability['ability'] ['name'];

      ul.append(abilityLi);
   })
   
}

function removeAbilities(abilities, ul){
   abilities.forEach((ability) => {
      let abilityLi = document.querySelector('li'); 
      ul.removeChild(abilityLi);
   })
   
}

function fixLenght(){

}


let auxArray = [3]

btn.addEventListener("click", (event) => {

   itens = document.querySelectorAll(".item");
   itens.textContent = "";
   

   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon(50)}/`)
   .then((response) =>{
      return response.json()
         .then((data) =>{
            input.value = data.name;
            console.log(data);
            let arrayAbilities = data.abilities
            
            createAbilities(arrayAbilities, listAbility);


         })
   })
   .catch((err) =>{
      console.log(err.message);
   })
})



