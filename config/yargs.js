const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const crear = {
    descripcion
}

const actualizar = {
    descripcion,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const borrar = {
    descripcion
}

const argv = require('yargs')
    // .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un elemento por hacer', crear)
    .command('actualizar', 'Actualizar el estado completado de una tarea', actualizar)
    .command('borrar', 'Borra una tarea', borrar)
    .help()
    .argv;

module.exports = {
    argv
}