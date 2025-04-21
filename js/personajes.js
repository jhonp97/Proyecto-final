
// este es el codigo para el lightbox, que es la ventana que se abre cuando se hace click en una imagen
// primero declaro las variables que voy a usar
// luego recorro el array de las imagenes y le agrego un evento de click a cada una
// cuando se hace click en una imagen, se le agrega la clase active a la imagen que se clickeó y se le quita a las demas
// luego se le agrega la clase openLightbox al lightbox y se le pone la imagen grande, el alt y el data-description de la imagen clickeada
// si el ancho de la pantalla es menor a 768px, se le agrega un filtro al grid y un fondo al main
// al cerrar el lightbox vuelvo todo a su estado original

const main = document.getElementById("main");
const grid = document.querySelector(".Main-grid");
const gridImg = document.querySelectorAll(".Main-grid--img");
const lightbox =document.getElementById("lightbox");
const btnClose = document.querySelector(".Lightbox-close");
const imgGrande = document.getElementById("imagenGrande");
const lightboxTitle = document.querySelector(".Lightbox-title");
const lightboxText = document.querySelector(".Lightbox-text");

gridImg.forEach((img, i) =>{
    img.addEventListener("click", ()=>{
        gridImg.forEach(imagen => {imagen.classList.remove("active")}) // quito la clase
        img.classList.add("active"); // le agrego la clase a la imagen que se hizo el click
        lightbox.classList.add("openLightbox"); // se le agrega la clase nueva
        imgGrande.src = img.src; // ponemos la imagen clicada en la grande
        imgGrande.alt = img.alt; // a la imagen grande le puse el alt de la img original
        lightboxTitle.textContent = img.alt; // el titulo será el alt de la imagen
        // console.log(img.getAttribute("data-description")); 
        lightboxText.textContent = img.getAttribute("data-description"); // el texto será el data-description de la imagen
        
        if(document.body.clientWidth < 768){ // mientras sea menor a 768px aplicp el filtro
            grid.style.filter = "blur(5px)";
            main.style.background= "rgba(107, 107, 107, 0.5)"
            
        }
    })
})

btnClose.addEventListener("click", ()=>{ // se cierra el lightbox y vuelven los estilos originales
    lightbox.classList.remove("openLightbox");
    grid.style.filter = "none";
    main.style.background= "none"
})