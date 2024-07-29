

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " est pair");
//     } else {
//         console.log(i + " est impair");
//     } 
// }

// for (let r = 1; r <= 10; r++) {
//     if (r % 3 === 0) {
//         console.log(r + " est impaire");
//     }
// }


// let user = parseInt(prompt("Nombre de ligne?"));

// for (let i = user; i < user + 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " est pair");
//     } else {
//         console.log(i + " est impair");
//     } 
// }

let user = prompt("Nombre de ligne?");

for (let i = 0; i <10; i++) {
    if (user % 2 === 0) {
        console.log(user + " est pair");
        user ++;
    } else {
        console.log(user + " est impair");
        user ++;
    } 
}

