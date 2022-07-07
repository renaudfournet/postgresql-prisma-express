const Prisma = require('@prisma/client')
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

const getUser = async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
}

const postUser = async (req, res) => {
  const users = await prisma.user.create({
    data: {
      name: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age
    }
  })
  res.json({ users })
}

const deleteUser = async (req, res) => {
  const id = req.params.id
  const deleteUser = await prisma.user.delete({
    where: {
      id: Number(id)
    }
  })
  res.json(deleteUser)
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, lastName, age } = req.body
  const updateUser = await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: {
      name: name,
      lastName: lastName,
      age: age
    }
  })
  res.json(updateUser)
}

module.exports = {
  getUser,
  postUser,
  deleteUser,
  updateUser
}
