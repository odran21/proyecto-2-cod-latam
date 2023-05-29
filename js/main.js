const hamburguesa = document.querySelector('.toggle');
const menuMobile = document.querySelector('.menu-mobile');

hamburguesa.addEventListener('click', function() {
  if (hamburguesa.classList.contains('open')) {
    hamburguesa.classList.remove('open');
  } else {
    hamburguesa.classList.add('open');
  }
});

hamburguesa.addEventListener('click', function() {
    hamburguesa.classList.toggle('open');
    menuMobile.classList.toggle('open');
  });

//---------- Proyectos ----------//
let proyectos = [
    {
        nombre: 'Futuro Proyecto',
        tipo: 'Primer',
        img: 'https://i0.wp.com/loquesigue.tv/wp-content/uploads/2019/03/img-html.jpg?fit=720%2C405&ssl=1'
    },

    {
        nombre: 'Futuro Proyecto',
        tipo: 'Segundo',
        img: 'https://i0.wp.com/loquesigue.tv/wp-content/uploads/2019/03/img-html.jpg?fit=720%2C405&ssl=1'
    },
];

function crearHTMLProyectos(proyectos) {
    let nombreProyecto = document.createElement('h3');
    nombreProyecto.innerText = proyectos.nombre;
  
    let imagenProyectos = document.createElement('img');
    imagenProyectos.src = proyectos.img;
    
    let tipoProyectos = document.createElement('p');
    tipoProyectos.innerText = proyectos.tipo;
    
    let listItem = document.createElement('li');
    listItem.appendChild(nombreProyectos);
    listItem.appendChild(imagenProyectos);
    listItem.appendChild(tipoProyectos); 
    
    return listItem;
  }

  const listaProyectos = document.querySelector('#proyectos-list');

  proyectos.forEach(function(proyectos) {
  let proyectosListItem = crearHTMLProyectos(proyectos)
    listaProyectos.appendChild(proyectosListItem);
  });