const Prisma = require('@prisma/client')
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

const getPost = async (req, res) => {
  const posts = await prisma.post.findMany()
  res.json(posts)
}

const createPost = async (req, res) => {
  const posts = await prisma.post.create({
    data: {
      title: req.body.title,
      description: req.body.description
    }
  })
  res.json({ posts })
}

const deletePost = async (req, res) => {
  const id = req.params.id
  const deletePost = await prisma.post.delete({
    where: {
      id: String(id)
    }
  })
  res.json(deletePost)
}

const updatePost = async (req, res) => {
  const { id } = req.params
  const { title, description } = req.body
  const updatePost = await prisma.post.update({
    where: {
      id: String(id)
    },
    data: {
      title: title,
      description: description
    }
  })
  res.json(updatePost)
}

module.exports = {
  getPost,
  createPost,
  deletePost,
  updatePost
}
