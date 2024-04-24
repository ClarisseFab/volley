function ajoutEquipe() {
    let ul = document.getElementById("list-equipes");
    let li = document.createElement("li");
    let nomEquipe = document.getElementById('team-name').value
    li.appendChild(document.createTextNode(nomEquipe));
    ul.appendChild(li);
    document.getElementById('team-name').value = ""; 
  }


