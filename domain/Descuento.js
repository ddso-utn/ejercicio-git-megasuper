
class DescuentoFijo {

    constructor(valor) {
        this.valor = valor
    }

    valorDescontado(precioBase, cantidad) {
    }

}

class DescuentoPorcentual {
    constructor(porcentaje) {
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase, cantidad) {
        return cantidad * precioBase * this.porcentaje / 100
    }
}

class DescuentoPorCantidad {
    constructor(cantidadMinima, porcentaje) {
        this.cantidadMinima = cantidadMinima
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase, cantidad) {

    }
}

module.exports = { DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual }