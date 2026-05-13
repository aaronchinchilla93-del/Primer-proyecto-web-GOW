document.addEventListener('DOMContentLoaded', function() {
    
    var formulario = document.getElementById('formulario');
    
        var mensaje = document.getElementById('mensaje');

       formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            var nombre = document.getElementById('nombre').value;
            var contraseña = document.getElementById('contraseña').value;

            if (nombre.trim() === "estudiante" && contraseña === "1234") {
                window.location.href = 'Menu.html';
            } else {
          mensaje.innerHTML = '<p id="error">Usuario o contraseña incorrectos.</p>';
            }
        });
    });








