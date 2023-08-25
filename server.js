const sequelize = require('./db/connection')
require('./models')
const routes = require('./routes')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)




sequelize.sync({ force: false }).then(() => {
    
    console.log('DB synced!')
    app.listen(PORT, () => {
        console.log(`Express listening at http://localhost:${PORT}`)
    })
})

// Sync all models at one time
// Force true drops and recreates tables (default is false) make sure to change to false when models are solidified or if using heroku

// const isProduction = process.env.NODE_ENV === 'production' // use this in place of true or false when using heroku  then put '!isProduction' as force
// sequelize.sync({ force: true }).then(async () => {
//     // CREATE
//         await Pokemon.create({
//             name: 'Pikachu',
//             type: 'electric',
//             isEvolved: true
//         })

//         await Pokemon.create({
//             name: 'Raichu',
//             type: 'electric',
//             isEvolved: true
//         })   
        
//         await Pokemon.create({
//             name: 'Jigglypuff',
//             type: 'fairy',
//             isEvolved: false
//         })    

//     // READ
//         // Find all
//         // const allPokemon = await Pokemon.findAll({ raw: true })
//         // console.log(allPokemon)

//         // Find all of specific type
//         const electricPokemon = await Pokemon.findAll({ 
//             where: {
//                 type: 'electric'
//             },
//             raw: true })

//         // Finds first match
//         const onePokemon = await Pokemon.findOne({
//             where: {
//                 isEvolved: true,
//             },
//             raw: true
//         })

//         const specificPokemon = await Pokemon.findByPk(2, { raw: true })

//         console.log(specificPokemon)

//     // UPDATE
//         await Pokemon.update({ 
//             name: 'Bulbasaur', 
//             type: 'grass' 
//         }, {
//             where: {
//                 id: 2
//             },
//             raw: true
//         })

//     // DELETE
//         await Pokemon.destroy({
//             where: {
//                 id: 2
//             }
//         })

        
//     // Find all
//     const allPokemon = await Pokemon.findAll({ raw: true })
//     console.log(allPokemon)

// })

