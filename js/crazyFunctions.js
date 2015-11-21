function sendHasCar(hasCar)
{
  var data =
  {
    action: 3,
    tieneCarro: hasCar
  };

  $.ajax({

    type: "POST",
    url: "ajax/ajaxResponses.php",
    data : data,
    success: function(response)
    {
      mostrarOcultar('divRecorridos', 'divTieneCarro');
    }
  });
}

function enviarMonto()
{  
    var monto=$("#monto").val();
    var data=
        {
            action:1,
            monto: monto
        };

    $.ajax({
      async: true,
      type: "POST",
      url: "ajax/ajaxResponses.php",
      data: data,
      success: function()
      {
        mostrarOcultar('divNumeroGente', 'divMontoDinero');       
      }
    });
    
}

function enviarNumeroGente()
{  
    var numeroGente =$("#numeroGente").val();
    var data=
        {
            action:2,
            numeroGente: numeroGente
        };

    $.ajax({
      async: true,
      type: "POST",
      url: "ajax/ajaxResponses.php",
      data: data,
      success: function()
      {
        mostrarOcultar('divTieneCarro', 'divNumeroGente');       
      }
    });
    
}


function mostrarOcultar(divMostrar, divOcultar)
{
  $("#" + divOcultar).hide();
  $("#" + divOcultar).removeClass('hidden', function(){
    $("#" + divOcultar).fadeOut('slow');
  });

  $("#" + divMostrar).removeClass('hidden',function()
  {
    $("#" + divMostrar).show('slow');  
  });

}

function detalleRecorrido1()
{
  mostrarOcultar('detalleR1', 'divRecorridos');      
}

function detalleRecorrido2()
{
  mostrarOcultar('detalleR2', 'divRecorridos');      
}