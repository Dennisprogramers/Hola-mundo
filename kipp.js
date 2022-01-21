/*let nombre = prompt("Escribe tu nombre aqui")

alert("hola "+nombre)
/*
 document.write("Eres bienvenido " + nombre)

let hola = "hola "
let saludo = nombre ;
let pregunta = "¿como estas? ";
frace = hola + pregunta + nombre;
document.write(frace)

let nombre = prompt("escribe tu nombre aqui")

frase = `Espero allas tenido un lindo dia ${ nombre } `;

document.write (frase);
*/
 nombre = prompt("Escribe tu nombre aqui")
    
    var saludo = "";
    var tiempo = new Date().getHours();

if(tiempo < 12){
    saludo = "Buenos dias Espero tengas un lindo dia ";
}else if(tiempo < 18){
    saludo ="Buenas tardes ";
}else{
    saludo = "Buenas noches Espero allas tenido un lindo dia ";
}
document.write(saludo + nombre)

