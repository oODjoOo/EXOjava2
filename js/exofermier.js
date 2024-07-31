function animaux(poulet,vache,cheval) {
    let somme = poulet + vache + cheval;
    let message = `Vous avez ${poulet} poulets, ${vache} vaches et ${cheval} chevaux. Ce qui fait ${somme} d'animaux et ${pattes} de pattes totals`;  
    document.write(`<p>${message}</p>`);

}



let poulet = parseInt(prompt("Combien de poulets ?"));
let vache = parseInt(prompt("Combien de vaches ?"));
let cheval = parseInt(prompt("Combien de chevaux ?"));
let pattes = poulet * 2 + vache * 4 + cheval * 4;


animaux(poulet,vache,cheval);
