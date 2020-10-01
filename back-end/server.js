const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const colors = require('colors');
const productRoutes = require('./routes/productRoutes');
const errorMiddlewares = require('./middleware/errorMiddleware');

dotenv.config();

db.connectDB();

const app = express();

app.use('/api/products', productRoutes);

app.use(errorMiddlewares.notFound);
app.use(errorMiddlewares.errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);
