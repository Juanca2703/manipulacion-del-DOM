// EJERCICIO 1 
//Declarando Variables e inicializandolas ejercicio 1

var nombre = "Juan";
var apellido = "Perez";
var usuarioPlatzi = "juanpe";
var edad = 22;
var email = "juanperez@gmail.com" ;
var mayorDeEdad = false;
var dineroAhorrado = 10000;
var deudas = 200;
// Creando Variable de dinero total para imprimirla

var dineroTotal = dineroAhorrado - deudas;

// Imprimiendo Datos solicitados

console.log(nombre + " " + apellido);
console.log(dineroTotal);



// EJERCICIO 2
// Declarando constantes e inicializandolas ejercicio 2

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

//Creando funcion apodo para devolver un string con los elementos solicitados

var apodo = function(completeName, nickname){
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

//invocando funcion con parametros globales

apodo(completeName, nickname);


// EJERCICIO 3 
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No se registra ningun tipo de membresia");
}

// Ejercico 5


do {
    var result = prompt("Cuanto es 2 + 2")
} while (result != 4)
