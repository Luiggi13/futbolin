<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

//$sql = 'SELECT * FROM alumnos WHERE grupoLiga = "B"';
$sql = "SELECT * FROM alumnos WHERE grupoLiga = 'D' ORDER BY puntosEquipo DESC, golesFavor DESC, golesContra DESC";

echo Database::get_json_rows($sql);

?>