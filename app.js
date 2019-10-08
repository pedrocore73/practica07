var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/productos', function (req, res){
    res.sendFile(__dirname + '/public/productos.html');
});

app.get('/contacto', function (req, res){
    res.sendFile(__dirname + '/public/contacto.html');
});

app.use(function(req, res){
    res.status(404);
    res.sendFile(__dirname + '/public/pag404.html');
});

app.listen(8888, function(){
    console.log('Servidor escuchando en http://localhost:8888');
});