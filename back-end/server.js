const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const colors = require('colors');
const products = require('./data/products');

dotenv.config();

db.connectDB();

const app = express();

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((el) => el._id === req.params.id);
  res.json(product);
});

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);
