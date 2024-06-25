const contenuPanier = localStorage.getItem("contenuPanier");

const filmClick = JSON.parse(contenuPanier);

let html =  ` 
<article>   
<img src="${filmClick.Poster}" alt="">
<h2>${filmClick.Title}</h2>
<p>Date : ${filmClick.Year}</p>
<p>Langue : ${filmClick.Language}</p>
<p>Trophée : ${filmClick.Awards}</p>
</article>`;
document.getElementById("contenu").innerHTML += html

