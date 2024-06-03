require('dotenv').config();
const express = require('express');
const UserRoutes = require('./routes/UserRoute.js');
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
app.use(UserRoutes);

// mongoose.connect('mongodb://localhost:27017/AniCapital_db');
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error));
// db.once('open', () =>console.log('Database Connected...'));

// app.use(cors());
// app.use(express.json());
// app.use(UserRoute);

// listen request
app.listen(process.env.PORT, ()=> {
    console.log('Server berjalan yey...')
});

process.env