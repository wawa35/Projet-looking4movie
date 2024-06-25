let myButton = document.getElementById('myBtn').addEventListener('click',(event) => {
    event.preventDefault();

let reqMovie = document.getElementById('myInput').value;


let URL = `http://www.omdbapi.com/?s=${reqMovie}&apikey=2fcfc3ea`;

function getMyMovie(){ 
fetch(URL) 
.then(response => response.json()) 
.then(data => {
 let movies = data.Search;
    if(movies){
       document.getElementById('content').innerHTML ='';
    for (let myMovie of movies){
       let HTML = `
       <article>
       <a href ="./js2.html?id=${myMovie.imdbID}">
       <img src="${myMovie.Poster}" alt="${myMovie.Title}"/>
       </a>
       <h3>${myMovie.Title}(${myMovie.Year})</h3>
       <a href="./js2.html?id=${myMovie.imdbID}">Selectionner ce film</a>
        </article>
       `;
       document.getElementById("content").innerHTML += HTML; 
    }
  }else{
    document.getElementById("content").innerHTML = `<p>Aucun film trouvé</p>`
  }
})
.catch(error =>{
    console.error("Erreur :",error);
});
}
getMyMovie();
});