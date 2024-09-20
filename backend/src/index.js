const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes and Socket handlers
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');
const { socketHandler } = require('./socket');

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Easy-Chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/user', userRoutes);  // User registration/login
app.use('/api/chat', chatRoutes);  // Messaging routes

// Socket.IO setup
io.on('connection', socketHandler);

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Easy Chat backend!');
});

