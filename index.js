const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/universities', (req, res) => {
  const dataPath = path.join(__dirname, 'db.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load data' });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData.universities); 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
