const { Cat } = require('../models');

const create = async (req, res) => {
  try {
    const cat = await Cat.create(req.body)
    res.status(201).json(cat)
  } catch (error) {
    console.log(error)
    req.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cats = await Cat.findAll()
    res.status(200).json(cats)
  } catch (error) {
    console.log(error)
    req.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
}