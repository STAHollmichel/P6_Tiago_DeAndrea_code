const multer = require('multer'); // L'import de multer 


// Fonction pour définir l'extension du fichier utilisée 
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};


// Fonction de configuration pour enregistrer les images vers le dossier 'images'
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => { // gestion et modifs au nom du fichier enregistré
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});


// L'export du multer configuré, 'single' pas qu'il s'agit d'un fichier unique + fichier image uniquement
module.exports = multer({storage: storage}).single('image');