const express = require('express'); // L'import d'express    
const router = express.Router(); // Création du router via express  
const ctrlSauce = require('../controllers/sauces'); // L'import du controlleur 'Sauces'


// Middleware imports
const auth = require('../middleware/auth'); // Authentification des routes
const multer = require('../middleware/multer-config'); // Gestion d'enregistrement d'images


// Routes de gestion de 'Sauces' et likes
router.post('/', auth, multer, ctrlSauce.createSauce);
router.get('/', auth, ctrlSauce.getAllSauces)
router.get('/:id', auth, ctrlSauce.getOneSauce)
router.put('/:id', auth, multer, ctrlSauce.modifySauce)
router.delete('/:id', auth, ctrlSauce.deleteSauce)
router.post("/:id/like", auth, ctrlSauce.userLikeSauce);


// L'exporte vers la app
module.exports = router;   