// Générer un nombre aléatoire entre 1 et 10
let nombreAleatoire = Math.floor(Math.random() * 10) + 1;

// Afficher le nombre aléatoire
console.log(nombreAleatoire);

let guess = prompt("Devinez le chiffre entre 1 et 10 Bande de Nazes");

if (guess < nombreAleatoire) {
    alert("Plus Haut");
} else if (guess > nombreAleatoire) {
    alert("Plus Bas");
} else if (guess == nombreAleatoire) {
    alert("T'as perdu");
} 
else {
    alert("error 404");
}