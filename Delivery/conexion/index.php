<?php
    $usuario = "sistemasgeo5452_aguzmanadm"
    $contrasena = "LmN#nR=Re;$+PLN)_u"

    try{
      $conn = new PDO('mysql:host=localhost;dbname=sistemasgeo5452_aguzman', $usuario,$contrasena);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
?>