import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [articles, setArticles] = useState([]);
  const [language, setLanguage] = useState("en");
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  const addNote = () => {
    if (!title.trim() || !content.trim()) {
      return;
    }
  
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
  
    setNotes([newNote, ...notes]);
  
    setTitle("");
    setContent("");
  };
  
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("newsmania-theme");
  
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "newsmania-theme",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  useEffect(() => {
    fetchNews(language);
  }, [language]);
  useEffect(() => {
    const savedNotes = localStorage.getItem("newsmania-notes");
  
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(
      "newsmania-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const fetchNews = (lang) => {
    axios
      .get(`http://newsmania-ccuq.onrender.com/news?lang=${lang}`)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div style={{ textAlign: "center", padding: "20px", minHeight: "100vh",backgroundColor: darkMode ? "#121212" : "#F5F1E8",
    color: darkMode ? "#FFFFFF" : "#2F2F2F",
    transition: "all 0.3s ease", }}>
      <h1 style={{ color: darkMode ? "#FFFFFF" : "#2F2F2F",fontWeight: "800",fontSize: "4rem", marginBottom: "25px" }}>NewsMania 📰</h1>

      
      <div style={{ 
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "30px", }}>
      <button onClick={() => setLanguage("en")}>English</button>

      <button onClick={() => setLanguage("hi")}>हिन्दी</button>
      <button onClick={() => setShowNotes(!showNotes)}>
    {showNotes ? "❌ Close Notes" : "📝 Notes"}
  </button>
  <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>

      </div>
  <div
    style={{
      position: "fixed",
      top: 0,
      right: showNotes ? "0" : "-400px",
      width: "350px",
      height: "100vh",
      backgroundColor: darkMode ? "#1E1E1E" : "#FFFFFF",
      color: darkMode ? "#FFFFFF" : "#2F2F2F",
      transition: "right 0.3s ease-in-out",
      zIndex: 1000,
      overflowY: "auto",
      padding: "20px",
    }}
  >
    <h2>📝 My Notes</h2>

    <input
      type="text"
      placeholder="title..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: darkMode ? "#2C2C2C" : "#FFFFFF",
        color: darkMode ? "#FFFFFF" : "#000000",
        border: darkMode
          ? "1px solid #555"
          : "1px solid #ccc",
      }}
    />

    <textarea
      placeholder="Write your note..." 
      rows={4}
      value={content}
      onChange={(e) => setContent(e.target.value)}
     
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: darkMode ? "#2C2C2C" : "#FFFFFF",
color: darkMode ? "#FFFFFF" : "#000000",
border: darkMode
  ? "1px solid #555"
  : "1px solid #ccc",
        marginBottom: "10px",
      }}
    />

    <button
      onClick={addNote}
      style={{
        width: "100%",
      padding: "10px",
      backgroundColor: "#10b981",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginBottom: "20px",
      }}
    >
      Save Note
    </button>

      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: darkMode
              ? "1px solid #444"
              : "1px solid #ddd",
            
            backgroundColor: darkMode
              ? "#2C2C2C"
              : "#FFFFFF",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          >
            <h4>{note.title}</h4>

            <p>{note.content}</p>

            <button
              onClick={() => deleteNote(note.id)}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
 


      {/* Articles Grid */}
     
      <div
        style={{
          width: showNotes ? "calc(100% - 350px)" : "100%",
          transition: "0.3s",
          padding: "20px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",   // ← makes all rows same height
        }}
      >
        {articles.map((item, index) => (
          <div
            key={index}
            style={{
              border: "none",
              backgroundColor: darkMode ? "#1E1E1E" : "#FFFFFF",
              color: darkMode ? "#FFFFFF" : "#2F2F2F",
              borderRadius: "18px",
              boxShadow: darkMode
  ? "0 4px 15px rgba(255,255,255,0.08)"
  : "0 4px 15px rgba(0,0,0,0.12)",
              overflow: "hidden",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                backgroundColor: "#d9534f",
                color: "white",
                padding: "5px 10px",
                fontSize: "0.8rem",
                marginBottom: "10px",
                alignSelf: "flex-start",
                borderRadius: "4px",
              }}
            >
              {item.source.name}
            </div>

            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            )}

            <h3 style={{ margin: "10px 0" }}>{item.title}</h3>

            <p style={{ flex: 1, margin: "0 0 15px 0" }}>   {/* ← grows to fill space */}
              {item.description}
            </p>

            <button  onClick={() => {
                    console.log(item.url);
                    window.open(item.url, "_blank");
  }}
            style={{ width: "100px",  
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "8px", }}>Read more</button>

          </div>
        ))}
      </div>
    </div>
  );
  

}
export default App;