// Import express dan router
const express = require('express');
// Import router
const router = require('./routes/api');

// Import dotenv dan menjalankan method config
require('dotenv').config();

// Destructing object process.env
const { APP_PORT } = process.env;

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Menggunakan routing
app.use(router);

// Mendefinisikan port
app.listen(APP_PORT, () =>
    console.log(`Server running at: http://localhost:${APP_PORT}`);
);