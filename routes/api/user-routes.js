
const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/:id/friends/:friendId', addFriend);

router.delete('/:id/friends/:friendId', removeFriend);

module.exports = router;
