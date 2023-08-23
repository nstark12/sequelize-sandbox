const sequelize = require('./db/connection')

require('./models')


// Sync all models at one time
// Force true drops and recreates tables (default is false) make sure to change to false when models are solidified or if using heroku

// const isProduction = process.env.NODE_ENV === 'production' // use this in place of true or false when using heroku  then put '!isProduction' as force
sequelize.sync({ force: true })

