function navegador(){
    alert("El certificado de seguridad no es válido.");

    if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        while(true){
        }
    }
}

function faltaCampo(){
    alert("Debe rellenar los campos.");
}

function confirmacion() {
    var valido = true;

    /*
     * Validamos Nombre no vacio
     */
    var nombre = document.forms["hunger"]["nombre"].value;
    if (nombre == "") {
        valido = false;
    }

    /*
     * NIES no válidos
    */
    var docInden = document.forms["hunger"]["docInden"].value;
    if (docInden != "") {
        var numero;
        var letr;
        var letra;
        var expresion_regular_docInden = /^\d{8}[a-zA-Z]$/;
        
        if(expresion_regular_docInden.test (docInden) == true){
            numero = docInden.substr(0,docInden.length-1);
            letr = docInden.substr(docInden.length-1,1);
            numero = numero % 23;
            letra='TRWAGMYFPDXBNJZSQVHLCKET';
            letra=letra.substring(numero,numero+1);
            if (letra!=letr.toUpperCase()) {
                alert('El campo Documento de Identidad es erroneo, la letra no es valida.');
                valido = false;
            }
        }else{
            alert('El campo Documento de Identidad es erroneo, formato no válido..');
            valido = false;
        }        
    }

    /*
     * Validacion Matricula. m-5555-y no valido
     */
    var matricula = document.forms["hunger"]["matricula"].value;
    if (matricula != "") {
        var expresion_regular_matricula = /^\d{4}[a-zA-Z]{3}$/;
        
        if(expresion_regular_matricula.test (matricula) != true){
            alert('El campo Matricula es erroneo, formato no válido.');
            valido = false;
        }      
    }

    /*
     * Fecha de nacimiento. Solo comprueba mes y año
     */
    var fechaNac = document.forms["hunger"]["fechaNac"].value;
    if (fechaNac != "") {
        var fecha = fechaNac.split("/");
        if (fecha[2] > 2000){
            alert('Tienes que ser mayor de edad.');
            valido = false;
        }
        else if (fecha[2] == 2000){
            if (fecha[0] > 10){
                alert[fecha[.0]]
                alert('Tienes que ser mayor de edad.');
                valido = false;
            }
        }
    }
    
    /*
     * Código postal.
     */
    var codPostal = document.forms["hunger"]["cp"].value;
    if (codPostal != "") {
        if (isNaN(codPostal)){
            alert('El código postal no es válido.');
            valido = false;
        }
        if (codPostal.toString().length != 5){
            alert('El código postal no es válido.');
            valido = false;
        }

    } else {
        valido = false;
    }

    /*
     * CC. 
     */
    var CC1 = document.forms["hunger"]["cc1"].value;
    var CC2 = document.forms["hunger"]["cc2"].value;
    var CC3 = document.forms["hunger"]["cc3"].value;
    var CC4 = document.forms["hunger"]["cc4"].value;
    if (CC1 != "" && CC2 != "" && CC3 != "" && CC4 != "") {
        if (isNaN(CC1) || isNaN(CC2) || isNaN(CC3) || isNaN(CC4)){
            alert('La cuenta corriente no es válida.');
            valido = false;
        }
        else if (CC1.length != 4 && CC2.length != 4 && CC3.length != 2 && CC4.length != 10){
            alert('La cuenta corriente no es válida.');
            valido = false;
        }
    }else{
        valido = false;
    }

    /*
     * Fecha de entrada en vigor. 
     */
    var FEntradaVigor = document.forms["hunger"]["Fecha de entrada en vigor"].value;
    if (FEntradaVigor == "") {
        valido = false;
    }
    
    /*
     * Direccion. 
     */
    var direccion = document.forms["hunger"]["direccion"].value;
    if (direccion == "") {
        valido = false;
    }

    /*
     * Ciudad. 
     */
    var ciudad = document.forms["hunger"]["ciudad"].value;
    if (ciudad == "") {
        valido = false;
    }

    if(valido == true){
        sleep(2000);
        sleep(2000);
        sleep(2000);
        sleep(2000);
        window.open("confirmacion.html", "", "width=1000,height=1000");
    }else{
        faltaCampo();
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}