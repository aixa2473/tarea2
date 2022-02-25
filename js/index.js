let usuario = prompt ("Introduzca el usuario");
let contrasena = prompt ("Introduzca la contraseña");

if (usuario == "Administrador" && contrasena == 1234) {
    console.log("Bienvenido"); alert("Bienvenido")
} else{
    console.log("Contraseña equivocada"); alert("Contraseña equivocada")
}

let numeroUno = prompt("Introduzca el 1er numero:");
let numeroDos = prompt("Introduzca el 2do numero:");
let numeroTres = prompt("Introduzca el 3er numero:");

numeroUno = parseFloat(numeroUno);
numeroDos = parseFloat(numeroDos); 
numeroTres = parseFloat(numeroTres);

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    console.log('numeroUno es el mayor');
if (numeroDos > numeroUno && numeroDos > numeroTres)
    console.log('numeroDos es el mayor');
} else{
    console.log('numeroTres es el mayor');
}

if (numeroUno < numeroDos && numeroUno < numeroTres) {
    console.log('numeroUno es el menor');
if (numeroDos < numeroUno && numeroDos < numeroTres)
    console.log('numeroDos es el menor');
} else{
    console.log('numeroTres es el menor');
}

let saludo = "hola" + "mundo";
    alert(saludo);
    console.log(saludo);












