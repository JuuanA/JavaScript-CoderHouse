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

let trabajadoresLista = JSON.parse(localStorage.getItem("trabajadores")) || trabajador.map(trabajador => trabajador);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    /*     let trabajadorStorage = JSON.parse(localStorage.getItem("trabajador")); */

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

    localStorage.setItem("trabajadores", JSON.stringify(trabajadoresLista));

    e.target.reset();

    /*    trabajadoresLista.push(resultado);
       localStorage.setItem("trabajador", JSON.stringify(trabajadoresLista)); */
})

boton.addEventListener("click", () => {
    Swal.fire('Se muestran los trabajadores')
    contenedor.innerHTML = " ";

    trabajadoresLista.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML = `
                        nombre: ${element.nombre},
                        apellido:  ${element.apellido}
                        trabajo:  ${element.trabajo}`;
        contenedor.append(item);
    });
})

botonBorrado.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estas seguro de borrar Storage?',
        text: "No se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , borrar!',
    }).then((result) => {
        localStorage.removeItem("trabajadores")
        if (result.isConfirmed) {
            Swal.fire(
                'Borrado!',
                'Storage fue borrado.',
                'success',
                location.reload()
            )
        }
    })
})






/* me paso emiliano */

/* botonBorrado.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estas seguro de borrar Storage?',
        text: "No se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , borrar!',
        href: location.reload()
    })
}); */






/* ORIGINAL  */

/* title: '¿Estas seguro de borrar Storage?',
    text: "No se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si , borrar!', */
/*         location.reload();   No funciona , VER */