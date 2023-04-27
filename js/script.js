// variables
let opcion = -1

let cantNike= 25;
let precNike = 81000;

let cantJordan = 10;
let precJordan = 99000;

let cantAdidas = 20;
let precAdidas = 61000;

let cantConverse = 15;
let precConverse = 27000;

// funciones
const mostrarTablaStock = (nNike, nJordan, nAdidas, nConverse, pNike, pJordan, pAdidas, pConverse) => {

  return parseInt(prompt((
    "CHAPA SHOES - STOCK" + "\n" +
    "Items    Cantidad    Precio por unidad\n" +
    "Nike    " + nNike + " uni    $" + pNike + "\n" +
    "Jordan    " + nJordan + " uni    $" + pJordan + "\n" +
    "Vans    " + nAdidas + " uni    $" + pAdidas + "\n" +
    "Converse    " + nConverse + " uni    $" + pConverse + "\n\n" +
    "Ingrese 1 para realizar un pedido. Ingrese 0 para volver al menú principal."
  )));
}

const mostrarMenuPrincipal = () => {

  return (
    "CHAPA SHOES" + "\n" +
    "1 - Ver Stock" + "\n" +
    "2 - Realizar pedido" + "\n" +
    "0 - Salir" + "\n\n" +
    "Selecciona una opcion."
  )
}

const menuMostrarProductos = () => {

  let productoId;

  while (repeat = true) {
    productoId = parseInt(prompt((
      "CHAPA SHOES - Productos" + "\n" +
      "1 - Nike" + "\n" +
      "2 - Jordan" + "\n" +
      "3 - Adidas" + "\n" +
      "4 - Converse" + "\n\n" +
      "Selecciona tu opcion."
    )))
    if (productoId > 0 && productoId <= 4) {
      return productoId;
    } else {
      mensajeOpcionNoValida();
    }
  }
}

const preguntarCantidad = (producto) => {

  let value;

  while (true) {
    value = parseInt(prompt((
      "CHAPA SHOES - Cantidad" + "\n" +
      "Ingresa la cantidad de " + producto + ":"
    )));
    if (value > 0) {
      return value;
    } else {
      alert("Error: la cantidad tiene que mayor a 0")
    }
  }
}

const chequearNanEspacioVacio = (mensaje) => {

  let condicion = true;

  while (condicion == true) {
    valor = prompt(mensaje);
    console.log(valor);
    if (valor == "" || valor == null) {
      condicion = true;
      alert("Error: no se ha ingresado ningun valor.");
    } else {
      condicion = false;
    }
  }

  return valor;
}

const preguntarNombres = () => {

  valor = 0

  return chequearNanEspacioVacio(
    "CHAPA SHOES - Nombre" + "\n" +
    "Ingrese su/s nombre/s:"
  );
}

const preguntarApellidos = () => {

  return chequearNanEspacioVacio(
    "CHAPA SHOES - Apellido" + "\n" +
    "Ingrese su/s apellido/s:"
  )
}

const preguntarDireccion = () => {

  return chequearNanEspacioVacio(
    "CHAPA SHOES - Direccion" + "\n" +
    "Ingrese su direccion:"
  )
}

const preguntarEmail = () => {

  return chequearNanEspacioVacio(
    "CHAPA SHOES - E-mail" + "\n" +
    "Ingrese la email:"
  )
}

const emailComprador = () => {

  return (
    "CHAPA SHOES - email" + "\n" +
    "Ingrese su email:"
  )
}

const preguntarCondicionComprador = () => {

  let condicion = -1;

  while (condicion == -1) {
    condicion = parseInt(prompt(
      "CHAPA SHOES - Entrega" + "\n" +
      "Condiciones de entrega:\n" +
      "1 - Retiro en sucursal" + "\n" +
      "2 - Envio a domicilio" + "\n\n" +
      "Seleccione su entrega:"
    ));
    if (!(condicion > 0 && condicion <= 2)) {
      condicion = -1;
      mensajeOpcionNoValida();
    }
  }

  return condicion;
}

