console.log(Series);

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');

Series.forEach((opcionAnime)=>{
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
    Serie(Series)
})

function Serie(Series) {
    const contenedor = document.querySelector(".galeria");
    limpiar()
    Series.forEach((series) => {
        const serieHTML = document.createElement("p")
        const {imagen, nombre, genero, link} = series;

        serieHTML.innerHTML = `
        <div class="serie">
            <a target="_blank" href="${link}" nombre="${nombre}" genero="${genero}"><img class="I"  src="${imagen}"  alt=""></a>
        </div>
        `
        contenedor.appendChild(serieHTML);
    });

}

const busqueda = {
    nombre: "",
    genero: "",
}

function filtrarAnime() {
    const resultado = Series
    .filter(filtrarNombre)
    .filter(filtrarGenero)

    Serie(resultado);
    console.log(resultado);
}

function filtrarNombre(series) {
    if (busqueda.nombre) {
        return series.nombre === busqueda.nombre
    }
    return series;
}

function filtrarGenero(series) {
    if (busqueda.genero){
       return series.genero === busqueda.genero
    }
    return series;
}

function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}