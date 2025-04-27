const express = require('express');
const cors = require('cors');
const fs = require('fs'); // To read the db.json file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint to fetch universities data
app.get('/universities', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).send('Error fetching data');
    }

    const jsonData = JSON.parse(data); // Parse the JSON data
    res.json(jsonData.universities);  // Send universities data as response
  });
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
