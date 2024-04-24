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

function creerPoules(){
    let array = recupererEquipes();
    if (array.length<9){
        alert("ajoutez d'autres équipes"); 
    } 
    else{
     let shuffleArray = shuffleArray(array);
     let arrayCoupe = chunkArray(shuffleArray, shuffleArray.length/3);
     console.log(arrayCoupe); 
    }
}

