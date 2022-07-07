const express = require('express')
const { getUser, postUser, deleteUser, updateUser } = require('../controllers/user')

const router = express.Router()

router.get('/', getUser)

router.post('/', postUser)

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

module.exports = router
