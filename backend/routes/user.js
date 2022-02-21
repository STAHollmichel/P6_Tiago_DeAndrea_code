const express = require('express'); // L'import d'express
const router = express.Router(); // Création du router via express


// L'import du contrôleur user
const userCtrl = require('../controllers/user');
// L'import middleware password check
const passwordSchema = require('../middleware/password');


// Route POST pour enregistrer des contes utilisateurs   
router.post('/signup', passwordSchema, userCtrl.signup);
// Route POST pour la connexion des utilisateurs  
router.post('/login', userCtrl.login);

// L'exporte vers la app
module.exports = router;