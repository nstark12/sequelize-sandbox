const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('pokemon_db', 'root', 'rootroot', {
    host: '127.0.0.1', // I had errors when using 'localhost', this was my fix
    dialect: 'mysql'
})


// Define Models

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

// Sync all models at one time
// Force true drops and recreates tables (default is false) make sure to change to false when models are solidified or if using heroku

// const isProduction = process.env.NODE_ENV === 'production' // use this in place of true or false when using heroku  then put '!isProduction' as force
sequelize.sync({ force: true })

