<?php

require '../connections/connections.php';

// Conexión con BD
$method = $_GET['method'];
$conexion  = new Connections();
$conexion->$method();

// Comunicación con función 
$method_local = 'ldm';
$InsertLDM = new InsertLDM();
$InsertLDM->$method_local();

class InsertLDM {

    public function ldm(){
        global $conn, $method;

        date_default_timezone_set("America/Bogota");
        $horaActual = date('h:i:s', time());
        $horaSumada = strtotime( '+60 second', strtotime($horaActual));

        $contador = 0;
        $insert = "INSERT INTO PRODUCTO";
        $values = " VALUES (";

        foreach ( $_POST as $key => $value ) {
            if($method == 'oracle'){
                if($key == 'fecha') $values .= "TO_DATE('".$value."','yyyy-MM-dd'),";
                else $values .= " '$value', ";
            }else{
                $values .= " '$value', ";
            }
        }

        $values = substr($values, 0, -2).')';
        $sql = $insert.$values; 

        while(strtotime(date('h:i:s', time()))  <= $horaSumada ){
            if ($method == 'oracle') $smt = $conn->prepare($sql.')');
            else $smt = $conn->prepare($sql);
            $smt->execute();
            $contador++;
        }
        echo strval(",Registros insertados: ".$contador);
    }

}