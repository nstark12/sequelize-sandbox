const router = require('express').Router()
const pokemonRoutes = require('./pokemon')
const trainerRoutes = require('./trainers')

router.use('/api/pokemon', pokemonRoutes)
router.use('/api/trainers', trainerRoutes)

module.exports = router