const { DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

// Using .define()
const Move = sequelize.define('Move', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Move
