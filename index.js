'use strict';

const { db } =require('./src/models');
const app = require('./src/server.js');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;

db.sync().then(() =>{
 start(PORT);
});
