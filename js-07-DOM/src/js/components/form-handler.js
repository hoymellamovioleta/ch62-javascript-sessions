/**
 * Módulo para manejar formularios
 * @returns {object} objeto con lo inputs del formulario
 */

const formHandler = ( ) => {
    const tasktitle = document.getElementById("taskTitle").value; // Para checkboxes usar .checked 

    return {
        tasktitle: tasktitle
    }
}

export { formHandler }; // exportación nombrada