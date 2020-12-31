const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const operando = require('./src/operaciones')

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/mostrarnumeros', (req, res) => {
  let num1=req.body.numero1;
  let num2=req.body.numero2;
  let oper=req.body.operacion;
  num1=parseInt(num1);
  num2=parseInt(num2);
  oper=parseInt(oper);

  let resultado = operando.Multiplicar(num1, num2);

  let pagina = `<!doctype html><html>
    <head>
      <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/litera/bootstrap.min.css">
    </head>
    <body> 
      <h4>El de la multiplicación es: ${resultado}</h4>
    </body>
    </html>
    `;
  res.send(pagina);	
})


var server=app.listen(4000, () => {
  console.log('Servidor web iniciado en: http://localhost:4000/');
});