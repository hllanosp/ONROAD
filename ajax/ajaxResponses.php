<?php

session_start();


if(isset($_POST["action"]))
{
  $action = $_POST["action"];

  switch($action)
  {

    // Determinar si el usuario tiene carro o no
    case 3:
    {
       $tienCarro = $_POST["hasCar"];
       $_SESSION["tieneCarro"] = $tieneCarro;
    }
  }
}


 ?>
