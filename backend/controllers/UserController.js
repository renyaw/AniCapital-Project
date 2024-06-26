const UserModel = require('../models/UserModel');
const mongoose = require('mongoose');

// Get All User

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).sort({createdAt: -1});
        res.json(users);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

// Get one user
const getUserID = async (req, res) => {
    try {
        const users = await UserModel.findById(req.params.id);
        res.json(users);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

// Create User
const createUser = async (req,res) => {

    const {username, nama , password, role} = req.body;
    try {
        const user = await UserModel.create({username, nama , password, role});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Delete User
const deleteUser = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({message: "id gaketemu"});
    }

    try{
        const user = await UserModel.findOneAndDelete({_id: id});
        res.status(201).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

// Update User
const updateUser = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({message: "id gaketemu"});
    }

    try{
        const user = await UserModel.findOneAndUpdate({_id: id}, {
            ...req.body
        });
        res.status(201).json(user);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

module.exports = {
    getUsers,
    getUserID,
    createUser,
    deleteUser,
    updateUser,
}