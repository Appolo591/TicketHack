const departure = document.querySelector('#champ1')
const arrival = document.querySelector('#champ2')
const date = document.querySelector('#champ3')
const result = document.querySelector('.resultSearch')
const { format } = require("date-fns")


console.log("connecté");
//adresse déploiement backend https://ticket-hack-backend-one.vercel.app/
// au click de la recherche, ressort tous les élements de la BDD en lien avec la recherche
document.querySelector('button[type="submit"]').addEventListener("click", function () {
  console.log("Click detected!");
  fetch('https://ticket-hack-backend-one.vercel.app/trip', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ departure : departure.value, arrival : arrival.value, date : date.value }),
	}).then(response => response.json())
		.then(results => {
      for(let data of results){
        result.innerHTML += `
        <div class="tripContainer">
          <div><p>${data.departure} > ${data.arrival}</p></div>
          <div>${format(data.date, "HH:MM")}</div>
          <div>${data.price}</div>
          <div><button class="bookBtn">Book</button></div>
        </div>
        `
        console.log(this)
      }
    })
})
// au click du book, ajoute les éléments dans la partie cart
//voir utilisation clé étrangère pour lien (moins ressourçovore)
//surement ajouter l'event listener à la création au dessus ^^^^
//évaluer si l'ajout a bien été fait
fetch('https://ticket-hack-backend-one.vercel.app/trip', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ _id }),
})

//pour cart et booking utiliser les clés pour rappatrier les infos et formater
// au click sur le delete de la partie cart, supprime le voyage ajouté dans le panier

// au click du purchase dans la partie cart, achète le voyage et l'ajoute dans la dernière page booking
