const router = require('express').Router()
const { Pokemon } = require('../models')

// created
router.post('/', async (req, res) => {
  const { name, type, moves, is_evolved, trainer_id } = req.body

  try {
    // const result = await connection.promise().query(
    //   'INSERT INTO pokemon (names, type, moves, is_evolved, trainer_id) VALUES (?,?,?,?,?)',
    //   [name, type, moves, is_evolved, trainer_id]
    // )

    if (!req.body.name) {
        return res.status(400).send('Please enter a valid name')
    }

    if (!req.body.type) {
        return res.status(400).send('Please enter a valid type')
    }

    const newPokemon = await Pokemon.create(req.body)
    res.json(newPokemon)

  } catch(err) {
    res.status(500).json(err)
  }
})

// read
router.get('/', async (req, res) => {
  try {

    const allPokemon = await Pokemon.findAll()
    res.json(allPokemon)

  } catch(err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {

    const pokemon = await Pokemon.findByPk(id)

    res.json(pokemon)

  } catch(err) {
    res.status(500).json(err)
  }
})

// router.get('/pokemon-who-have-trainers', async (req, res) => {
//   try {
//     const results = await connection.promise().query(`
//       SELECT 
//         pokemon.id AS pokemon_id, 
//         pokemon.name AS pokemon_name, 
//         pokemon.type, 
//         trainers.id AS trainer_id, 
//         trainers.name AS trainer_name, 
//         trainers.age, 
//         trainers.num_badges 
//       FROM pokemon
//       INNER JOIN trainers ON pokemon.trainer_id = trainers.id;
//     `)
//     res.json(results)
//   } catch(err) {
//     res.status(500).json(err)
//   }
// })

// update
router.put('/:id', async (req, res) => {
  const id = req.params.id

  try {

    const updatedPokemon = await Pokemon.update(req.body, {
        where: {
            id
        },
        raw: true,
    })

    res.json(updatedPokemon)

  } catch(err) {
    res.status(500).json(err)
  }
})

// delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {

    const result = await Pokemon.destroy({
        where: {
            id
        }
    })
    res.json(result)

  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router