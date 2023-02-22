//https://www.themoviedb.org/documentation/api
//key= 04495d415fb68e0f9f995482a0e44084
let url = "https://api.themoviedb.org/3/movie/popular?api_key=04495d415fb68e0f9f995482a0e44084";
const btnSiguiente = document.querySelector(".btnSiguiente");
const btnAnterior = document.querySelector(".btnAnterior");
const buscarPelicula = document.querySelector(".buscarPelicula");
const inputBuscar = document.querySelector(".inputBuscar");
let paginaActual =1, totalPaginas=0;

let templateMovie = (nombre,imagen) => `<div class="card">
            <div class="card-info" style="background-image: url('https://image.tmdb.org/t/p/w500${imagen}')">

                <p class="title">${nombre}</p>
            </div>
        </div>`;
const container = document.querySelector(".container");

const cargarpeliculas = (direccionPeliculas) => {fetch(direccionPeliculas)
    .then(res => res.json())
    .then(e => {
        container.innerHTML = "";
        totalPaginas = e.total_pages;
        console.log("total paginas"+totalPaginas);
        console.log("pagina actual "+paginaActual);
        e.results.forEach(element => {
            container.innerHTML += templateMovie(element.title, element.poster_path);
        });
    
    })
    .catch(e => console.log(e));
}

cargarpeliculas(url);

btnSiguiente.addEventListener("click", () => paginaActual === totalPaginas ? alert("No se puede avanzar mas") : cargarpeliculas(`${url}&page=${paginaActual++}`));
btnAnterior.addEventListener("click", () => paginaActual===1 ? alert("No se puede retroceder mas") : cargarpeliculas(`${url}&page=${paginaActual--}`));
buscarPelicula.addEventListener("click", () => {
    paginaActual=1;
    url=`https://api.themoviedb.org/3/search/movie?query=${inputBuscar.value}&api_key=04495d415fb68e0f9f995482a0e44084`;
    cargarpeliculas(url)
});
//buscar
//https://api.themoviedb.org/3/search/movie?query=pantera&api_key=04495d415fb68e0f9f995482a0e44084