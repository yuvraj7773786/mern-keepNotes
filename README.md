# 📝 KeepNotes

KeepNotes is a full-stack note-taking application that allows users to create, view, and delete personal notes. It's built with the **MERN stack** — using React for the frontend, Express and Node.js for the backend, and MongoDB for data storage. The app is fully deployed on **Render**.

---

## 🌐 Live App

🔗 **Visit here:** [keepNotes](https://keepnotes-8ne1.onrender.com)

> ⚠️ First load may take a few seconds because free Render services sleep when idle.

---

## 🚀 Features

- Create new notes with title and content
- View a list of all notes
- Delete notes with instant feedback
- Rate-limiting protection
- Client-side form validation
- Responsive design

---

## 🛠 Tech Stack

### Frontend:
- React.js (with Vite)
- Axios (API calls)
- Tailwind CSS + DaisyUI
- React Hot Toast (notifications)
- Lucide Icons

### Backend:
- Node.js + Express
- MongoDB (via MongoDB Atlas)
- CORS + Rate Limiting
- RESTful API

---

## 📁 Project Structure
```
keepNotes/
├── backend/ # Express API
│ ├── routes/
│ ├── models/
│ ├── .env
│ └── server.js
│
├── frontend/ # React client app
│ ├── src/
│ ├── public/
│ └── vite.config.js
│
├── README.md
└── package.json
```
---

## 🧑‍💻 Getting Started (For Local Development)

# Clone the repo
```
git clone https://github.com/yuvraj7773786/keepNotes.git
cd keepNotes
```
# Install backend dependencies
```
cd backend
npm install
```
# Install frontend dependencies
```
cd ../frontend
npm install
```
# Run both servers (in separate terminals)
```
npm run dev          # for frontend (Vite)
npm run start        # for backend (Express)
```
---

## 📦 Deployment
-> The entire app (frontend + backend) is hosted on Render:

-> Express backend handles API routing and also serves the React frontend from dist/ after build

-> MongoDB is hosted via MongoDB Atlas

---
## ✨ Future Improvements
🔍 Search and filter notes by title or content  
🧑‍💻 User authentication (login/register)  
🔐 Secure user-specific notes with JWT  
🌙 Dark mode toggle  
📅 Note sorting by creation or modification date  
🧾 Rich text editing (bold, italics, etc.)  
📦 Export notes to PDF or Markdown  

---
## 🙌 Acknowledgements
- Render

- MongoDB Atlas

- Lucide Icons

- DaisyUI
