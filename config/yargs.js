const opts = {
    base: {

        demand: true,

        alias: 'b'

    },

    limite: {

        alias: 'l',

        default: 10

    }
}

const argv = require('yargs')

.command('listar', 'imprime tabla en consola', {



})

.command('crear', 'crear otr', {

    base: {

        demand: true,

        alias: 'b'

    },

    limite: {

        alias: 'l',

        default: 10

    }

})

.help()

.argv;