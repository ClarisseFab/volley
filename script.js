function ajoutEquipe() {
    let ul = document.getElementById("list-equipes");
    let li = document.createElement("li");
    let inputName = document.getElementById('team-name');
    let nomEquipe = inputName.value
    if(nomEquipe != "")
    {
      li.appendChild(document.createTextNode(nomEquipe));
      ul.appendChild(li);
    }
    inputName.value = ""; 
    inputName.focus();
  }


