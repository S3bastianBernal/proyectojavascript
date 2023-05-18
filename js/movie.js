console.log(animeMovie);

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");


animeMovie.forEach((opcionAnime)=>{
    const opcion = document.createElement("option");
    opcion.value = opcionAnime.nombre;
    opcion.textContent = opcionAnime.nombre;
    document.querySelector("#nombre").appendChild(opcion);
})

nombre.addEventListener("input",(e)=>{
    busqueda.nombre = e.target.value;
    filtrarAnime();  
})

genero.addEventListener("input",(e)=>{
    busqueda.genero = e.target.value;
    filtrarAnime();
});

document.addEventListener("DOMContentLoaded", ()=>{
    Movie(animeMovie)
})

function Movie(animeMovie) {
    const contenedor = document.querySelector(".peliculas");
    limpiar()
    animeMovie.forEach((movies) => {
        const movieHTML = document.createElement("p")
        const {imagen, nombre, genero, link} = movies;

        movieHTML.innerHTML = `
        <div class="caratula">
            <a target="_blank" href="${link}" nombre="${nombre}" genero="${genero}"><img class="I"  src="./img/${imagen}"  alt=""></a>
        </div>
        `
        contenedor.appendChild(movieHTML);
    });

}

const busqueda = {
    nombre: "",
    genero: "",
}

function filtrarAnime() {
    const resultado = animeMovie
    .filter(filtrarNombre)
    .filter(filtrarGenero)
    Movie(resultado);
    console.log(resultado);
}

function filtrarNombre(movies) {
    if (busqueda.nombre) {
        return movies.nombre === busqueda.nombre
    }
    return movies;
}

function filtrarGenero(movies) {
    if (busqueda.genero) {
        return movies.genero === busqueda.genero
    }
    return movies;
}

function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}