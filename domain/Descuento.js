
export class DescuentoFijo {

    constructor(valor) {
        this.valor = valor
    }

    valorDescontado(precioBase, cantidad) {
        return this.valor * cantidad 
    }

}

export class DescuentoPorcentual {
    constructor(porcentaje) {
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase, cantidad) {
        return cantidad * precioBase * this.porcentaje / 100
    }
}

export class DescuentoPorCantidad {
    constructor(cantidadMinima, porcentaje) {
        this.cantidadMinima = cantidadMinima
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase, cantidad) {
        const vecesRepetido = Math.floor(cantidad / this.cantidadMinima)
        let valorDescontado = 0
        if (vecesRepetido >= 1) {
            valorDescontado = precioBase * (this.porcentaje / 100) * vecesRepetido
        }
        return valorDescontado
    }
}
