/* mensaje();

function mensaje() {
    let usuario = prompt("ingrese su nombre");
    let saludo = `Bienvenido a la calculadora de salarios ${usuario}`;
    alert(saludo);
}

function calculadora(hora, horas, num2, calcular) {
    switch (calcular) {
        case "calcular":
            return hora * horas + num2;
    }
}

let hora = parseInt(prompt("Ingrese valor de hora"));
let num2 = parseInt(prompt("Ingrese la liquidacion de hora extra"));
let horas = parseInt(prompt("Ingrese horas trabajadas"))
let calcular = prompt("Ingrese calcular");

let resultado = calculadora(hora, horas, num2, calcular);
alert(calculadora(hora, horas, num2, calcular)); */
let contenedor = document.getElementById("trabajadores");
let trabajadores = [{
    nombre: "Pedro",
    apellido: "Martinez",
    edad: 33,
    trabajo: "Empleado",
}, {
    nombre: "Juan",
    apellido: "Cuarta",
    edad: 19,
    trabajo: "Recepcion",
}, {
    nombre: "Marcelo",
    apellido: "Ramirez",
    edad: 55,
    trabajo: "Contabilidad",
}, {
    nombre: "Jorge",
    apellido: "Ruiz",
    edad: 35,
    trabajo: "Control de stock",
}, {
    nombre: "Manuel",
    apellido: "Alvarez",
    edad: 78,
    trabajo: "Despachante",

}, ];

for (const operario of trabajadores) {
    let ul = document.createElement("ul");
    ul.innerHTML = `<h4>Apellido: ${operario.apellido}</h4>
                      <p>Nombre: ${operario.nombre}</p>
                      <b>Edad: ${operario.edad}</b>
                     `;
    contenedor.append(ul);
}

/* MUESTRA TODOS LOS EMPLEADOS */
/* const nombreCompleto = trabajadores.map(trabajador => trabajador.nombre + " " + trabajador.apellido + " " + trabajador.trabajo);


console.log(trabajadores); */

/* FILTRAR POR NOMBRE  */
/* const result = trabajadores.find((trabajadores) => trabajadores.nombre === "Jorge");

console.log(result); */

/* FILTRAR POR EDAD  */
/* const edad = trabajadores.filter((trabajadores) => trabajadores.edad > 70);

console.log(edad); */