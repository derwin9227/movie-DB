//https://www.themoviedb.org/documentation/api
//key= 04495d415fb68e0f9f995482a0e44084

let templateMovie = (nombre,imagen) => `<div class="card">
            <div class="card-info" style="background-image: url('https://image.tmdb.org/t/p/w500${imagen}')">

                <p class="title">${nombre}</p>
            </div>
        </div>`;
const container = document.querySelector(".container");

const cargarpeliculas = () => {fetch("https://api.themoviedb.org/3/movie/popular?api_key=04495d415fb68e0f9f995482a0e44084")
    .then(res => res.json())
    .then(e => {
        e.results.forEach(element => {

            container.innerHTML += templateMovie(element.title, element.backdrop_path);
            console.log(element);
        });
    })
    .catch(e => console.log(e));
}

cargarpeliculas();