$("#hasCarYes").click(function()
{
  sendHasCar(1);
});

$("#hasCarYes").click(function()
{
  sendHasCar(0);
});


function sendHasCar(hasCar)
{
  var data =
  {
    action: 3,
    hasCar: hasCar
  };

  $.ajax({

    type: "POST",
    url: "../ajax/ajaxResponses.php",
    data : data,
    success: function(response)
    {
      // TO DO: Ocultar el div actual de tiene carro y mostrar resultados.
    }
  });
}
