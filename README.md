# 📰 NewsMania

NewsMania is a modern News Aggregator Web Application that brings headlines from multiple sources into one place, providing users with a seamless and personalized news-reading experience.

---

## ✨ Features

- 📰 Aggregates news from multiple trusted sources
- 🌍 Country-wise news selection
- 🗣️ Language-based news filtering
- 🔍 Keyword-based news search
- 📝 Personal Notes feature for saving thoughts and summaries
- 💾 Persistent note storage using Local Storage
- 🌙 Dark Mode and ☀️ Light Mode support
- 📱 Fully responsive design for mobile and desktop devices
- ⚡ Real-time news fetching with GNews API
- 🔄 Smooth loading experience with dynamic content updates

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- CSS
- Axios

### Backend
- Node.js
- Express.js

### APIs
- GNews API

---

## 📂 Project Structure

```
NewsMania/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/NewsMania.git

cd NewsMania
```

---

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

```env
GNEWS_API_KEY=your_api_key_here
```

Start the backend server.

```bash
npm start
```

Backend runs on

```text
http://localhost:5000
```

---

### Frontend Setup

Open another terminal.

```bash
cd frontend

npm install

npm start
```

Frontend runs on

```text
http://localhost:3000
```

---

## 📸 Screenshots

### Home Page
![Home Page](Screenshots/home.png)

### Dark Mode
![Dark Mode](Screenshots/darkmode.png)

### Notes Feature
![Notes](Screenshots/notes.png)
---

## 🔮 Future Improvements

- User authentication
- Bookmark articles
- Category-wise news filtering
- Database integration for notes
- Infinite scrolling

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Kapil Sharma

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/your-linkedin-profile
