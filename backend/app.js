const express = require('express'); // L'import d'express
const mongoose = require('mongoose'); // L'import de mongoose
const path = require('path'); // L'import de path (accès au chemin de notre système de fichiers)
const helmet = require("helmet"); // L'import d'Helmet (prevention contre les attaques XSS dans les headers HTTP)


// Import des routes
const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauces');


// Création de l'application express
const app = express();


// Config de sécurité de variables
require('dotenv').config();


//Connexion à MongoDB
mongoose.connect(process.env.MONGO_CONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Gestion CORS [API ACCESS CONTROL]
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// Parsing body en JSON
app.use(express.json());



// Gestion des routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);


// Sécurisation des headers express
app.use(helmet());


// Exportation de l'app
module.exports = app; 