const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect db
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));


// Define Routes
app.use('/v1/users', require('./routes/v1/users'));

app.get('/', (req, res) => {
  res.send('API running')
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server on ${PORT}`));