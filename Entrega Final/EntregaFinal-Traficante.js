let cart = [];
let precio_total = 0;


function agregar_a_carrito(e) {
    event.preventDefault();

    let hijo = e.target;
    let padre = hijo.parentNode;

    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let imagen_producto = padre.querySelector("img").src;

    let producto_existente = cart.find(p => p.nombre === nombre_producto);

    if (producto_existente) {
        producto_existente.cantidad += 1;
    } else {
        let producto = {
            nombre: nombre_producto,
            precio: parseInt(precio_producto),
            img: imagen_producto,
            cantidad: 1,
        }
        cart.push(producto);
    }

    precio_total = 0;
    for (let i = 0; i < cart.length; i++) {
        precio_total += cart[i].precio * cart[i].cantidad;
    }

    document.querySelector(".precio_total").textContent = precio_total;

    let arreglo_json = JSON.stringify(cart);
    localStorage.setItem("carrito", arreglo_json);

    mostrar_carrito();



}

function mostrar_carrito() {

    let tabla = document.getElementById("tbody");

    let arr = localStorage.getItem("carrito");

    tabla.innerHTML = "";

    for (let products of cart) {

        let fila = document.createElement("tr");

        fila.innerHTML = `<td><img src="${products.img}" width="45px"></td>
                          <td class="nombreProducto">${products.nombre}</td>
                          <td>x${products.cantidad}</td>
                          <td>$${products.precio}</td>
                          <td><button class="btn_borrar_elemento">Eliminar</button></td>`
        tabla.append(fila);


    }


    let boton_borrar = document.querySelectorAll(".btn_borrar_elemento");

    for (let boton of boton_borrar) {
        boton.addEventListener("click", eliminar_producto);
    }

}




function eliminar_producto(e) {

    let abuelo = e.target.parentNode.parentNode;

    let producto_eliminar = abuelo.querySelector(".nombreProducto").textContent

    let producto_existente = cart.find(p => p.nombre === producto_eliminar);

    if (producto_existente.cantidad > 1) {
        producto_existente.cantidad -= 1;
    } else {
        function borrar_producto(producto) {
            return producto.nombre !== producto_eliminar;
        }

        let resultado_filter = cart.filter(borrar_producto);

        cart = resultado_filter;
    }

    precio_total -= producto_existente.precio;

    document.querySelector(".precio_total").textContent = precio_total;

    let arreglo_json = JSON.stringify(cart);
    localStorage.setItem("carrito", arreglo_json);

    mostrar_carrito();
}



let btn_compra = document.querySelectorAll(".btn-add-cart");

for (let boton of btn_compra) {
    boton.addEventListener("click", agregar_a_carrito);
}


function carro_flot(x) {
    document.getElementById("products-id").style.display = "grid";
}


function btn_cerrar() {
    document.getElementById("products-id").style.display = "none";
}



function finalizarCompra() {
    if (precio_total !== 0) {
        alert(`Tu compra de $${precio_total} ha sido realizada. Gracias por elegirnos!`);
        cart = [];
        mostrar_carrito();
        document.querySelector(".precio_total").textContent = 0
    } else {
        alert("No has seleccionado ningun producto, intenta nuevamente.")
    }
}


const bannerSponsors = document.getElementById("banner-sponsors");

fetch("sponsors.json")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let img = document.createElement("img");
            img.src = data[i].img;
            bannerSponsors.appendChild(img);
        }
    })
