const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static('static'));

/* Basic Express Routes */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/playout', (req, res) => {
  res.sendFile(__dirname + '/playout.html');
});

/* Socket.io Connections and Behavior */

io.on('connection', (socket) => {
  console.log('User connected!');
});

server.listen(8080, () => {
  console.log('Server started at http://localhost:8080');
});