// let play = prompt("Attention, c'est ni oui ni non");

// let r = 1;

// while (r <= 10) {
//     document.write(`Tours numéro ${r}`);
//     ++r;
    
// }

// if (play === "oui" || play === "non") {
//     alert("Perdu");

// }

// let play = prompt("Attention, c'est ni oui ni non");

// let count = 1;

// do {
//     document.write(`Tours numéro: ${count}`);
//     ++count;
// } while (!play === "oui" || !play === "non") {
//     alert("Perdu");
// }

let play = prompt("Attention, c'est ni oui ni non");

let r = 1;
while (r <= 10) {
    if (play === "oui" || play === "non")
        document.write(`Tu à perdu au tour n°:${r}`);
    ++r;
}