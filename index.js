const app = require('express')()
const http = require('http').createServer(app).listen(5555)
const socket = require('socket.io').listen(http)
// 在服务端监听的事件 需要写在connection回调函数中 在客户端直接写事件监听
socket.on('connection', socket => {
    socket.on('message', msg => {
        socket.emit('message', msg)
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

