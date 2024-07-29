let heure = prompt("Choisissez l'heure");
let minute = prompt("Choisissez la minute");
let seconde = parseInt(prompt("Choisissez la seconde"));



if (seconde >= 59) {
    seconde = 0;
    minute++;
}
if (minute >= 59) {
    minute = 0;
    heure++;
}
if (heure >= 23) {
    heure = 0;
}

seconde = seconde + 1;
alert ( heure + " H " + minute + " M " + seconde + " S voici le resultat 1 seconde plus tard" );
