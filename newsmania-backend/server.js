const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = "4754e9f34178990b1afdcc65fb4c5d29";
app.get("/news", async (req, res) => {
  try {
    const language = req.query.lang || "en";

    // Match language with country
    const countries = {
      en: "us",
      hi: "in",
    };

    const country = countries[language] || "us";
    let response = await axios.get(
      "https://gnews.io/api/v4/top-headlines",
      {
        params: {
          country,
          category: "general",
          lang: language,
          max: 10,
          token: API_KEY,
        },
      }
    );

    // Fallback to English if no articles found
    if (response.data.articles.length === 0 && language !== "en") {
      response = await axios.get(
        "https://gnews.io/api/v4/top-headlines",
        {
          params: {
           
              lang: language,
              max: 20,
              token: API_KEY,
            
          },
        }
      );
    }

    res.json({
      totalArticles: response.data.totalArticles,
      articles: response.data.articles,
    });

  } catch (error) {
    console.error(
      "GNews Error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      status: "error",
      message:
        error.response?.data?.message || error.message,
    });
  }
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});