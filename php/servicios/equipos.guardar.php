<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


// $request['nombreEquipo'] = strtoupper($request['nombreEquipo']);
// $request['nombreEquipo'] = $request['nombreEquipo'];


$sql = "UPDATE alumnos SET
			nombreEquipo    = '".$request['nombreEquipo']."',
			puntosEquipo    = '".$request['puntosEquipo']."',
			partidosJugados    = '".$request['partidosJugados']."',
			partidosGanados    = '".$request['partidosGanados']."',
			partidosPerdidos    = '".$request['partidosPerdidos']."',
			golesFavor    = '".$request['golesFavor']."',
			golesContra    = '".$request['golesContra']."',
			grupoLiga    = '".$request['grupoLiga']."',
			nombre1    = '".$request['nombre1']."',
			apellido1    = '".$request['apellido1']."',
			mail1    = '".$request['mail1']."',
			nombre2    = '".$request['nombre2']."',
			apellido2    = '".$request['apellido2']."',
			mail2    = '".$request['mail2']."',
			telefono  = '".$request['telefono']."',
			direccion = '".$request['direccion']."' 
		WHERE idEquipo = ".$request['idEquipo'];

$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {
	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Actualizado.' ));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ));
}

echo $Respuesta;

?>