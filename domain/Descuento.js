
class DescuentoFijo {

    constructor(valor) {
        this.valor = valor
    }

    valorDescontado(precioBase, cantidad) {
        return this.valor
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
        const vecesRepetido = Math.floor(cantidad / this.cantidadMinima)
        let valorDescontado = 0
        valorDescontado = precioBase * (this.porcentaje / 100) * vecesRepetido
        return valorDescontado
    }
}

module.exports = { DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual }