const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json());

const universitiesData = require('./db.json');

app.get('/universities', (req, res) => {
  res.json(universitiesData.universities); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
