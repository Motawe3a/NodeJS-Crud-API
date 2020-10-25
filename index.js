// add imports
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');


// initialize app
const app = express();

// add middleware
app.use(bodyParser.json())
app.use('/users', userRoutes)

//add routes

app.get('/',(request, response) => response.send('Hello from earth'))

const PORT = process.env.Port || 5000;

app.listen(PORT,() => console.log(`app is running on port ${PORT}`))