let lista = document.querySelector(".contenido__valora__lista");
let dato = document.querySelector(".contenido__dato");
let valor = document.querySelector(".contenido__valora__boton");
let form = document.querySelector(".contenido__valora");

//------------HTML "INDEX"---------//
// -------Dar EVENT a todo el UL----//
if (lista !== null) {
  lista.addEventListener("click", (e) => {
    
    // Recorrer etiqueta LI y borrar CLASS
    lista.childNodes.forEach((element) => {
      if (
        element.tagName === "LI" &&
        element.classList.contains("contenido__valora__opciones--elegir") === true) 
      {
        element.classList.remove("contenido__valora__opciones--elegir");
      }
    }); //----------END REMOVE-----------//


    // Condicion de AFECTAR solo a la etiqueta LI y agregar EVENT
    if (e.target && e.target.tagName === "LI") {
      e.target.classList.toggle("contenido__valora__opciones--elegir");
      valor.value = e.target.value;
      // console.log(valor.value);
      form.setAttribute("action", "gracias.html");
    }
  }); //------------END EVENT UL---------//


  //----Verificar ATRIBUTO "Action" y restringir envio de datos---//


  form.addEventListener("submit", (e) => {
    let existe = form.getAttribute("action");
    if (existe === "") {
      e.stopPropagation();
      alert("Debe seleccionar una opción. Gracias");
    }
  });
}

//------------END HTML "INDEX"---------//

// HTML "GRACIAS" obteniendo dato del URL y mostrandolo en DOM-------//

if (dato !== null) {
  let url = document.URL;

  let i = url.indexOf("=") + 1;
  let num = url[i];
  console.log(num);

  document.addEventListener("DOMContentLoaded", (e) => {
    dato.textContent = `You selected ${num} out of 5`;
  });
} //---------------------END HTML "GRACIAS"--------------------------//
