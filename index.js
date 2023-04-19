$(document).ready(function () {
    $('#formulario-contacto').submit(function () {
      
      var nombre = document.getElementById("nombre").value;
      var url = 'https://reqres.in/api/users';
  
      $.ajax({
        type: 'POST',
        url: url,
        data: {
          nombre: $('#nombre').val(),
          email: $('#email').val(),
          asunto: $('#asunto').val(),
          mensaje: $('#mensaje').val()
        },
        success: function (response) {
          alert("Bienvenido, " + nombre + ". Su usuario se ha creado con éxito");
        },
      });
    });
  });
  