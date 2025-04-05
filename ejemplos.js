const { Carrito } = require("./domain/Carrito");
const { DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual } = require("./domain/Descuento");
const { ItemCarrito } = require("./domain/ItemCarrito");
const { Producto } = require("./domain/Producto");

const p1 = new Producto("Coca", 10, 2)
const carrito = new Carrito()
const item = new ItemCarrito(p1, 2)
item.agregarDescuento(new DescuentoFijo(5))
item.agregarDescuento(new DescuentoPorCantidad(2, 50))
item.agregarDescuento(new DescuentoPorcentual(10))
carrito.agregarItem(item)

console.log(carrito.precioTotal())