/*
 Ventajas de trabajar con ED Modules:
    1. Modularidad: Puedes dividir tu código en módulos más pequeños y manejables, 
    lo que facilita la organización y el mantenimiento del código.
    2. Reutilización: Puedes reutilizar módulos en diferentes partes de
     tu aplicación o incluso en diferentes proyectos, lo que ahorra tiempo y esfuerzo.
    3. Dependencias explícitas: Puedes declarar las dependencias de un módulo 
    de manera clara, lo que facilita la comprensión de cómo interactúan los diferentes módulos entre sí.
    4. Mejora del rendimiento: Los navegadores pueden cargar y ejecutar módulos 
    de manera más eficiente, ya que solo cargan los módulos necesarios cuando se requieren.    
*/

/**
 * Modifica el título principal de la página
 * @param {string} titleId El ID del elemento del título a modificar. 
 */

//También se puede agregar la palabra export antes de const para exportar la función
const changePrincipalTitle = ( titleId ) => {
    const titleElement = document.getElementById( titleId );
    
    // Se evalua que sea verdadero
    if ( titleElement ) { 
        titleElement.innerText = "OOP in Java Script, Cohorte 62";
    } else {
        //El warn muestra un icono de alerta
        console.warn( `Element with id "${ titleId }" not found.` ); 
    }
};
//Exporta la función para que pueda ser utilizada en otros módulos.
//Exportación nombrada
//Las exportacións van hasta el final del archivo
export {changePrincipalTitle}