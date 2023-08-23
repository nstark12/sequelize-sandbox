const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/connection')

class Pokemon extends Model {}

Pokemon.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    moves: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Moves', //name of table it references
            key: 'id'
        }
    },
    isEvolved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    trainerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Trainers',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Pokemon',
    timestamps: true,
    freezeTableName: true
})

module.exports = Pokemon