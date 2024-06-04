const express = require('express');
const {
    getUsers,
    getUserID,
    createUser,
    deleteUser,
    updateUser,

} = require('../controllers/UserController');
const router = express.Router();

// Get All User
router.get('/', getUsers);

// Get One User
router.get('/:id', getUserID);
// Create User
router.post('/', createUser);
// Delete User
router.delete('/:id', deleteUser);
// Update User
router.patch('/:id', updateUser);

    
module.exports = router;

