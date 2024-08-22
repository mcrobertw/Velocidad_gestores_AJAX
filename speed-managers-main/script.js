var form = document.querySelector('form');

// MYSQL
function mysql_lmd() {
    const url = "./ldm/insert-databaseLDM.php?method=mysql";
    const alert_smsInsert = '¡Insertando registros MySQL!';
    const alert_smsResponse = '¡Registros insertados MySQL!';
    const showInput = '#txt_mysqlLMD';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}

function mysql_sp() {
    const url = "./sp/insert_dbSP.php?method=mysql";
    const alert_smsInsert = '¡Insertando registros MySQL SP!';
    const alert_smsResponse = '¡Registros insertados MySQL SP!';
    const showInput = '#txt_mysqlSP';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}

//POSTGRESSQL
function postgres_lmd() {
    const url = "./ldm/insert-databaseLDM.php?method=postgres";
    const alert_smsInsert = '¡Insertando registros PostgreSql!';
    const alert_smsResponse = '¡Registros insertados PostgreSQL!';
    const showInput = '#txt_pgLMD';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}

function postgres_sp() {
    const url = "./sp/insert_dbSP.php?method=postgres";
    const alert_smsInsert = '¡Insertando registros PostgreSql SP!';
    const alert_smsResponse = '¡Registros insertados PostgreSQL SP!';
    const showInput = '#txt_postgresSP';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}

//ORACLE
function oracle_lmd() {
    const url = "./ldm/insert-databaseLDM.php?method=oracle";
    const alert_smsInsert = '¡Insertando registros Oracle!';
    const alert_smsResponse = '¡Registros insertados Oracle!';
    const showInput = '#txt_oracleLMD';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}

function oracle_sp() {
    const url = "./sp/insert_dbSP.php?method=oracle";
    const alert_smsInsert = '¡Insertando registros Oracle SP!';
    const alert_smsResponse = '¡Registros insertados Oracle SP!';
    const showInput = '#txt_oracleSP';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}

//SQLSERVER
function sqlserver_lmd() {
    const url = "./ldm/insert-databaseLDM.php?method=sqlserver";
    const alert_smsInsert = '¡Insertando registros Sql server!';
    const alert_smsResponse = '¡Registros insertados Sql server!';
    const showInput = '#txt_sqlserverLMD';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}

function sqlserver_sp() {
    const url = "./sp/insert_dbSP.php?method=sqlserver";
    const alert_smsInsert = '¡Insertando registros Sql server SP!';
    const alert_smsResponse = '¡Registros insertados Sql server SP!';
    const showInput = '#txt_sqlserverSP';
    accion(url, alert_smsInsert, alert_smsResponse, showInput);
}


function accion(url, alert_smsInsert, alert_smsResponse, showInput) {
    const time = 1500;
    const timeInsert = 800;
    form.onsubmit = e => {
        e.submitter.disabled = true;
        let formData = new FormData(form);
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        alert('warning', alert_smsInsert, timeInsert);

        xhr.onload = function () {
            if (xhr.status == 200) {
                let res =  xhr.responseText.split(',');
                document.querySelector(showInput).value = res[1];
                e.submitter.disabled = false;
                alert('success', alert_smsResponse, time);
            } else {
                alert('error', 'Error: intente nuevamente', time);
            }
        }
        xhr.send(formData);
    }
}