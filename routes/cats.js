const router = require('express').Router()
const catsCtrl = require('../controllers/cats.js')

router.post('/', catsCtrl.create)
router.post('/:id/feedings', catsCtrl.addFeeding)
router.get('/', catsCtrl.index)
router.get('/:id', catsCtrl.show)
router.put('/:id', catsCtrl.update)
router.delete('/:id', catsCtrl.delete)
router.delete('/feedings/:feedingId', catsCtrl.removeFeeding)

module.exports = router