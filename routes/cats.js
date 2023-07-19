const router = require('express').Router()
const catsCtrl = require('../controllers/cats.js')

router.post('/', catsCtrl.create)
router.get('/', catsCtrl.index)

module.exports = router