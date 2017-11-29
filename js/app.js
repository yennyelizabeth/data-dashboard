/*
 * Funcionalidad de tu producto
 */
window.onload = function() {
  var menu = document.getElementsByClassName('fa-bars')[0];
  var script = document.getElementsByTagName('script')[0];
  // Creando evento para que se cree un modal
  menu.addEventListener('click', function showModal(event) {
    // console.log(event.target); event.target = div
    // console.log(event.currentTarget);
    var modal = document.createElement('div'); // event.currentTarget = .fa-bars (ícono de las 3 barras paralelas)
    var body = document.body;
    modal.classList.add('modal');
    body.appendChild(modal);
    body.insertBefore(modal, script);
    var navbar = document.getElementById('hamburguer-menu');
    modal.appendChild(navbar);
    navbar.classList.remove('display-none');
    navbar.classList.add('display-block');
    // Creando evento para que desparezca el modal
    modal.addEventListener('click', function(event) {
      // console.log(event.target); event.target = div
      event.target.parentElement.removeChild(event.target); // div.parentElement = body
      body.appendChild(navbar);
      navbar.classList.remove('display-block');
      navbar.classList.add('display-none');
      body.insertBefore(navbar, script);
    });
  });
};
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
