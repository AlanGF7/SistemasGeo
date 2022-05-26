<?php
if (isset($_SESSION["id"])) 
{
  $id = $_SESSION["id"];
  $consulta  = "SELECT * FROM tb_usuarios WHERE IdUsuario=? ";
  $query = $conn->prepare($consulta);
  $query->bindParam(1, $id);
  $query->execute();
  $registro = $query->fetch();
?>

  <h1>MI CUENTA</h1>
  <form action="?seccion=acceso&accion=actualizar" id="form1" method="post">
    <fieldset>
          Nombre:
          <input type="text" required name="nombre" id="nombre" size="80" maxlength="80" value="<?php echo $registro['NombreUsuario']; ?>">
          Usuario (Correo electrónico):
          <input type="email" required name="usuario" id="usuario" value="<?php echo $registro['NombreUsuario']; ?>" />
          Contraseña:
          <input type="password" required name="contrasena" id="contrasena" size="80" maxlength="80" value="<?=$registro['ContraUsuario']?>">
          <button type="submit">Guardar cambios</button>
    </fieldset>
  </form>
<?php
} else {
?>
    <h1>ACCESO NO AUTORIZADO</h1>
    <strong>Error de permiso de usuario!</strong> , Ud. no tiene acceso a este módulo.
<?php
}
?>