
 "use strict";

// // Tableau contenant les cartes du jeu
  const cardsSet = [
	{
		src: "img/Djoko1.jpeg",
		alt: "Djoko1",
		dataAttribute: "1"
	},
	{
		src: "img/Djoko2.jpeg",
		alt: "Djoko2",
		dataAttribute: "2"
	},
	{
		src: "img/Djoko3.jpg",
		alt: "Djoko3",
		dataAttribute: "3"
	},
	{
		src: "img/iga1.jpg",
		alt: "Iga1",
		dataAttribute: "4"
	},
	{
		src: "img/iga2.jpeg",
		alt: "Iga2",
		dataAttribute: "5"
	},
	{
		src: "img/iga3.jpeg",
		alt: "Iga3",
		dataAttribute: "6"
	}
];
let flippedCards = [];
let lockGame = false;
let nbrEssais = 0;

// Déterminer l'ordre des paires de carte à afficher de manière aléatoire
function randomOrder(max) {
	let cardsOrder = [];
	for (let i = 0; i < max; i++) {
		// Génération d'un nombre aléatoire entre 1 et max
		let randomPos = Math.floor(Math.random() * max) + 1;
		//console.log('Random number = '+randomPos);
		if (cardsOrder.indexOf(randomPos) === -1) {
			// On ajoute le nombre aléatoire dans le tableau
			cardsOrder[i] = randomPos;
		}
		else {
			// Sinon on décrémente le i pour récupérer la place
			i--;
		}
		//console.log(cardsOrder);
	}
	//console.log(cardsOrder);
	// Parcourir le tableau pour retrancher max / 2 à toutes les valeurs supérieures à max/2. En fin de boucle, il ne reste que des couples de valeurs de 1 à max/2
	for (let i = 0; i < cardsOrder.length; i++) {
		// Si la valeur est supérieure à max/2 alors, on lui retranche max/2
		if (cardsOrder[i] > (max / 2)) {
			cardsOrder[i] = cardsOrder[i] - (max / 2);
		}
	}
	//console.log(cardsOrder);
	return cardsOrder;
}

function flipCard() {
	console.log(this);
	if (lockGame) {
		return;
	}
	this.classList.add('flip');
	flippedCards.push(this);
	console.log(flippedCards);
	// Sinon il faut comparer si les 2 cartes sont les mêmes
	if (flippedCards.length > 1) {
		lockGame = true;
		nbrEssais++;
		if (flippedCards[0].dataset.group === flippedCards[1].dataset.group) {
			console.log('Les 2 cartes sont les mêmes');
			// Supprimer les écouteurs d'événement
			flippedCards[0].removeEventListener('click', flipCard);
			flippedCards[1].removeEventListener('click', flipCard);
			// On réinitialise le tableau avec les cartes retournées
			flippedCards = [];
			lockGame = false;
		}
		else {
			console.log('Les 2 cartes sont différentes');
			// Recacher les 2 cartes après 1.5 secondes
			setTimeout(() => {
				flippedCards[0].classList.remove("flip");
				flippedCards[1].classList.remove("flip");
				// On réinitialise le tableau avec les cartes retournées
				flippedCards = [];
				lockGame = false;
			}, 1500);
		}
		document.querySelector("#score span").textContent = nbrEssais;
	}
	const cartesRetournees = document.querySelectorAll('.flip');
	if (cartesRetournees.length === (cardsSet.length * 2)) {
		setTimeout(() => {
			alert("Félicitations, vous avez terminé");
		}, 3000);
	}
}

function gameInit() {
	let game = document.getElementById("game");
	game.innerHTML = '';
	const cardsOrder = randomOrder(cardsSet.length * 2);
	const imax = cardsOrder.length;
	//console.log(imax);
	for (let i = 0; i < imax; i++) {
		const index = cardsOrder[i] - 1;
		//console.log(index);
		//console.log(cardsSet[index]);
		// Création de la div qui va contenir la carte
		let carte = document.createElement("div");
		game.appendChild(carte);
		carte.classList.add("memory-card");
		carte.setAttribute("data-group", cardsSet[index].dataAttribute);
		// Ajout de l'image front
		let imgFront = document.createElement("img");
		imgFront.setAttribute("src", cardsSet[index].src);
		imgFront.setAttribute("alt", cardsSet[index].alt);
		imgFront.setAttribute("height", "300");
		imgFront.setAttribute("width", "200");
		carte.appendChild(imgFront);
		imgFront.classList.add("front-face");
		// Ajout de l'image back
		let imgBack = document.createElement("img");
		imgBack.setAttribute("src", "img/front.jpeg");
		imgBack.setAttribute("alt", "Retourner pour voir l'image");
		imgBack.setAttribute("height", "300");
		imgBack.setAttribute("width", "200");
		carte.appendChild(imgBack);
		imgBack.classList.add("back-face");
	}
}

function gamePlay() {
	const memoryCards = document.querySelectorAll('.memory-card');
	memoryCards.forEach(card => card.addEventListener('click', flipCard));
}

// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
	gameInit();
	gamePlay();
});