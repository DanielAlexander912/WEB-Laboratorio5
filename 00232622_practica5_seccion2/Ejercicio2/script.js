document.addEventListener("DOMContentLoaded", () => {
    const elementCarrito = document.querySelector("#carrito");
    const elementTotal = document.querySelector("#total");
    const carrito = {
        productos: [{
            nombre: 'papel higienico',
            unidades: 4,
            precio: 5
        },
        {
            nombre: 'chocolate',
            unidades: 2,
            precio: 1.5
        }],
        get precioTotal() {
            let precio = 0;
            for (let i = 0; i < this.productos.length; i++){
                precio += this.productos[i].unidades * this.productos[i].precio
            }
            return precio;
        }
    }

    for(let i = 0; i < carrito.productos.length; i++){
        elementCarrito.innerHTML += "[Producto: " + carrito.productos[i].nombre + ", ";
        elementCarrito.innerHTML += "Unidades: " + carrito.productos[i].unidades + ", ";
        elementCarrito.innerHTML += "Precio: " + carrito.productos[i].precio + "]    ";
    }
    elementTotal.innerHTML += "Precio total: " + carrito.precioTotal;
});