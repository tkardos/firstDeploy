'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mysql = require('mysql');
const dotenv = require('dotenv').config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

conn.connect(error => {
  if (error) {console.log(error)}
  else { console.log('')};
});

app.get('/', (req,res) => {
  conn.query('Select * from basic', (error, rows) =>{
    res.send(rows);
  });
});

app.listen(PORT || 3000, () => {
  console.log( ' app listening ');
});
