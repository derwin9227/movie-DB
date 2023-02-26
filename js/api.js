//https://www.themoviedb.org/documentation/api
//key= 04495d415fb68e0f9f995482a0e44084
let url = "https://api.themoviedb.org/3/movie/popular?api_key=04495d415fb68e0f9f995482a0e44084";
const btnSiguiente = document.querySelector(".btnSiguiente");
const btnAnterior = document.querySelector(".btnAnterior");
const buscarPelicula = document.querySelector(".buscarPelicula");
const inputBuscar = document.querySelector(".inputBuscar");
let paginaActual=1, totalPaginas=0;

let templateMovie = (nombre,imagen,average) => `
        <div class="wrapper">
            <img class="banner-image" src="https://image.tmdb.org/t/p/w500${imagen}">
                <span class="average">${average}</span>
                <h3>${nombre}</h3>
            </div>
        </div>`

const container = document.querySelector(".container");

const cargarpeliculas = (direccionPeliculas) => {fetch(direccionPeliculas)
    .then(res => res.json())
    .then(e => {
        container.innerHTML = "";
        totalPaginas = e.total_pages;
           e.results.forEach(element => {
                if(element.poster_path!==null)                
                    container.innerHTML += templateMovie(element.title, (element.poster_path=null ? imagen="No hay imagen para mostrar" : element.poster_path), element.vote_average.toFixed(1));
                    console.log(element);
            });
    })
    .catch(e => console.log(e));
}

cargarpeliculas(url);

btnSiguiente.addEventListener("click", () => {
    if(paginaActual === totalPaginas){
        alert("No se puede avanzar mas")
    }
    else{
            paginaActual++;
            cargarpeliculas(`${url}&page=${paginaActual}`);
        }
});

btnAnterior.addEventListener("click", () => {
    if(paginaActual===1)
        alert("No se puede retroceder mas")
    else{
        paginaActual--;
        cargarpeliculas(`${url}&page=${paginaActual}`)
    }
});

buscarPelicula.addEventListener("click", () => {
    paginaActual=1;
    url=`https://api.themoviedb.org/3/search/movie?query=${inputBuscar.value}&api_key=04495d415fb68e0f9f995482a0e44084`;
    cargarpeliculas(url)
});
inputBuscar.addEventListener("keypress", key => {
    if(key.key==="Enter"){
    paginaActual=1;
    url=`https://api.themoviedb.org/3/search/movie?query=${inputBuscar.value}&api_key=04495d415fb68e0f9f995482a0e44084`;
    cargarpeliculas(url)}
});