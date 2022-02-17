const express = require('express');     
const router = express.Router();   
const ctrlSauce = require('../controllers/sauces'); 


const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, ctrlSauce.createSauce);
router.get('/', auth, ctrlSauce.getAllSauces)
router.get('/:id', auth, ctrlSauce.getOneSauce)
router.put('/:id', auth, multer, ctrlSauce.modifySauce)
router.delete('/:id', auth, ctrlSauce.deleteSauce)
router.post("/:id/like", auth, ctrlSauce.userLikeSauce);

module.exports = router;   