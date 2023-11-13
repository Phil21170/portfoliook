"use strict";

// Vitesse de frappe des caractères
const typespeed = 100;
// Récupérer le texte
let texte = document.querySelector("#texte-anime span").innerText;
if (texte === '') {
	texte = "dans mon portfolio";
}
//console.log(texte);

// Initialisation des variables
let id = null;
let i = 0;
const imax = texte.length;
//console.log(imax);
// Récupérer la zone d'écriture
const output = document.querySelector("#texte-anime span");

console.time('Animer');

function ecrireLettre() {
	//console.log(i);
	//console.log(texte.substring(i, i+1));
	output.textContent += texte[i];
	i++;
	if (i >= imax) {
		clearInterval(id);
		console.timeEnd('Animer');
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Vide le contenu du span
	output.textContent = '';
	// Lance l'animation à la vitesse demandée
	id = setInterval(ecrireLettre, typespeed);
});



