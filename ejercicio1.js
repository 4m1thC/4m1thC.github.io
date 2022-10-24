const http = require('http');

const servidor = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200, {"servidor":"NodeJs/12.0.19 (Win64)","Content-Type": "text/html"});
    respuesta.write('<h1>hola soy Valeria Edith Almanza Mamani</h1>');
    respuesta.write('<h3>paralelo:--------- C</h3>');
    respuesta.write('<h3>carnet:----------- 9939575</h3>');
    respuesta.end();
});

servidor.listen(4040, function () {
    console.log('Corriendo en el puerto 4040');
});