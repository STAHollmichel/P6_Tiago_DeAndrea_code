const passwordValidator = require('password-validator'); // L'import du validateur de password


// Création du schéma password
const passwordSchema = new passwordValidator();

// Ces propriétés
passwordSchema
.is().min(5)                                    
.is().max(25)                                   
.has().uppercase(1)                              
.has().lowercase(1)                              
.has().digits(1)                                
.has().not().spaces()                           
.is().not().oneOf(['Passw0rd', 'Password123']); 

// L'exporte du modèle vers son middleware
module.exports = passwordSchema 