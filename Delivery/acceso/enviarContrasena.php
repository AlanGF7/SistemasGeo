<h1>ENVIAR CONTRASEÑA</h1>
    <?php
        $usuario=$_POST['usuario'];
        $consulta  = " SELECT * FROM
                        tb_usuarios WHERE EmailUsuario=?";
        $query = $conn->prepare($consulta);
        $query->bindParam(1, $usuario);
        $query->execute();
        $registro = $query->fetch();
        $cuenta = $query->rowCount();
        if ($cuenta)
            echo $registro["ContraUsuario"];
        else
        echo "<p> No se encontró </p>";
    ?>