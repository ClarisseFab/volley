function ajoutEquipe() {
    let inputName = document.getElementById('team-name');
    let nomEquipe = inputName.value
    ajouterLiEquipe(nomEquipe);
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

function afficherPoules(array){
  array.forEach((element,index) => {
    let divPoule = document.getElementById(`poule${index+1}`);
    let poule = document.createElement('ul');
    for (let i = 0; i < element.length; i++) {
      let item = document.createElement('li');
      let nomEquipePoule = element[i]; 
      // Set its contents:
      item.appendChild(document.createTextNode(nomEquipePoule));
      // Add it to the list:
      poule.appendChild(item);
      }
    divPoule.appendChild(poule); 
  });
}

function resetPoules(){
  for (let i=1; i <=4; i++){
    document.getElementById(`poule${i}`).innerHTML = "";
  }
}

function creerPoules(){
  resetPoules();
  let array = recupererEquipes();
  if (array.length<16){
    alert("Merci d'ajouter d'autres équipes : le tournoi se fait avec 16 équipes !"); 
  } 
  else{
    let shuffledArray = shuffleArray(array);
    let arrayCoupe = chunkArray(shuffledArray, shuffledArray.length/4);
    console.log(arrayCoupe); 
    afficherPoules(arrayCoupe); 
    lockPoules(); 
  }
}

function lockPoules(){
  let btnReset = document.getElementById("reset"); 
  document.getElementById("btn-poules").setAttribute('disabled', '');
  btnReset.classList.remove('fa-unlock'); 
    btnReset.classList.add('fa-lock'); 
}

function unlockPoules(){
  let btnReset = document.getElementById("reset"); 
  document.getElementById("btn-poules").removeAttribute('disabled');
  btnReset.classList.remove('fa-lock'); 
    btnReset.classList.add('fa-unlock'); 
}

function toggleVerrouillage(){
  let btnReset = document.getElementById("reset"); 
  let isUnlocked = btnReset.classList.contains('fa-unlock');
  if (isUnlocked){
    lockPoules();  
  }
  else {
    unlockPoules(); 
  }
}

function test(){
  unlockPoules();
  resetPoules();
  document.getElementById("list-equipes").innerHTML = "";
  const toutesLesEquipes = ["Polo", "P'tit Sherlock", "Polo le ptit homme de ménage", "Polo le ptit chef", "Polochon", "Polo apprend à bloquer", "Polo a mal au dos", "Poli", "Polo le ptit mique", "Clacla la GRANDE volleyeuse", "Asul 5", "Asul 2", "Les zippeuses", "Asul 16", "Fred", "Asul 1", "Asul 3", "Asul 7", "Asul 9", "Asul X"]
  shuffleArray(toutesLesEquipes); 
  equipesSelectionnees = toutesLesEquipes.slice(0,16); 
  equipesSelectionnees.forEach(nomEquipe => {
    ajouterLiEquipe(nomEquipe); 
  });
}

function ajouterLiEquipe(nomEquipe){
  let ul = document.getElementById("list-equipes");  
  let nombreEquipes = ul.getElementsByTagName("li").length;
  if(nomEquipe != "" && nombreEquipes <16)
  {
    let li = document.createElement("li");
    li.setAttribute("contentEditable", true); 
    li.appendChild(document.createTextNode(nomEquipe));
    ul.appendChild(li);
  }
}
