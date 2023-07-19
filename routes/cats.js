const router = require('express').Router()
const catsCtrl = require('../controllers/cats.js')

router.post('/', catsCtrl.create)

module.exports = router