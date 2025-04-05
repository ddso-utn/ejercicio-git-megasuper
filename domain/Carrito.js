class Carrito {
    items

    constructor() {
        this.items = []
    }

    precioTotal() {
        return this.items.reduce((prev, curr) => prev + curr.precioFinal(), 0)
    }

    agregarItem(item) {
        this.items.push(item)
    }
}

module.exports = { Carrito }