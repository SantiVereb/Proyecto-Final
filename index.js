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
  


var constraints = {
    marca: {
        presence: true,
        length: {
            minumum: 4,
            message: "Debe poseer al menos 4 caracteres"  
        }
    },
    modelo: {
        presence: true,
        length: {
            minimum: 2,
            message: "Debe poseer al menos 2 caracteres"
        }
    },
    nombre: {
        presence: true,
        length: {
            minimum: 3,
            message: "Debe poseer al menos 3 caracteres"
        }
    },
    email: {
        presence: true,
        email: true
    },
    telefono: {
        presence: true,
        format: {
            minimum: 10,
            maximum: 10,
            message: "Debe poseer 10 números"
        }
    }
};

function formularioProceso() {
    var formulario = $("#cotizacion");
    var validation = validate(formulario[0], constraints);

    if(validation) {
        var resumen = "Resumen de la cotización:\n\n";
        resumen += "Marca: " + $("#marca").val() + "\n";
        resumen += "Modelo: " + $("#modelo").val() + "\n";
        resumen += "Nombre: " + $("#nombre").val() + "\n";
        resumen += "Email: " + $("#mail").val() + "\n";
        resumen += "Telefono: " + $("#telefono").val() + "\n";

        alert("El pedido de cotización del vehículo marca " + $("#marca").val() + ", modelo " + $("#modelo").val() + ", ha sido registrado. Nos comunicaremos a la brevedad. Revise la bandeja de entrada del correo " + $("#mail").val() + ". ¡Gracias!");
    } else {
        var errors = validation.errors;

        for(var key in errors) {
            if(errors.hasOwnProperty(key)) {
                var errorMsg = errors[key][0];
                $("#" + key + "-error").html(errorMsg);
            }
        }
    }
}

$(document).ready(function() {
    $("#cotizacion").submit(function(event) {
        event.preventDefault();
        formularioProceso();
    });
});

$(document).ready(function () {
    $('#cotizacion').submit(function (event) {
        event.preventDefault();
      
      var marca = $("#marca").val();
      var modelo = $("#modelo").val();
      var nombre = $("#nombre").val();
      var email = $("#mail").val();
      var telefono = $("#telefono").val();   
      var url = 'https://reqres.in/api/users';
  
      $.ajax({
        url: url,
        method: 'POST',
        data: {
          html: $("#cotizacion").html(),
          fileName: "cotizacion.pdf",
          title: "Cotización solicitada",
          orientation: "portrait",
          pageSize: "A4",
          margin: "20mm",
        },
        dataType: "json",
        success: function (response) {
          window.location.href = response.url;
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
      });
      $("#enviardatos").click(function() {
        $("#cotizacion").submit();
      })
    });
  });