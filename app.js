const express = require('express');
const app = express();
const mongoose = require('mongoose');
const brandsRoute = require('./routes/brands');
const bodyParser = require('body-parser');

// .............Middlewares
require('dotenv/config');
app.use(bodyParser.json())


// .............Routers
app.use('/brands', brandsRoute);


// .............MongoDB Connection
mongoose.connect(
    process.env.DB_CONNECTION,
    {   useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('CC-API Online!')
);

// .............Listener
app.listen(3000);