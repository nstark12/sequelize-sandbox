const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('pokemon_db', 'root', 'rootroot', {
    host: '127.0.0.1', // I had errors when using 'localhost', this was my fix
    dialect: 'mysql'
})

module.exports = sequelize