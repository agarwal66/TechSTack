🚀 TechStack Web App — Authentication + Dashboard + CRUD (Assignment Project)

A full-stack scalable web application built as part of the Frontend Developer Intern Assignment.
The project includes:

JWT-based Authentication

Profile Fetch & Update

Tasks CRUD (Create, Read, Update, Delete)

Search + Filter

Protected Routes

MongoDB backend integration

Fully responsive frontend

📂 Project Structure
TechStack/
│
├── backend/            # Node.js + Express + MongoDB API
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── utils/
│   └── package.json
│
└── frontend/           # React + Vite App
    ├── src/
    │   ├── pages/
    │   ├── context/
    │   ├── api/
    │   └── components/
    └── package.json

🌐 Live Overview

Although deployment is optional, both apps can be deployed using:

Frontend → Vercel / Netlify

Backend → Render / Railway / Cyclic / Vercel serverless

(If deployed, add links here)

🏗️ Tech Stack Used
Frontend

React + Vite

React Router

React Hook Form

Axios

TailwindCSS

Custom CSS (optional)

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Bcrypt Password Hashing

CORS Enabled

Input Validation (Joi)

🔐 Core Features Implemented
🔹 Authentication

User Registration

Login

Password Hashing

JWT Token Generation

Protected API Routes

🔹 Dashboard

Fetch User Profile

Edit & Update Profile

Logout Functionality

🔹 Tasks Management (CRUD)

Create Task

Fetch All Tasks

Update Task

Delete Task

Status Filter (pending/done)

Search Tasks

🔹 Frontend Integration

Axios instance with baseURL

Context API for Auth state

ProtectedRoute wrapper

Proper navigation flow

🛠️ Backend Setup
1. Go to backend folder
cd backend

2. Install dependencies
npm install

3. Add .env file
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1d
PORT=5000

4. Start backend
npm run dev


If successful:

🚀 Server running on port 5000
✅ MongoDB connected

🖥️ Frontend Setup
1. Go to frontend folder
cd frontend

2. Install frontend dependencies
npm install

3. Start frontend
npm run dev


Frontend runs at:

👉 http://localhost:5173

📌 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user & return token
👤 Profile Routes
Method	Endpoint	Protected	Description
GET	/api/profile	✔	Get logged-in user profile
PUT	/api/profile	✔	Update profile
📝 Tasks Routes
Method	Endpoint	Protected	Description
GET	/api/tasks	✔	Get all tasks + search + filter
POST	/api/tasks	✔	Create a new task
PUT	/api/tasks/:id	✔	Update a task
DELETE	/api/tasks/:id	✔	Delete a task
📮 Postman Collection

A Postman Collection is included in the repo to test all APIs:
/postman/techstack-collection.json

📦 Scalability Notes (Required for Assignment)

To scale this application in production:

Backend Scaling

Use rate-limiting (Express-rate-limit)

Add input sanitization (validator.js)

Deploy on cloud (Render / Railway / Docker)

Add Redis caching for faster reads

Use environment-based config (dev/prod modes)

Frontend Scaling

Use React Query for caching

Component-level optimizations with memo

Lazy loading routes

Error boundaries

Production build via Vite

Database Scaling

MongoDB Atlas with auto-scaling

Usage of indexes on frequently queried fields (email, status)

🧑‍💻 How to Run Full Project
Step 1: Start Backend
cd backend
npm run dev

Step 2: Start Frontend
cd frontend
npm run dev

Now visit:

👉 http://localhost:5173

Login, Register, Dashboard, CRUD — sab working.
