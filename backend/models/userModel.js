const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    nama: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        required: true,
        default: 'user',
    }
}, {timestamps: true});

module.exports = mongoose.model('UserModel', User);

