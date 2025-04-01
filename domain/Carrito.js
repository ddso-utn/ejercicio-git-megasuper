class Carrito {
    items

    constructor() {
        this.items = []
    }

    precioTotal() {
    }

    agregarItem(item) {
        this.items.push(item)
    }
}

module.exports = { Carrito }