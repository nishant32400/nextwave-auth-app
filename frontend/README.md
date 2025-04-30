
                                                                      @****  NextWave Auth App ****@

                           A modern, full-stack user authentication system built with React.js and Node.js. It features secure registration, OTP-based login, and complete account management with a colorful, responsive UI.

#1# Features  #1#

  ###  User Registration
  - Collects **name, email, password, company, age, DOB, and a profile image**
  - Enforces **email format** and **case-sensitive password**
  - Saves images and user info to the database

  ###  Login & OTP Verification
  - Validates credentials from the database
  - Sends a **6-digit OTP** (valid for 10 minutes)
  - Verifies OTP and redirects to a personalized Thank You page
  
  ###  Account Management
  - Displays user profile with image and details
  - Allows users to **delete their account** in one click
  
  ###  Error Handling
  - Friendly error page for failed logins
  - Clear feedback on registration or OTP issues



#2# 🛠 Tech Stack #2#

  ### Frontend:
  - React.js (with `react-router-dom`)
  - Bootstrap 5 for responsive UI
  - Axios for API communication
  
  ### Backend:
  - Node.js with Express.js
  - MongoDB (or your DB of choice)
  - Nodemailer / any OTP service (for real-world use)


#3#  Folder Structure  #3#

NextWave-Project/
├── backend/                --> Node.js backend
│   ├── controllers/        --> API logic
│   ├── models/             --> Mongoose schemas
│   ├── routes/             --> Express routes
│   ├── utils/              --> Helper functions (e.g., OTP generation)
│   ├── uploads/            --> Uploaded user images
│   ├── .env                --> Environment variables (not committed)
│   ├── server.js           --> Entry point of backend
│
├── frontend/               --> React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     --> Page components (Login, Register, OTP, etc.)
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
├── README.md
└── package.json            --> Root-level config (optional)

## API Endpoints

       Endpoint	                       Method	         Description
  /api/users/register                 	POST	      Register a new user
  /api/users/login	                    POST	      Authenticate and send OTP
  /api/users/verify-otp	                POST	      Validate OTP and login
  /api/users/delete/:email	           DELETE	      Remove user account

## Setup Instructions
1. Colne the repository
   git clone https://github.com/yourusername/nextwave-assignment.git
   cd nextwave-assignment

2. Backend Setup
     cd backend
     npm install
3. Create a .env file in the backend folder
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   Start the backend:
   npm run dev
4. Frontend Setup
   cd ../frontend
   npm install
   npm start
6. Deployment
   You can deploy the backend on Render, Railway, or Vercel (as serverless).
   The frontend can be deployed on Vercel or Netlify.

👨‍💻 Author
NISHANT VERMA

GitHub: nishant32400

Email: nishant32400@gmail.com
   
