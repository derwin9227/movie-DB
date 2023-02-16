//https://www.themoviedb.org/documentation/api
//04495d415fb68e0f9f995482a0e44084

const cargarpeliculas = () => {fetch("https://api.themoviedb.org/3/movie/popular?api_key=04495d415fb68e0f9f995482a0e44084")
    .then(res => res.json())
    .then(e => {
        e.results.forEach(element => {
            console.log(`pelicula: ${element.title}`);
        });
    })
    .catch(e => console.log(e));
}

cargarpeliculas();