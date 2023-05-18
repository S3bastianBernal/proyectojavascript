const buscarCosplay = document.querySelector("#buscarCosplay")

buscarCosplay.addEventListener("input", (e)=>{
    SearchCosplay.nombreCosplay = e.target.value;
    filtrarBuscador()
})

document.addEventListener("DOMContentLoaded",()=>{
  mirarProductos(cosplay)
  SelectProducto();
})

function mirarProductos(cosplay) {
  const contenido = document.querySelector('#tarjetas');

  limpiar()
  cosplay.forEach((tienda)=>{
    const{nombreCosplay,image,link,precioTexto,informacion,edicion,image2,image3,id} = tienda
    const camerHTML = document.createElement('p')
    camerHTML.innerHTML = ` 
    <div class="tarjeta">
      <div class="cara frente">
        <img src=img/${image} alt="imagen producto">
        <h4>${precioTexto}</h4>
      </div>
      <div class="cara atras">
        <h3>${nombreCosplay}</h3>
        <p>${informacion}</p>
        <div class="comprar">
          <a class="btn btn-primary" target="_blank" href="${link}">comprar</a>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" imagen2="img/${image2}" imagen="img/${image}" imagen3="img/${image3}" nombre='${nombreCosplay}'>
          Mas Fotos
          </button>
          <a class="btn btn-primary boton" link="${link}" id="${id}" >Agregar a Lista de Deseos<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
        </svg></a>
        </div>
      </div>
    </div>`
    contenido.appendChild(camerHTML)
  })
  }

const SearchCosplay ={
    nombreCosplay: "",
    Anime: "",
    edicion: ""
}

function filtrarBuscador (){
    const resultar = cosplay
    .filter(filtrarCosplay)
    mirarProductos(resultar)
    if(resultar.length){
      mirarProductos(resultar)
    }else{
      notResult();
    }
    
}

function filtrarCosplay(tienda) {
    if (SearchCosplay.nombreCosplay) {
        return tienda.nombreCosplay.includes(SearchCosplay.nombreCosplay)
    }
    return tienda;
}

function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}

function notResult() {
  limpiar();
  const notResult = document.createElement('p')
  notResult.classList.add('alert')
  notResult.appendChild(document.createTextNode('Result Not Found'))
  document.querySelector('#tarjetas').appendChild(notResult)
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
const nombreCosplay = e.target.getAttribute('nombre');
title.textContent = `${nombreCosplay}`
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
      <a target="_blank" href="${link}" class="deleteCard btn btn-success" id="${id}">---<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="6" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>---</a>
      <button  class="deleteCard btn btn-danger" id="${id}">---<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>---</button>
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



