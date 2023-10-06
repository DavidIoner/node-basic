const connection = require('./connections')

const getAll = async () => {
    const Data = await connection.execute('SELECT * FROM georreference')
    return Data
}

module.exports = {
    getAll
}