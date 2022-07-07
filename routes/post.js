const express = require('express')
const { getPost, createPost, deletePost, updatePost } = require('../controllers/post')

const router = express.Router()

router.get('/', getPost)

router.post('/', createPost)

router.delete('/:id', deletePost)

router.put('/:id', updatePost)

module.exports = router
