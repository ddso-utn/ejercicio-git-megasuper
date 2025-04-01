class Producto {

    #precioBase

    constructor(nombre, precioBase) {
        this.nombre = nombre
        this.#precioBase = precioBase
        this.descuentos = []
    }

    get precioBase() {
        return this.#precioBase
    }

    set precioBase(nuevoPrecio) {
        this.#precioBase = nuevoPrecio
    }
}

module.exports = { Producto }