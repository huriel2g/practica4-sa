//const Operaciones = require('./operaciones');

function HacerAlgo(){
    let num1 = document.getElementById('n1');
    let num2 = document.getElementById('n2');
    let oper = document.getElementById('operacion');
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    oper = parseInt(oper);
    respuesta = "hola"//Operaciones.Operar(oper, num1, num2);
    let res = document.getElementById("respuesta");
    res.getSession().setValue(respuesta);
}

