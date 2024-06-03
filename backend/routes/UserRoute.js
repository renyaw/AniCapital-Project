const express = require('express');
const {
    getUsers,
    getUserID,
    createUser,

} = require('../controllers/UserController');
const router = express.Router();

// Get All User
router.get('/', getUsers);

// Get One User
router.get('/:id', getUserID);
// Create User
router.post('/', createUser);
// Delete User

// Update User


    
module.exports = router;

