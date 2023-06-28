//----------    Menú Hamburguesa desplegable    ----------//
const iconoMenu = document.querySelector(".icono-menu");
const menu = document.querySelector(".cont-menu");
const menuMobile = document.querySelector(".icono-menu");

iconoMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuMobile.classList.toggle("active");
  document.body.classList.toggle("opacity");
});

//----------     Seccion Proyectos    ----------//
let proyectos = [
  {
    nombre: "Calculadora",
    img: "img/Calculadora.png",
  },
  {
    nombre: "Slider CoPa",
    img: "img/Slider.png",
  },
  {
    nombre: "",
    img: "https://em-content.zobj.net/source/skype/289/plus_2795.png",
  },
];

function crearHTMLProyectos(proyecto) {
  let nombreProyecto = document.createElement("h3");
  nombreProyecto.innerText = proyecto.nombre;

  let imagenProyecto = document.createElement("img");
  imagenProyecto.src = proyecto.img;
  imagenProyecto.alt = proyecto.nombre;

  let listItem = document.createElement("li");
  listItem.appendChild(nombreProyecto);
  listItem.appendChild(imagenProyecto);
  

  // Agregar evento de clic al elemento <li>
  listItem.addEventListener("click", function() {
    if (proyecto.nombre === "Calculadora") {
      window.open("https://odran21.github.io/Calculadora/", "_blank");
    }
  });

  listItem.addEventListener("click", function() {
    if (proyecto.nombre === "Slider CoPa") {
      window.open("https://odran21.github.io/Slider-CoPa/", "_blank");
    }
  });

  return listItem;
}

const listaProyectos = document.querySelector("#proyectos-list");

proyectos.forEach(function (proyecto) {
  let proyectoListItem = crearHTMLProyectos(proyecto);
  listaProyectos.appendChild(proyectoListItem);
});

//----------     Click en el NAV Cambia de color      ----------//
const menuItems = document.querySelectorAll("nav ul li a");

menuItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    menuItems.forEach(function (item) {
      item.parentElement.classList.remove("active");
    });

    event.target.parentElement.classList.add("active");
  });
});

//----------     Dark Mode      ----------//
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
const colorSwitchDesktop = document.querySelector('#switch-desktop input[type="checkbox"]');
function cambiaTema(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute("tema", "light");
  } else {
    document.documentElement.setAttribute("tema", "dark");
  }
}
colorSwitch.addEventListener("change", cambiaTema);
colorSwitchDesktop.addEventListener("change", cambiaTema);