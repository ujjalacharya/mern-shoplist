const router = require('express').Router();
const Item = require('../../../models/Item');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: 'desc' })
        .then(item => {
            res.json(item)
        })
})

router.post('/', (req, res) => {
    const newItem = {
        name: req.body.name
    }
    new Item(newItem)
        .save()
        .then(item => {
            res.json(item)
        })
})

router.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id)
        .catch(err => res.status(404).json({ success: false }))
        .then(item => {
            res.json({ success: true })
        })
})

module.exports = router;