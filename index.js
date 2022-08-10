/* const trabajador = [{

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
]; */

let formulario = document.getElementById("formulario");
let boton = document.getElementById("verProductos");
let contenedor = document.getElementById("contenedor");
let botonBorrado = document.getElementById("borrado");
fetch("./data.json")
    .then(response => response.json())
    .then(trabajador => {
        trabajador.forEach(element => {
            let item = document.createElement("divTrabajador");
            item.innerHTML = `
                        Nombre: ${element.nombre},
                        Apellido:  ${element.apellido}
                        Trabajo:  ${element.trabajo}`;
            contenedor.append(item);

            let trabajadoresLista = JSON.parse(localStorage.getItem("trabajadores")) || trabajador.map(trabajador => trabajador);

            formulario.addEventListener("submit", (e) => {
                e.preventDefault();
                let pase = (trabajadorStorage = trabajadoresLista) ? true : false;
                pase ? (trabajadorStorage) : (trabajadoresLista = []);

                let resultado = {
                    nombre: e.target.children[0].value,
                    edad: e.target.children[1].value,
                    apellido: e.target.children[2].value,
                    trabajo: e.target.children[3].value
                }
                trabajadoresLista.push(resultado);

                localStorage.setItem("trabajadores", JSON.stringify(trabajadoresLista));

                e.target.reset();
            })
            /* BOTON QUE MUESTRA LOS TRABAJADORES EN HTML  */
            boton.addEventListener("click", () => {
                Swal.fire('Se muestran los trabajadores')
                contenedor.innerHTML = " ";

                trabajadoresLista.forEach(element => {
                    let item = document.createElement("divTrabajador");
                    item.innerHTML = `
                        Nombre: ${element.nombre},
                        Apellido:  ${element.apellido}
                        Trabajo:  ${element.trabajo}`;
                    contenedor.append(item);
                });
            })
            /* BOTON QUE BORRA EL STORAGE Y LA ALERTA */
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
                    if (result.isConfirmed) {
                        localStorage.removeItem("trabajadores")
                        Swal.fire(
                            'Borrado!',
                            'Storage fue borrado.',
                            'success',
                            location.reload()
                        )
                    }
                })
            })
        })
    });