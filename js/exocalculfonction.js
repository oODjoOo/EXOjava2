function number(num1, num2) {

    document.write(`<p>${num1} + ${num2} = ${resultat}</p>`);
    console.log(resultat);
}



let num1 = parseInt(prompt("Numéro 1"));
let num2 = parseInt(prompt("numéro 2"));
let resultat = num1 + num2;

number(num1, num2);