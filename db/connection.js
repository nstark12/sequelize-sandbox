const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: '127.0.0.1', // I had errors when using 'localhost', this was my fix
    dialect: 'mysql'
})

module.exports = sequelize