//obtengo la referencia del tag button en html//

const buttonEnHtml = document.getElementById('btnBusqueda')


//creo la función//

function buscar() {      


    const claveEnHtml = document.getElementById('claveDeBusqueda')
    
    const h4EnHtml = document.getElementById('textoBuscado');
    
    h4EnHtml.innerText = 'Encontramos 2 items para ' + claveEnHtml.value;

} 

//asigno al botón "Buscar" un evento click//
buttonEnHtml.addEventListener('click', buscar);  



 