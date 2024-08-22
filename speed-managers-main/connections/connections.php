<?php

$method = $_GET['method'];
$handler = new Connections();
if (method_exists($handler, $method)) {
    $handler->$method();
}

$conn = null;

class Connections {
    
    public function mysql(){
        global $conn;
        $servername = "localhost";
        $username = "root";
        $password = "mysql123";
        $db = "bdproducto";
        
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo 1;
        } catch(PDOException $e) {
            die('0');
        }
    }

    public function sqlserver(){
        global $conn;
        $servername = "localhost";
        $user = "sa";
        $password = "1234567";
        $db = "BDPRODUCTO";
        $port = "1433";

        try {
            $conn = new PDO("sqlsrv:Server=$servername;Database=$db", $user, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo json_encode(1);
        } catch(PDOException $e) {
            echo json_encode(0);
        }
    }
    

    public function oracle(){
        global $conn;
        $dsn = 'oci:host=localhost;dbname=XE';
        $username = 'UBDPRODUCTO';
        $password = '1234567';
        $dbh = null;
        try {
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo 1;
        } catch (PDOException $e) {
            die('0');
        }
    }

    public function postgres(){
        global $conn;
        $servername = "localhost";
        $user = "postgres";
        $password = "123456";
        $db = "postgres";
        $port = "5432";

        try {
            $conn = new PDO("pgsql:host= $servername;port=$port; dbname=$db", $user, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo 1;
        } catch(PDOException $e) {
            die('0');
        }
    }
}