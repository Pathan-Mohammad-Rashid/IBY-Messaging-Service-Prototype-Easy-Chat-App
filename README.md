
# Easy Chat - Messaging Service Prototype

## Project Overview

**Easy Chat** is a real-time messaging service prototype built as part of a software engineering task. The prototype includes core features like user registration, authentication, sending and receiving text messages between users, group chat functionality, and real-time message updates. It also follows **best practices** for REST API development, user-friendly UI design, and modern web development principles using **Next.js** for the frontend and **Node.js** with **MongoDB** for the backend.

## Core Features

- **User registration and authentication**: Secure login and signup using JWT authentication.
- **Send and receive text messages**: Users can exchange text messages.
- **Group chat functionality**: Multiple users can join and participate in a chat.
- **Real-time messaging**: Real-time message updates using **Socket.IO** for instant communication.

## Optional Features

- AI-powered chatbot (coming soon).
- Video or audio calling features (future enhancement).

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), React.js, CSS for responsive and engaging UI.
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [Socket.IO](https://socket.io/).
- **Database**: [MongoDB](https://www.mongodb.com/) (NoSQL).
- **Authentication**: JWT (JSON Web Tokens) for secure login.
- **Design Patterns**: Atomic Design principles used in UI components.

## Installation & Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/easy-chat.git
cd easy-chat
```

### 2. Backend Setup
- Navigate to the **backend** directory:
  ```bash
  cd backend
  ```
- Install the necessary dependencies:
  ```bash
  npm install
  ```
- Ensure **MongoDB** is running locally or connect to **MongoDB Atlas** with the connection string:
  ```bash
  mongodb://localhost:27017/Easy-Chat
  ```
- Update **MongoDB URI** if using **Atlas** in `backend/src/index.js`.

- Start the backend server:
  ```bash
  node src/index.js
  ```
  The backend will run at `http://localhost:8000`.

### 3. Frontend Setup
- Navigate to the **frontend** directory:
  ```bash
  cd frontend
  ```
- Install the necessary dependencies:
  ```bash
  npm install
  ```
- Start the frontend development server:
  ```bash
  npm run dev
  ```
  The frontend will be available at `http://localhost:3000`.

### 4. Running the Application
- **Frontend**: Access the frontend via `http://localhost:3000`.
- **Backend**: Ensure the backend is running on `http://localhost:8000`.

### 5. API Documentation
The backend provides RESTful API endpoints for user authentication and messaging. You can test these endpoints via tools like **Postman**.

- **User Registration**: `POST /api/user/register`
- **User Login**: `POST /api/user/login`
- **Send a Message**: `POST /api/chat/send`
- **Get Messages**: `GET /api/chat/receive`

### 6. Optional Features (Future Enhancements)
- AI-powered chatbot.
- Video/audio calling integration using WebRTC.

## System Design

- **Frontend**: The frontend is built with **Next.js** and follows **Atomic Design principles** for reusable and scalable components.
- **Backend**: The backend is built using **Node.js** and **Express**, implementing REST APIs for secure communication. **Socket.IO** is used for real-time messaging between users.
- **Database**: The application uses **MongoDB** as the NoSQL database to handle user data and messages, providing flexibility and scalability.

## Deployment

- For deployment on **Google Cloud Platform (GCP)** or **Heroku**, containerize the backend and frontend using **Docker** and deploy using **Cloud Run** or **Heroku**.

### How to Deploy on GCP (Google Cloud Platform)
1. Install **Google Cloud SDK**.
2. Enable **Cloud Run** and **Container Registry** services.
3. Build Docker images for the backend and frontend.
4. Deploy the images to **Google Cloud Run**.

### How to Deploy Locally Without Docker
1. Ensure MongoDB is running locally.
2. Run the backend using `node src/index.js`.
3. Run the frontend using `npm run dev`.
4. Access the app at `http://localhost:3000`.

## Contact Information
**Your Name: Pathan Mohammad Rashid**  
**Your University: IIT Gandhinagar**  
**Your Department: Computer Science and Engineering**

---

### Reference Links
- **Atomic Design Principles**:
  - [Brad Frost Blog on Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
  - [React Atomic Design Implementation](https://github.com/danilowoz/react-atomic-design)
- **REST API Best Practices**:
  - [Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
