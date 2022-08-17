//Codigo desplegar submenu

$(document).ready(function(){
    $('.menu-ul li:has(ul)').click(function(e){
        e.preventDefault();

        if($(this).hasClass('activado')){
            
       }else {
           $('.menu-ul li ul').slideUp();
           $('.menu-ul li').removeClass('activado');
           $(this).addClass('activado');
           $(this).children('ul').slideDown();
       }
    });
});

//Codigo Foto

const $imagenUploader = document.querySelector("#imagenuploader"),
  $imageContainer = document.querySelector("#imagecontainer");

// Escuchar cuando cambie
$imagenUploader.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $imagenUploader.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imageContainer.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $imageContainer.src = objectURL;
});