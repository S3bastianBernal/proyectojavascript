console.log(mangas);

const genero=document.querySelector('#genero')


document.addEventListener("DOMContentLoaded", ()=>{
    insertarHTML(mangas)
})

function insertarHTML(mangas) {

    const contenido=document.querySelector('#body-manga')
    limpiar()
    mangas.forEach(e => {
        const {nombre, descripcion, link, img}=e
        const ingresarHTML=document.createElement('p')
        ingresarHTML.innerHTML=`
        <div id="algo" class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                        <a target="_blank" href="${link}"><button>VER CAPITULOS</button></a>
                    </div>
                </div>
            </div>
        </div> `
      contenido.appendChild(ingresarHTML)
    });
}
genero.addEventListener("input",(e)=>{
    busqueda.genero = e.target.value;
    filtrarManga();
});
search.addEventListener('input', (e)=>{
    busqueda.search = e.target.value;
    filtrarManga()
})
function filtrarManga() {
    const resultado = mangas
    .filter(filtrarGenero)
    .filter(filtrarSearch)
    insertarHTML(resultado)
    if (resultado.length){
        insertarHTML(resultado);
    }
    else{
        notResult();
    }
    
}
const busqueda = {
    genero: "",
    nombre:"",
    search:"",
}
function filtrarGenero(mangas) {
    if (busqueda.genero){
       return mangas.genero === busqueda.genero
    }
    return mangas;
}
function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}
function filtrarSearch(mangas) {
    if (busqueda.search){
        return mangas.nombre.includes(busqueda.search)
    }
    return mangas
}
function notResult() {
    limpiar();
    const notResult = document.createElement('p')
    notResult.classList.add('alert')
    notResult.appendChild(document.createTextNode('Result Not Found'))
    document.querySelector('#body-manga').appendChild(notResult)
}