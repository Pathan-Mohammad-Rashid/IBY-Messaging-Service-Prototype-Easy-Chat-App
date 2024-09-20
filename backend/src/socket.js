const socketHandler = (socket) => {
  console.log('New client connected');

  socket.on('send-message', (message) => {
    socket.broadcast.emit('receive-message', message);  // Broadcast to others
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
};

module.exports = { socketHandler };
