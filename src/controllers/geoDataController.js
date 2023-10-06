const geoData = require('../models/geoData')

const getAll = async (req, res) => {

    const data = await geoData.getAll()

    return res.status(200).json(data)
}

module.exports = {
    getAll
}