const confirmarCompra = (productoId, productoQty, condicionComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador) => {

  let condicionEntrega = " | Retiro en sucursal.";

  if (condicionComprador == 2) {
    condicionEntrega = " | Envio a domicilio.";
  }

  return parseInt(prompt((
    "CHAPA SHOES - Confirmar compra" + "\n" +
    productoQty + " uni de " + convierteIdNombre(productoId) + " | Pre. uni: $" + precioProducto(productoId) + condicionEntrega + " | Precio final: $" + precioFinal + "\n" +
    "A nombre de: " + apellidosComprador + ", " + nombresComprador + ".\n" +
    "Direccion de entrega: " + direccionComprador + ". E-mail: " + emailComprador + ".\n\n" +
    "Ingrese 1 para confirmar la compra. Ingrese 0 para cancelar la compra."
  )));
}

const chequearStock = (stock, cantSolicitada) => {

  if (stock - cantSolicitada >= 0) {
    return false;
  } else {
    alert("Error: cantidad pedida supera el stock de " + stock + " unidades.");
  }

  return true;
}

const convierteIdNombre = (id) => {

  switch (id) {
    case 1:
      return "Nike";
    case 2:
      return "Jordan";
    case 3:
      return "Adidas"
    case 4:
      return "Converse"
    default:
      return "Producto Desconocido"
  }
}

const precioProducto = (productoId) => {

  switch (productoId) {
    case 1:
      return precNike;
    case 2:
      return precJordan;
    case 3:
      return precAdidas;
    case 4:
      return precConverse;
    default:
      alert("Error")
      return 0;
  }
}

const calcularPrecioFinal = (productoId, productoQty, condicionComprador) => {

  let precioFinal = productoQty * precioProducto(productoId);

  if (condicionComprador == 2) {
    return precioFinal + 1000;
  }

  return precioFinal;
}

const graciasCompra = () => {

  alert("¡Muchas gracias por su compra!");
}

const compraCancelada = () => {

  alert("¡Atencion: Compra cancelada!");
}

const descontarStock = (productoId, productoQty) => {
  switch (productoId) {
    case 1:
      cantNike = cantNike - productoQty;
      break;
    case 2:
      cantJordan = cantJordan - productoQty;
      break;
    case 3:
      cantAdidas = cantAdidas - productoQty;
      break;
    case 4:
      cantConverse = cantConverse - productoQty;
      break;
    default:
      alert("Error");
      break;

  }
}


const menuPrincipalPedido = () => {

  let repeat = true;
  let productoId;
  let productoQty;
  let nombresComprador;
  let apellidosComprador;
  let emailComprador;
  let condicionComprador;
  let precioFinal;
  let confirmaCompra;

  while (repeat == true) {

    productoId = menuMostrarProductos();
    productoQty = preguntarCantidad(convierteIdNombre(productoId));

    switch (productoId) {
      case 1:
        repeat = chequearStock(cantNike, productoQty);
        break;
      case 2:
        repeat = chequearStock(cantJordan, productoQty);
        break;
      case 3:
        repeat = chequearStock(cantAdidas, productoQty);
        break;
      case 4:
        repeat = chequearStock(cantConverse, productoQty);
        break;
      default:
        alert("Error: producto no encontrado.");
        break;
    }
  }

  nombresComprador = preguntarNombres();
  apellidosComprador = preguntarApellidos();
  direccionComprador = preguntarDireccion();
  emailComprador = preguntarEmail();
  condicionComprador = preguntarCondicionComprador();
  precioFinal = calcularPrecioFinal(productoId, productoQty, condicionComprador);
  confirmaCompra = confirmarCompra(productoId, productoQty, condicionComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador);
  if (confirmaCompra == 1) {
    descontarStock(productoId, productoQty);
    graciasCompra();
  } else {
    compraCancelada();
  }

  return -1;
}

const mensajeOpcionNoValida = () => {
  alert("Error por opcion no valida ingresada.");
}

console.log("Inicio");

while (opcion != 0) {
  opcion = parseInt(prompt(mostrarMenuPrincipal()))

  switch (opcion) {
    case 0:
      alert("Gracias por tu visita. ¡Te esperamos pronto!");
      break;
    case 1:
      opcion = mostrarTablaStock(cantNike, cantJordan, cantAdidas, cantConverse, precNike, precJordan, precAdidas, precConverse);
      if (opcion == 1) {
        menuPrincipalPedido();
      } else {
        opcion = -1;
      }
      break;
    case 2:
      opcion = menuPrincipalPedido();
      break;
    default:
      mensajeOpcionNoValida();
      break;
  }
}

console.log("Fin");





