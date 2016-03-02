<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

//$sql = 'SELECT * FROM alumnos WHERE grupoLiga = "B"';
$sql = "SELECT * FROM posiciones ORDER BY posicion ASC";

echo Database::get_json_rows($sql);

?>