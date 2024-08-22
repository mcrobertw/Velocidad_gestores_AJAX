<?php

require '../connections/connections.php';

// Conexión con BD
$method = $_GET['method'];
$conexion  = new Connections();
$conexion->$method();

// Comunicación con función 
$method_local = 'sp';
$InsertLDM = new InsertSP();
$InsertLDM->$method_local();

class InsertSP {

    public function sp(){
        global $conn, $method;

        date_default_timezone_set("America/Bogota");
        $horaActual = date('h:i:s', time());
        $horaSumada = strtotime( '+60 second', strtotime($horaActual));

        $contador = 0;
        $insert = "";
        $values = " ";

        foreach ( $_POST as $key => $value ) {
            if($method == 'oracle'){
                if($key == 'fecha') $values .= "TO_DATE('".$value."','yyyy-MM-dd'),";
                else $values .= " '$value', ";
            }else{
                $values .= " '$value', ";
            }
        }
        if ($method == 'oracle' || $method == 'mysql') $insert = "CALL PA_INSERTARPRODUCTO(";
        if ($method == 'postgres') $insert = "SELECT PA_INSERTARPRODUCTO(";
        if ($method == 'sqlserver') $insert = "EXECUTE PA_INSERTARPRODUCTO ";

        $values = $method != 'sqlserver' ? substr($values, 0, -2).')' : substr($values, 0, -2);
        $sql = $insert.$values; 

        while(strtotime(date('h:i:s', time()))  <= $horaSumada ){
            $smt = $method != 'oracle' ? $conn->prepare($sql) : $conn->prepare($sql.')');
            $smt->execute();
            $contador++;
        }
        echo strval(",Registros insertados: ".$contador);
    }

}