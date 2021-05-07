// const { Socket } = require('dgram');
const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

http.listen(3000, function(){
    console.log('successfully connected node server')
});

io.on('connection', function(socket){
    console.log(`auth value ${socket.id}`);

    socket.on('sendNotification', function(details){
        console.log(details);
        socket.broadcast.emit('sendNotification', details)
    })
})