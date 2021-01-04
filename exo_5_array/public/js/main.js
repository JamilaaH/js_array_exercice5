// exo 1
let fruit = "cerise";
let tabExo = ["entete", 3, 4, false, fruit];
console.log(tabExo);

// exo 2
console.log(tabExo.length);

// exo 3
tabExo.pop();
console.log(tabExo);

// exo4
tabExo.shift();
console.log(tabExo);

// exo 5
tabExo.push("sous-titre", "dernier");
console.log(tabExo);

// exo 6 
tabExo.unshift(0, 1, 2);
console.log(tabExo);

// exo 7
tabExo.reverse();
console.log(tabExo);

// exo 8 
let box = ["objet1"]; //premier objet
console.log(box);

box.push("objet2"); 
alert(box);

box.unshift("objet3"); //ajouter un objet en avant
alert(box);

box.push("objet4", "objet5", "objet6"); //rajoute 3 objets à la boite
alert(box); 

box.splice(0, 3); //decide d'enlever les 3 premiers

box.push("objet7"); //d'en rajouter un
alert(box);

box.splice(-2, 2);
alert(box);

box.splice(0, 2);
alert(box);