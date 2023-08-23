const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/connection')

// Extending model class
class Trainer extends Model {}

Trainer.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    numBadges: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, { // options of the model
    sequelize,
    modelName: 'Trainer',
    timestamps: true
})

module.exports = Trainer
