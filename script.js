function ajouterEquipeDansListe(nomEquipe) {
  let ul = document.getElementById("list-equipes");
  let nombreEquipes = ul.getElementsByTagName("li").length
  let li = document.createElement("li");    
  if(nomEquipe != "" && nombreEquipes <15)
  {
    li.appendChild(document.createTextNode(nomEquipe));
    li.setAttribute("contenteditable", "true");
    li.style.marginRight= "5%";
    ul.appendChild(li);
  }
}

function ajoutEquipe(){
  let inputName = document.getElementById('team-name');
  let nomEquipe = inputName.value; 
  ajouterEquipeDansListe(nomEquipe); 
  inputName.value = ""; 
  inputName.focus();
}

function recupererEquipes(){
  let listLi = document.getElementById("list-equipes").getElementsByTagName("li");
  let arrayEquipes = [];
  for(var j=0;j<listLi.length;j++){
    arrayEquipes.push(listLi[j].innerHTML); 
  }
  return arrayEquipes;
}


function chunkArray(myArray, chunk_size){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  
  for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index+chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
  }

  return tempArray.reverse();
}

function shuffleArray(array){
  for (let i = array.length - 1; i > 0; i--) { 
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
  return array;
}

function creerPoules(){
  resetPoule();
  let array = recupererEquipes();
  if (array.length<9){
      alert("ajoutez d'autres équipes"); 
  } 
  else{
    let shuffledArray = shuffleArray(array);
    let arrayCoupe = chunkArray(shuffledArray, shuffledArray.length/3);
    afficherPoule(arrayCoupe);    
  }
}

function afficherPoule(listeEquipesParPoule){
  for(let i=0; i<listeEquipesParPoule.length; i++){
    let pouleUl =  document.getElementById(`ulPoule${i+1}`);
    let poule = listeEquipesParPoule[i];
    for(let j=0; j< poule.length; j++){
      let nomEquipe = poule[j];
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(nomEquipe));
      pouleUl.appendChild(li);
    }
  }
}

function resetPoule(){
for(let i=0; i<3; i++){
  document.getElementById(`ulPoule${i+1}`).innerHTML = "";
}
}

function test(){
  resetPoule();
  document.getElementById("list-equipes").innerHTML = "";
  let listeEquipesDispo = ["les Loulous", "les Mammouths", "Clacla et les autres", "Asul", "les Ouineurs", "Service Out", "Red Falcon", "Ceci est un nom d'équipe", "Pas de sac plastique", "Ptit colibri", "Jeanne et Serge", "les Girlz", "Tout taper", "Grosse boitasse"];
  let randomNumber = Math.floor(Math.random() * (15 - 9 + 1) + 9);
  let listeEquipesSelectionnees = shuffleArray(listeEquipesDispo);
  listeEquipesSelectionnees =  listeEquipesDispo.slice(0, randomNumber+1);
  for(let i=0; i <listeEquipesSelectionnees.length-1; i++){
    ajouterEquipeDansListe(listeEquipesSelectionnees[i]);
  }
}
