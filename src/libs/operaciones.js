/**
 * Modulo de Operaciones matematicas - Mira mas en {@tutorial tutorial1}
 * @module OpMatematicas
 */
/**
 * Suma 2 numeros
 * @param {number} x primer numero 
 * @param {number} y segundo numero 
 * @return {number} Suma de los 2 Numeros 
 */
const suma = (x, y) => x + y;

/**
 * Resta 2 numeros
 * @param {number} x primer numero 
 * @param {number} y segundo numero 
 * @return {number} Resta de los 2 Numeros 
 */
const resta = (x, y) => x - y;

/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
const division = (x, y) => x / y;

module.exports = {
    suma, resta, division
}