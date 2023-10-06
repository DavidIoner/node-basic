const app = require('./app')

require('dotenv').config()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, HOST, () => console.log(`Server is running on ${PORT}`))