<?php

session_start();



if(isset($_POST["action"]))
{
  $action = $_POST["action"];

  switch($action)
  {

    case 1:
    {
       $montoDinero = $_POST["monto"];
       $_SESSION["montoDinero"] = $montoDinero;  

      break;
    }

    case 2:
    {
       $numeroGente = $_POST["numeroGente"];
       $_SESSION["numeroGente"] = $numeroGente 
           
      break;
    }    

    // Determinar si el usuario tiene carro o no
    case 3:
    {
       $tieneCarro = $_POST["tieneCarro"];
       $_SESSION["tieneCarro"] = $tieneCarro;

       break;
    }
  }
}


 ?>
