/* 3. event listeners */
document.addEventListener("DOMContentLoaded",()=>{
    mirarProductos(productos)
    SelectProducto();
    console.log(paramet);
})

productos.forEach((OpcionProducto)=>{
  const opcion = document.createElement('option');
  opcion.value = OpcionProducto.nombre;
  opcion.textContent = OpcionProducto.nombre;
  document.querySelector('#nombre').appendChild(opcion)
})
/* 4. funcion para inyectar dinamicamente html */
function mirarProductos(productos) {

/* 5. */
const contenido = document.querySelector('#tarjetas');
/* 6. */
limpiar()
productos.forEach((tienda)=>{
    const{nombreProducto,image,link,precioTexto,informacion,edicion,image2,image3,id} = tienda
    const camerHTML = document.createElement('p')
    camerHTML.innerHTML = ` 
    <div class="tarjeta">
      <div class="cara frente">
        <img src=${image} alt="imagen producto">
        <h4>${precioTexto}</h4>
      </div>
      <div class="cara atras">
        <h3>${nombreProducto}</h3>
        <p>${informacion}</p>
        <div class="comprar">
          <a class="btn btn-primary" target="_blank" href="${link}">comprar</a>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" imagen2="${image2}" imagen='${image}' imagen3='${image3}' nombre='${nombreProducto}'>
          Mas Fotos
          </button>
          <a class="btn btn-primary boton" link="${link}" id="${id}" >Agregar a Lista de Deseos</a>
        </div>
      </div>
    </div>`
    contenido.appendChild(camerHTML)
})
}

const Anime = document.querySelector('#Anime')
const nombre = document.querySelector('#nombre')
const edicion = document.querySelector('#edicion')




const paramet = {
    Anime: "",
    nombre: "",
    edicion: ""
    }


    Anime.addEventListener('input',(e)=>{
      paramet.Anime = e.target.value
      filtrarProducto()
  })

  nombre.addEventListener('input',(e)=>{
    paramet.nombre = e.target.value
    filtrarProducto()
})

  edicion.addEventListener('input',(e)=>{
    paramet.edicion = e.target.value
    filtrarProducto()
  })
  

  function filtrarProducto() {
    const resultado = productos
    .filter(filtrarAnime)
    .filter(filtrarNombre)
    .filter(filtrarEdicion)
    console.log(resultado);
    mirarProductos(resultado);
    
}

function filtrarAnime(tienda) {
  if (paramet.Anime) {
      return tienda.Anime === paramet.Anime
  }
  return tienda
}
function filtrarNombre(tienda){
  if (paramet.nombre){
    return tienda.nombre == paramet.nombre
  }
  return tienda
}

function filtrarEdicion(tienda){
  if (paramet.edicion){
    return tienda.edicion == paramet.edicion
  }
  return tienda
}
  
function limpiar(){
  let m=document.querySelectorAll('p')
  for (let i = 0; i < m.length; i++){
      m[i].remove()
  }   
} 



const tbody = document.querySelector('#infoTr')
const rowModal = document.createElement('th')
const title = document.querySelector('#exampleModalLabel')
function SelectProducto(){
    const camperDetails = document.querySelector('#tarjetas')
    camperDetails.addEventListener('click', loadDetails);
}

function loadDetails(e){
  const imagen = e.target.getAttribute('imagen');
  const imagen2 = e.target.getAttribute('imagen2')
  const imagen3 = e.target.getAttribute('imagen3')
  const nombreProducto = e.target.getAttribute('nombre');
  title.textContent = `${nombreProducto}`
  rowModal.innerHTML = `

  <td>
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${imagen}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${imagen2}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${imagen3}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </td>
  `;
  tbody.appendChild(rowModal)
}


/* Guardar */

const modalDeseos = document.querySelector("#tarjetas")
let arrayCards = [];
const tbodie = document.querySelector('#tbodie')
const deleteListCards = document.querySelector('#deleteListCards')
const cleanCard = document.querySelector('#cleanCard')
const comprado= document.querySelector('#compras')

modalDeseos.addEventListener('click',selectDeseos);
deleteListCards.addEventListener('click',deleteCards);
cleanCard.addEventListener('click',trashCard)
comprado.addEventListener('click', comprarTodo)

function selectDeseos(e){
  e.preventDefault
  if(e.target.classList.contains("boton")){
    const figuraCard = e.target.parentElement.parentElement.parentElement;
    console.log(figuraCard);
    details(figuraCard)
  }
}

function details(figuraCard){
  const deseoDetails = {
    imagen: figuraCard.querySelector('img').src,
    precio: figuraCard.querySelector('h4').textContent,
    nombre: figuraCard.querySelector('h3').textContent,
    detalle: figuraCard.querySelector('p').textContent,
    id: figuraCard.querySelector('.boton').getAttribute('id'),
    link: figuraCard.querySelector('.boton').getAttribute('link')
  }
  arrayCards = [...arrayCards, deseoDetails]
  console.log(arrayCards);

  injectingDeseosHtml()
}

function deleteCards(e){
  if(e.target.classList.contains("deleteCard")){
    const cardToDelete = e.target.getAttribute("id");
    console.log(cardToDelete);
    arrayCards = arrayCards.filter((pd)=> pd.id !== cardToDelete)
    injectingDeseosHtml()
  }
}



function injectingDeseosHtml() {
  cleanHtml()
  arrayCards.forEach((arrayCard)=>{
    const {imagen,precio,nombre,detalle,id,link} = arrayCard
    const row = document.createElement("tr")
    row.innerHTML = `
    <td>
        <img src="${imagen}" width = "180px">
    </td>
    <td>
        ${nombre}
    </td>
    <td>
        ${precio}
    </td>
    <td>
        <a target="_blank" href="${link}" class="deleteCard btn btn-success" id="${id}">---<i class="bi bi-cart3"></i>---</a>
        <button  class="deleteCard btn btn-danger" id="${id}">---<i class="bi bi-trash3"></i>---</button>
    </td>
    `
   
    tbodie.appendChild(row)
  })
}

function trashCard(){
  arrayCards = [];
  cleanHtml();
  
}
function comprarTodo(e) {
  if (e.target.classList.contains('agregar')) {
    alert('Compra/s Realizada/s con exito')
    arrayCards = [];
    cleanHtml();
  }
}


function cleanHtml(){
  tbodie.innerHTML = "";
}
