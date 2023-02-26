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


function compraProducto() {
    let producto = prompt(" Ingrese el producto que desea adquirir: TV | Celular | Lavarropas | Heladera | PC").toLowerCase()
    let cuotas = Number(prompt("En cuántas cuotas quiere comprar el producto?: 1 | 3 | 6 | 12"))

    switch(producto) {
        case "tv":
            valor = 120000
            dsctoUnPago = 0.95
            interes12cuotas = 1.12
            break
        case "celular":
            valor = 60000
            dsctoUnPago = 0.95
            interes12cuotas = 1.06
            break
        case "lavarropas":
            valor = 150000
            dsctoUnPago = 0.95
            interes12cuotas = 1.15
            break
        case "heladera":
            valor = 220000
            dsctoUnPago = 0.95
            interes12cuotas = 1.22
            break
        case "pc":
            valor = 185000
            dsctoUnPago = 0.95
            interes12cuotas = 1.185
            break
        default: 
            alert("No encontramos ese producto, intente nuevamente")
            break
    }

    if (cuotas == 1) { 
        resultado = valor * dsctoUnPago
        alert(`Felicitaciones, por haber pagado en 1 cuota has recibido un descuento del 5%; el saldo final de tu compra es de ${resultado}`)
    } else if (cuotas == 3) {
        resultado = parseInt(valor / cuotas)
        alert(`Debes pagar el producto en 3 cuotas de ${resultado}`)
    } else if (cuotas == 6) {
        resultado = parseInt(valor / cuotas)
        alert(`Debes pagar el producto en 6 cuotas de ${resultado}`)
    } else if (cuotas == 12) {
        resultado = parseInt((valor / cuotas)*interes12cuotas)
        alert(`Debes pagar el producto en 12 cuotas de ${resultado}`)
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