# Piiquante [API Development]

<br>
<img src="images/piiquante_resize.png">
<br>

## Intro ##


Development du backend, l'api pour la boutique Piiquante

Cette api c'est une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent.


#Technologies & frameworks utilisés
- JavaScript
- NodeJS / Express (API REST)
- MongoDB
- npm

# Backend

Dévellopeur : Tiago de Andrea

Dépendances utilisées via npm:
- nodemon
- express
- mongoose
- mongoose-unique-validator
- bcrypt
- jsonwebtoken
- dotenv
- multer
- password-validator
- helmet


## Frontend ##

Cloné à partir du repo: <a href="https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6"></a>

Dévellopeur : Nikolas 

Dépendances installés via npm:
- NodeJS
- Angular 
- node-sass 



## Usage ##

#Fichier ".env.dist"

 Ouvrir le fichier "/backend/.env.dist"
 Inserer votre identifiant et mot de passe MongoDB.
 Renseigner votre chaîne secrète.
 Modifier l'extension du fichier ".env.dist" par ".env".
 La connexion à MongoDB sera alors possible.

#Executer dans l'terminal: 

1- <span  style="background:grey;padding:0 5px;border:solid 1px black;">cd backend</span>
2- <span  style="background:grey;padding:0 5px;border:solid 1px black;">nodemon</span>

Ouvrir un deuxieme terminal et executer:
1- <span  style="background:grey;padding:0 5px;border:solid 1px black;">cd frontend</span>
2- <span  style="background:grey;padding:0 5px;border:solid 1px black;">npm start</span>

Si a une erreur de lancement ou une erreur 404, naviguez dans votre navigateur jusqu'à http://localhost:8081.
