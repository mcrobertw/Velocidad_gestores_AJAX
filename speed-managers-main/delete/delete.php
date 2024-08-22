<?php

require '../connections/connections.php';

// Conexión con BD
$method = $_GET['method'];
$conexion  = new Connections();
$conexion->$method();

// Comunicación con función 
$method_local = 'dataBase';
$delete = new Delete();
$delete->$method_local();

class Delete {

    public function dataBase(){
        global $conn;
        try {
            $sql = "DELETE FROM producto";
            $smt = $conn->prepare($sql);
            $smt->execute();
            echo 1;
        } catch (\Throwable $e) {
            die('0');
        }
    }
    
}