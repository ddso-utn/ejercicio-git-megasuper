function aumentarPrecioBaseForEach(productos, monto) {
    productos.forEach(producto => {
        producto.precioBase = producto.precioBase + monto
        // Wollok: producto.setPrecioBase(producto.getPrecioBase() + monto)
    })
}

function aumentarPrecioBaseMap(productos, monto) {
    return productos.map(productos =>
        productos.precioBase + monto   
    )
}

function precioMasAlto(productos) {
    const preciosProductos = productos.map(productos => productos.precioBase)
    return Math.max(...preciosProductos)
}

function productoMasCaro(productos) {
    return productos.reduce((productoMasCaro, productoSiguiente) => {
        return productoMasCaro.precioBase > productoSiguiente.precioBase ? productoMasCaro : productoSiguiente
    })
}

function productosMasBaratosQue(productos, monto) {
    return productos.filter((producto) => producto.precioFinal() < monto )
}

function obtenerPrecioTotal(productos) {
    return productos.reduce((acumulador, productoSiguiente) => {
        return acumulador + productoSiguiente.precioFinal()
    }, 0)
}

function ordenarLista(productos) {
    productos.sort((p1, p2) => p1.precioFinal() - p2.precioFinal())
}

function obtenerPrecioTotalSinDescuentos(productos) {
    return productos.reduce((acumulador, productoSiguiente) => acumulador + productoSiguiente.precioBase, 0)
}

module.exports = { 
    aumentarPrecioBaseForEach, 
    aumentarPrecioBaseMap, 
    precioMasAlto, 
    productosMasBaratosQue, 
    obtenerPrecioTotal, 
    ordenarLista 
}