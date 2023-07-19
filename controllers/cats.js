const { Cat } = require('../models');
const { Feeding } = require('../models');

const create = async (req, res) => {
  try {
    const cat = await Cat.create(req.body)
    res.status(201).json(cat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cats = await Cat.findAll()
    res.status(200).json(cats)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    res.status(200).json(cat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    cat.set(req.body)
    await cat.save()
    res.status(200).json(cat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const deleteCat = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    await cat.destroy()
    res.status(200).json(cat)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const addFeeding = async (req, res) => {
  try {
    req.body.catId = req.params.id
    const feeding = await Feeding.create(req.body)
    res.status(201).json(feeding)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteCat,
  addFeeding,
}