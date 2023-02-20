
const router = require('express').Router();

//IMPORT FROM THOUGHT-CONTROLLER 
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

// IMPORT FROM REACTION-CONTROLLER
const {
    createReaction,
    deleteReaction,
} = require('../../controllers/reaction-controller');

router.get('/', getAllThoughts);

router.post('/', createThought);

router.get('/:id', getThoughtById);

router.put('/:id', updateThought);

router.delete('/:id', deleteThought);

router.post('/:thoughtId/reactions', createReaction);
 
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
