const iconoMenu = document.querySelector(".icono-menu");
const menu = document.querySelector(".cont-menu");

iconoMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");
});

//---------- Proyectos ----------//
let proyectos = [
  {
    nombre: "Futuro Proyecto 1",
    img: "https://i0.wp.com/loquesigue.tv/wp-content/uploads/2019/03/img-html.jpg?fit=720%2C405&ssl=1 ",
  },
  {
    nombre: "Futuro Proyecto 2",
    img: "https://i0.wp.com/loquesigue.tv/wp-content/uploads/2019/03/img-html.jpg?fit=720%2C405&ssl=1",
  },
  {
    nombre: "Futuro Proyecto 3",
    img: "https://i0.wp.com/loquesigue.tv/wp-content/uploads/2019/03/img-html.jpg?fit=720%2C405&ssl=1",
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

  return listItem;
}

const listaProyectos = document.querySelector("#proyectos-list");

proyectos.forEach(function (proyecto) {
  let proyectoListItem = crearHTMLProyectos(proyecto);
  listaProyectos.appendChild(proyectoListItem);
});
