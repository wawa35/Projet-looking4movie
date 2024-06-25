
document.addEventListener('DOMContentLoaded', () => {
   const params = new URLSearchParams(window.location.search);
   const movieID = params.get('id');
   const filmChoisit = document.getElementById('filmChoisit');
  
   const apikey = "apikey=2fcfc3ea";

    if (movieID) {
      let URL = `https://www.omdbapi.com/?i=${movieID}&${apikey}`;

     function objStr(data) {
            const stringObj = JSON.stringify(data);
            localStorage.setItem("contenuPanier", stringObj);
        }
        fetch(URL)
        .then(response => {
            if (!response.ok) {
                    throw new Error('Erreur de réponse réseau');
                }
                return response.json();
            })
        .then(data => {
            if (data.Response === "False") {
                    filmChoisit.innerHTML = `<p>${data.Error}</p>`;
                }
                const movie = data;
                const HTML = `
                    <article>
                        <h2>${movie.Title} (${movie.Year})</h2>
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <p>Genre(s) : ${movie.Genre}</p>
                        <p>Durée : ${movie.Runtime}</p>
                        <p>Note IMDb : ${movie.imdbRating}</p>
                        <p>Résumé : ${movie.Plot}</p>
                    </article>
                         `;
                filmChoisit.innerHTML = HTML;
     objStr(data);
            })
        .catch(error => {console.error("Erreur:", error);
          filmChoisit.innerHTML = `<p>Une erreur est survenue. Veuillez réessayer plus tard.</p>`;
        });
    }
});