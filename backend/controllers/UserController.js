import User from '../models/UserModel.js';


// Get All User

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({createdAt: -1});
        res.json(users);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

// Get one user
export const getUserID = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.json(user);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

// Create User
export const createUser = async (req,res) => {

    const {username, nama , password, role} = req.body;
    try {
        const user = await User.create({username, nama , password, role});
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Delete User


// Update User

module.exports = {
    getUsers,
    getUserID,
    createUser,
}