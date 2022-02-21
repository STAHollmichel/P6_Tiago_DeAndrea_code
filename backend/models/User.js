const mongoose = require('mongoose'); // L'import de mongoose
const uniqueValidator = require('mongoose-unique-validator'); // L'import d'unique validator


// Création du schéma user
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


// Plugin de gestion d'emails uniques
userSchema.plugin(uniqueValidator);


// L'exporte du modèle vers le contrôleur
module.exports = mongoose.model('User', userSchema);