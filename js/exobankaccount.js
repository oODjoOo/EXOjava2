let b = 1050;
b = parseInt(b);
let e = 50;
e = parseInt(e);
let maxi = 2000;
let i = 0;
for (b ; b <= maxi; b += e) {
    i++;
    document.write(`<p>il vous a fallu ${i} mois pour empocher ${b}€</p>`);
    // if(b < 2000) {
    //     b = b + e;
    //     maxi++;
    // } 
    // else{
    //     console.log(i);
    // }
    
}



// let i = 1000;

// while (i <= 0) {
//     document.write(`<p>il vous reste ${i} à économiser</p>`);
//     ++i;
// }
// console.log(i);