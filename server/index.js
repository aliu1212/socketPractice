const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');
const PORT = 5000;

const app = express();
// const server = http.Server(app);
// const io = socket(serv2);

app.use(express.static(path.join(__dirname + '/../client/dist/')));

// app.get('/', function(request, response) {
//   response.sendFile(path.join(__dirname, 'index.html'));
// });

const serv2 = app.listen(PORT, () => {
  console.log('Server now on port ', PORT);
});

const io = socket(serv2);

io.on('connection', function(socket) {
  console.log('made a socket connection:', socket.id);
  socket.on('username', (data) => {
    io.sockets.emit('username', data)
  })

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data)
  })
})
//todo: script source the websocketio
//socket needs to run on the front end 
//