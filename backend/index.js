require('dotenv').config();
const express = require('express');
const UserRoutes = require('./routes/UserRoute.js');
const mongoose = require('mongoose');
// import mongoose from "mongoose";
// import cors from "cors";
// import UserRoute from "./routes/UserRoute.js";

// Express App\

const app = express();

// Middleware
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});

//  Routes
app.use('/api/Users',UserRoutes);

// connect to db
mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () =>console.log('Database Connected...'));




// listen request
app.listen(process.env.PORT, ()=> {
    console.log('Server berjalan yey...')
});

process.env