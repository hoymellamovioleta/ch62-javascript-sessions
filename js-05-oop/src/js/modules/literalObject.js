/* Ejemplo deobjeto literal
- Útil para configuraciones únicas
-No escalable para crear múltiples entidades
-Fácil de crear y usar
- Evictar tener decenas de variables sueltas
*/

/*
Symbol:
Un Symbol es un tipo de dato primitivo introducido en ES6. 
Su característica principal es que es único e inmutable.
Se utiliza principalmente para crear propiedades "ocultas" o identificadores 
únicos en objetos que no colisionen con otras claves (keys), 
incluso si tienen el mismo nombre descriptivo.
*/
const internalId = Symbol("id");
const aliceUser = {
    name: "Alice",
    lastName: "Smith",
    age: 30,
    email: "alice@gmail.com",
    getFullName() {
        /*Funciona, pero no es una buena practica ya que si cambia el nombre de la variable
        hay que cambiar todo:
        return `${literalUser.name} ${literalUser.lastName} ${literalUser.age}`;*/
        return `${this.name} ${this.lastName} ${this.age}`;
    },
    stringify() {
        return JSON.stringify(this);
    }
}
export { aliceUser };
