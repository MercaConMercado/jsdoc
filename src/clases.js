/**
 * Clase para crear programador
 * @example
 * const programadorX = new programador ({nombre: "XXXXXX", "lenguaje programacion"})
 * new programadoX.getInfo();
 * @see https://docs.github.com/en/free-pro-team@latest/rest/reference/repos
 * @todo pendiente subir a github esta informacion
 */
class programador {
    /**
     * Constructor 
     * @param {{nombre: string}} usuario Informacion usuario
     * @param {string} lenguaje lenguaje que utiliza
     */
    constructor(usuario, lenguaje) {
        this.nombre = usuario.nombre;
        this.lenguaje = lenguaje;

    }

    /**
     * Obtener informacion de los usuarios
     * @returns {void}
     */
    getInfo(){
        console.log(`Yo soy ${this.nombre} y programo en ${this.lenguaje}`)
    }
}

/**
 * conoce mas en {@link programador}
 */
const programador1 = new programador ({nombre: "daniel mercado"}, "java Script");
const programador2 = new programador ({nombre: "duvis M'cquery"}, "java Script");

programador1.getInfo();
programador2.getInfo();

