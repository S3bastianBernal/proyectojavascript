const buscarAnime = document.querySelector("#buscarAnime")

/* buscarAnime.forEach((opcionAnime)=>{
    const opcion = document.createElement("option");
    opcion.value = opcionAnime.nombre;
    opcion.textContent = opcionAnime.nombre;
    document.querySelector("#buscarAnime").appendChild(opcion);
}) */

buscarAnime.addEventListener("keypress", (e)=>{
    busqueda.nombre = e.target.value;
    filtrarBuscador()
})

buscarAnime.addEventListener("keypress", (e)=>{
    registrar.nombre = e.target.value;
    filtrarSearch()
})

document.addEventListener('DOMContentLoaded', ()=>{
    showBuscador(buscador);
    showPelis(buscar)
    console.log(busqueda);
    console.log(registrar);
})

function showBuscador(buscador) {
    const contenedor = document.querySelector(".galeria");
    limpiar()
    
    buscador.forEach((search)=>{
        const buscarHTML = document.createElement("p")
        const {imagen, nombre, link} = search

        buscarHTML.innerHTML = `
        <div class="serie">
            <a target="_blank" href="${link}" nombre="${nombre}""><img class="I"  src="${imagen}"  alt=""></a>
        </div>
        `
        contenedor.appendChild(buscarHTML) 
        console.log();buscarHTML
    })
}

function showPelis(buscar) {
    const consola = document.querySelector(".peliculas");
    /* limpiar() */
    buscar.forEach((encontrar)=>{
        const encontrarHTML = document.createElement("p")
        const {imagen, nombre, link} = encontrar

    encontrarHTML.innerHTML = `
    <div class="caratula">
        <a target="_blank" href="${link}" nombre="${nombre}""><img class="I"  src="${imagen}"  alt=""></a>
    </div>
    `
    consola.appendChild(encontrarHTML)
    })
}


const busqueda = {
    nombre: ""
}

const registrar = {
    nombre: ""
}

function filtrarBuscador() {
    const resultado = buscador
    
    .filter(filtrarBuscar)
    
    showBuscador(resultado)
   
}

function  filtrarSearch() {
    const reset = buscar
    .filter(filtrarPelis)
    showPelis(reset)
}

function filtrarBuscar(search) {
    if (busqueda.nombre) {
        return search.nombre === busqueda.nombre
    }
    return search;
}

function filtrarPelis(encontrar) {
    if (registrar.nombre){
        return encontrar.nombre === registrar.nombre
    }
    return encontrar
}

function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}
