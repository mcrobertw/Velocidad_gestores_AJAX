$(document).ready(function () {
    $('#mysql_statu').click(function () { const url = './connections/connections.php?method=mysql'; XMLHttpRequest_Status(url, 'My Sql'); })

    $('#postgres_statu').click(function () { const url = './connections/connections.php?method=postgres'; XMLHttpRequest_Status(url, 'Postgres Sql'); })

    $('#oracle_statu').click(function () { const url = './connections/connections.php?method=oracle'; XMLHttpRequest_Status(url, 'Oracle'); })

    $('#sqlserver_statu').click(function () { const url = './connections/connections.php?method=sqlserver'; XMLHttpRequest_Status(url, 'Sql Server'); })
});

const delete_mysql = () => XMLHttpRequest_Destroy('./delete/delete.php?method=mysql');

const delete_postgres = () => XMLHttpRequest_Destroy('./delete/delete.php?method=postgres');

const delete_oracle = () => XMLHttpRequest_Destroy('./delete/delete.php?method=oracle');

const delete_sqlserver = () => XMLHttpRequest_Destroy('./delete/delete.php?method=sqlserver');

function XMLHttpRequest_Status(url, name) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200 && this.responseText == 1) alertStatus(name, '¡Conexión establecida con éxito!', 'success');
        else alertStatus(name, 'Error al conectar!', 'error');
    }
    xhr.send();
}

function XMLHttpRequest_Destroy(url) {
    const time = 700;
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);
    // alert('warning', '¡Eliminando!', 500);
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200 && this.responseText == 111) alert('success', '¡Registros eliminados!', time);
        else alert('error', 'Error al eliminar!', time);
    }
    xhr.send();
}

const alertStatus = (title, sms, type) => Swal.fire(title, sms, type);

function alert(type, message, time) { Swal.fire({ icon: type, title: message, showConfirmButton: false, timer: time }) }