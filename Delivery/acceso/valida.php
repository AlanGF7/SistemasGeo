<?php

	$correo=$_POST['correo'];
	$contrasena=$_POST['contrasena'];

	$consulta  = " SELECT * FROM
				tb_usuarios WHERE EmailUsuario=? 
				AND ContraUsuario=? ";
	$query = $conn->prepare($consulta);
	$query->bindParam(1, $correo);
	$query->bindParam(2, $contrasena);
	$query->execute();
	$cuenta=0;
	$cuenta = $query->rowCount();

	if ($cuenta)
	{
      $redireccionar="?seccion=acceso&accion=bienvenido";
	  $registro = $query->fetch();
      $_SESSION["id"]=  $registro["IdUsuario"];
      $_SESSION["nombre"]=  $registro["NombreUsuario"];
	  $_SESSION["tipo"]=  $registro["TipoUsuario"];
    }
  else
    $redireccionar="?seccion=acceso&accion=ingresa&mensaje=novalido";
?>
<script>
  window.location.href = "<?=$redireccionar?>";
</script>