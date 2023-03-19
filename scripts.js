function validarDatos() {
  window.event.preventDefault();

  if (document.form.nombre.value == "") {
    alert("El campo Nombre es obligatorio");
    document.form.nombre.focus();
  } else if (document.form.email.value == "") {
    alert("El campo E-mail es obligatorio");
    document.form.email.focus();
  } else if (document.form.asunto.value == "") {
    alert("El campo Asunto es obligatorio");
    document.form.asunto.focus();
  } else if (
    document.form.mensaje.value == "" ||
    document.form.mensaje.value.length < 30
  ) {
    alert("El campo Mensaje es obligatorio y debe contener un mínimo de 30 carateres");
    document.form.mensaje.focus();
  } else if (
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
  ) {
    alert("Formato de e-mail inválido");
  }
}
document.querySelector("form").addEventListener("submit", validarDatos);

///////////////////////////////////////////////////////////////////////
// DROPDOWN MENU

function seleccionar() {
  document.getElementById("content").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".menu-link")) {
    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

////////////////////////////////////////////////////////////////////
// PRUEBAS FALLIDAS
///////////////////////////////////////////////////////////////////

// let menuVisible = false;
// //Función que oculta o muestra el menu
// function mostrarOcultarMenu(){
//     if(menuVisible){
//         document.getElementById("dropdown").classList ="";
//         menuVisible = false;
//     }else{
//         document.getElementById("dropdown").classList ="responsive";
//         menuVisible = true;
//     }
// }

// function seleccionar(){
//     //oculto el menu una vez que selecciono una opcion
//     document.getElementById("dropdown").classList = "";
//     menuVisible = false;
// }



////////////////////////////////////////////////////////////////////////

// let MenuVisible = false;

// //Funcion que oculta o muestra el Menu
// function MostrarOcultarMenu(){
//     if(MenuVisible){
//         document.getElementById("content").classList="";
//         MenuVisible = false;
//     }
//     else{
//         document.getElementById("content").classList="menu-content";
//         MenuVisible = true;
//     }
// }

// // Oculta el Menu cuando selecciono un item

// function seleccionar(){
//     document.getElementById("content").classList="";
//     MenuVisible = false;
// }

////////////////////////////////////////////////////////////////////////////////////////


// const navbar = document.querySelector(".navbar");
// const menu = document.querySelector(".navbar__menu");
// const links = document.querySelector(".navbar__links");
// const sections = document.querySelectorAll("section");
// const config = {
//     rootMargin: "0px",
//     threshold: [0.6, 0.9],
// };

// function handleLlinks() {
//     if (window.innerWidth <= 678) {
//         links.classList.toggle("visible");
//     }
// }

// menu.addEventListener("click", handleLlinks);
// links.addEventListener("click", handleLlinks);

// window.addEventListener("scroll", function () {
//     window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
//     window.scrollY < 100 && (navbar.style.background = `transparent`);
// });

// let observer = new IntersectionObserver(function (entries, self) {
//     entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//         intersectionHandler(entry);
//         }
//     });
// }, config);

// sections.forEach((section) => {
//     observer.observe(section);
// });

// function intersectionHandler(entry) {
//     const id = entry.target.id;
//     const currentlyActive = document.querySelector(".navbar__links .active");
//     const shouldBeActive = document.querySelector(
//     ".navbar__links [data-ref=" + id + "]"
//     );

//     if (currentlyActive) {
//         currentlyActive.classList.remove("active");
//     }
//     if (shouldBeActive) {
//         shouldBeActive.classList.add("active");
//     }
// }