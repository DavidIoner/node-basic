const express = require('express')
const geoDataController = require('./controllers/geoDataController')

const router = express.Router()

router.get('/all', geoDataController.getAll)

router.get('/', (req, res) => {
    res.status(200).send('BOM DIA MUNDAO!')
})

module.exports = router
