const prestamos = [{identificador: 1, nombre: "Prestamo Simple", moneda: "pesos", montoMaximo: 50000},
                   {identificador: 2, nombre: "Prestamo Compuesto", moneda: "pesos", montoMaximo: 100000},
                   {identificador: 3, nombre: "Prestamo Indexado", moneda: "pesos", montoMaximo: 250000},
                   {identificador: 4, nombre: "Prestamo Automotor", moneda: "pesos", montoMaximo: 300000},
                   {identificador: 5, nombre: "Prestamo Refaccion Casa", moneda: "pesos", montoMaximo: 500000}];

function mostrarPrestamos(){
    for (const prestamo of prestamos){
        let listaPrestamos = document.createElement("div");
        listaPrestamos.innerHTML = `<ul> <li> identificador: ${prestamo.identificador}, ${prestamo.nombre}, moneda: ${prestamo.moneda} </li> </ul>`;
        document.getElementById("divListaPrestamos").appendChild(listaPrestamos);
    }
}

mostrarPrestamos();

function simularPrestamo(){
    const formulario = document.getElementById("datosFormulario");
    let identificacion = formulario.identificador.value;
    let plata = formulario.monto.value;
    for(let i = 0; i<prestamos.length;i++){
        if(identificacion == prestamos[i].identificador){
            if(plata <= 50000){
                let resultado = document.createElement("div");
                alert("Su prestamo," + " " + prestamos[i].nombre + " " + "ha sido aprobado");
            }
            else if(plata > 50000 && plata <= 100000){
                alert("Su prestamo," + " " + prestamos[i].nombre + " " + "ha sido aprobado");
            }
            else if(plata > 100000 && plata <= 250000){
                alert("Su prestamo," + " " + prestamos[i].nombre + " " + "ha sido aprobado");
            }
            else if(plata > 250000 && plata <= 300000){
                alert("Su prestamo," + " " + prestamos[i].nombre + " " + "ha sido aprobado");
            }
            else if(plata > 300000 && plata <= 500000){
                alert("Su prestamo," + " " + prestamos[i].nombre + " " + "ha sido aprobado");
            }
            else if(plata > 500000){
                alert("Su prestamo," + " " + prestamos[i].nombre + " " + "no ha sido aprobado");
            }            
        }
    }
}

class Persona{
    constructor(cedula, nombre, correo){
        this.cedula = cedula;
        this.nombre = nombre;
        this.correo = correo;
    }
}

function guardarFormularioClientes(){
    const formulario = document.getElementById("datosClientes");
    const datosClientes = {
        cedula: formulario.cedula.value,
        nombre: formulario.nombre.value,
        correo: formulario.correo.value
    }
    const datosClientesJson = JSON.stringify(datosClientes);
    const persona = new Persona(datosClientes.cedula, datosClientes.nombre, datosClientes.correo);
    localStorage.setItem("cliente", datosClientesJson);
    alert("La solicitud del cliente ha sido exitosa");
}

function recuperarDatosCliente(){
    const formulario = document.getElementById("recuperarDatosClientes");
    let = cedula = formulario.cedula.value;
    let resultadoJson = localStorage.getItem("cliente");
    let resultadoJS = JSON.parse(resultadoJson);
    let resultadoCedula = resultadoJS.cedula;
    alert("El cliente: " + resultadoCedula + " " + "ya tiene una solicitud en curso");
}

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click", simularPrestamo);

let botonEnviarCliente = document.getElementById("botonEnviarCliente");
botonEnviarCliente.addEventListener("click", guardarFormularioClientes);

let botonRecuperarDatos = document.getElementById("botonRecuperarDatos");
botonRecuperarDatos.addEventListener("click", recuperarDatosCliente);