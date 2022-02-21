const passwordSchema = require('../models/password'); // L'import du modèle password

// L'export de vérification des caractères
module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({  message: "Le mot de passe doit contenir au moins 5 caractères, un chiffre, une minuscule, une majuscule et pas d'espace" });
    } else {
        next();
    }
} 