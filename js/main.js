const hamburguesa = document.querySelector('.toggle');
hamburguesa.addEventListener('click', function() {
  if (hamburguesa.classList.contains('open')) {
    hamburguesa.classList.remove('open');
  } else {
    hamburguesa.classList.add('open');
  }
});