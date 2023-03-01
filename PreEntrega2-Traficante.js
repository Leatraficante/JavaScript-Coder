function login() {
    let user = prompt("Ingrese Nombre de Usuario").toLowerCase()
    let pass = prompt("Ingrese Password")
    let contador = 1
    while ((pass == "" || user == "") && contador < 3){
     alert("Usuario o contraseña invalido, vuelva a intentarlo")
     contador++
     user = prompt("Ingrese Nombre de Usuario")
     pass = prompt("Ingrese Passowrd")
    }
    if (contador === 3) {
        return false
    } else {
        alert(`Bienvenido ${user} a ElectroPlus`)
        return true
    }
}

const productos = [
    {id: 1, nombre: "celular", precio: 150000},
    {id: 2, nombre: "tv", precio: 235000},
    {id: 3, nombre: "lavarropas", precio: 250000},
    {id: 4, nombre: "heladera", precio: 335000},
    {id: 5, nombre: "pc", precio: 450000},
];

let carrito = [];

function compraProducto() {
    let seleccion = prompt(`Seleccione el producto que desea adquirir: 
        1) ${productos[0].nombre} ($${productos[0].precio}) 
        2) ${productos[1].nombre} ($${productos[1].precio}) 
        3) ${productos[2].nombre} ($${productos[2].precio})
        4) ${productos[3].nombre} ($${productos[3].precio})
        5) ${productos[4].nombre} ($${productos[4].precio})`
    )

    let productoSeleccionado = productos.find(producto => producto.id === parseInt(seleccion))

    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        alert(`Se ha agregado "${productoSeleccionado.nombre}" al carrito.`)
    } else {
        alert("Producto no encontrado, vuelva a intentarlo")
    }

    let cantidad = prompt(`Ingrese la cantidad que desea comprar de ${productoSeleccionado.nombre}:`);
    
    let cuotas = Number(prompt("En cuántas cuotas quiere comprar el producto?: 1 | 3 | 6 | 12")); 

    let precioTotal = cantidad * productoSeleccionado.precio;

    if (cuotas == 1) { 
        resultado = parseInt(precioTotal * 0.75)
        alert(`Felicitaciones, por haber pagado en 1 cuota has recibido un descuento; el saldo final de tu compra es de ${resultado}`)
    } else if (cuotas == 3) {
        resultado = parseInt(precioTotal / cuotas)
        alert(`El monto total de tu compra es de $${precioTotal}, a pagar en 3 cuotas de $${resultado}`)
    } else if (cuotas == 6) {
        resultado = parseInt(precioTotal / cuotas)
        alert(`El monto total de tu compra es de $${precioTotal}, a pagar en 6 cuotas de $${resultado}`)
    } else if (cuotas == 12) {
        resultado = parseInt((precioTotal / cuotas) * 1.25)
        alert(`El monto total de tu compra es de $${precioTotal * 1.25}, a pagar en 12 cuotas de $${resultado}`)
    } else {
        alert("Plan de cuotas no permitido, vuelva a intentarlo")
    }
}

let compraFinal = function(){
    if (login() == true) {
        return compraProducto()
    } else {
        return alert("Limite de intentos, vuelva a ingresar")
    }
}

compraFinal()