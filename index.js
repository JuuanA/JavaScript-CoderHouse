const trabajador = [{

        id: 1,
        nombre: "Pedro",
        apellido: "Martinez",
        edad: 33,
        trabajo: "Empleado",
    }, {
        id: 2,
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
        id: 4,
        nombre: "Jorge",
        apellido: "Ruiz",
        edad: 35,
        trabajo: "Control de stock",
    },
    {
        id: 5,
        nombre: "Manuel",
        apellido: "Alvarez",
        edad: 78,
        trabajo: "Despachante",
    }
];
let formulario = document.getElementById("formulario");
let boton = document.getElementById("verProductos");
let contenedor = document.getElementById("contenedor");
let botonBorrado = document.getElementById("borrado");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let trabajadoresLista;
    let trabajadorStorage = JSON.parse(localStorage.getItem("trabajador"));

    let pase = (trabajadorStorage = trabajadoresLista) ? true : false;
    pase ? (trabajadorStorage) : (trabajadoresLista = []);

    /* if (trabajadorStorage) {
        trabajadoresLista = trabajadorStorage;
    } else {
        trabajadoresLista = [];
    } */
    let resultado = {
        nombre: e.target.children[0].value,
        edad: e.target.children[1].value,
        apellido: e.target.children[2].value,
        trabajo: e.target.children[3].value
    }

    trabajadoresLista.push(resultado);
    localStorage.setItem("trabajador", JSON.stringify(trabajadoresLista));
})

boton.addEventListener("click", () => {
    contenedor.innerHTML = " ";
    let trabajador = JSON.parse(localStorage.getItem("trabajador"));

    trabajador.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML = `
                        nombre: ${element.nombre},
                        apellido:  ${element.apellido}
                        trabajo:  ${element.trabajo}`;
        contenedor.append(item);
    });
})

botonBorrado.addEventListener("click", () => {
    localStorage.removeItem("trabajador");
});