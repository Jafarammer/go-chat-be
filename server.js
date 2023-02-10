const express = require('express')
const cors = require('cors')
const PORT = 5001

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
const server = require('http').createServer(app)

// socket
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET','POST']
    }
})


server.listen(PORT, () => {
    console.log(`Server running to port ${PORT}`)
})