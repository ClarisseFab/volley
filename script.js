function ajoutEquipe() {
    let ul = document.getElementById("list-equipes");
    let nombreEquipes = ul.getElementsByTagName("li").length
    let li = document.createElement("li");
    let inputName = document.getElementById('team-name');
    let nomEquipe = inputName.value
    if(nomEquipe != "" && nombreEquipes <15)
    {
      li.appendChild(document.createTextNode(nomEquipe));
      ul.appendChild(li);
    }
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

    return tempArray;
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
  for (let i=1; i <=3; i++){
    document.getElementById(`poule${i}`).innerHTML = "";
  }
}

function creerPoules(){
  resetPoules();
  let array = recupererEquipes();
  if (array.length<9){
    alert("ajoutez d'autres équipes"); 
  } 
  else{
    let shuffledArray = shuffleArray(array);
    let arrayCoupe = chunkArray(shuffledArray, shuffledArray.length/3);
    console.log(arrayCoupe); 
    afficherPoules(arrayCoupe); 
  }
}

