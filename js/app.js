/*
 * Funcionalidad de tu producto
 */
window.onload = function() {
  var menu = document.getElementsByClassName('fa-bars')[0];
  var script = document.getElementsByTagName('script')[0];
  menu.addEventListener('click', function showModal(event) {
    var modal = document.createElement('div');
    var body = document.body;
    modal.classList.add('modal');
    body.appendChild(modal);
    body.insertBefore(modal, script);
  });
};
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
