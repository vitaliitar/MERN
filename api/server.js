const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect db
connectDB();

app.get('/', (req, res) => {
  res.send('API running')
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server on ${PORT}`));