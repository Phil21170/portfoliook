"use strict";

const slides = [
	{
		image: "img/carousel/logo-onlineformapro.png",
		caption: "Onlineformapro Dijon",
		description: "Depuis juin 2023 en formation développeur web et web mobile fullstack . Compétences en cours d'acquisition : HTML, CSS, JavaScript, PHP, MySQL, WordPress."
	},
	{
		image: "img/carousel/logo-naviland-cargo.png",
		caption: "Naviland Cargo",
		description: "2011 à 2023 : AGENT D'EXPLOITATION LOGISTISQUE à Perrigny-les-Dijon (21). Planification informatique du transport de containers par voie férroviaire. Administration, facturation et formation."
	},
	{
		image: "img/carousel/logo-zenith-dijon.png",
		caption: "Zénith Dijon",
		description: "2005 à 2006 : ASSISTANT DE PRODUCTION Dijon (21). Pour les comptes, Oxo production, Label LN Assistant de production, aide-catering, runner."
	},
	{
		image: "img/carousel/logo-ck.png",
		caption: "C&K",
		description: "2006 à 2009 : OPERATEUR EN PLASTURGIE à Dole (39). Fabrication de pièces en plastique sur presse à injecter, contrôle qualité."
	},
	{
		image: "img/carousel/logo-video-phil.png",
		caption: "Club vidéo Phil",
		description: "2002 à 2008 CREATION ET GERANT d'un vidéo-club Brazey-en-Plaine (21). Approvisionnements, mise en location et vente, fidélisation clientèle."
	},
	{
		image: "img/carousel/logo-lci.png",
		caption: "LCI",
		description: "1999 à 2000 : RESPONSABLE SURETÉ Paris (75). Gestion de 12 agents de sécurité, formation, recrutement, administration. Accueil et organisation de la venue des VIP, en contact avec le SPHP, membre de la commission pour le déménagment et l'intégration de La Chaîne Info vers la maison mère TF1."
	},
	{
		image: "img/carousel/logo-tf1.png",
		caption: "TF1",
		description: "1996 à 1999 : CHEF DE POSTE Boulogne-Billancourt (92). Management de 15 agents de sécurité, formation, planning journalier, gestion de l'évènementiel."
	},
	{
		image: "img/carousel/logo-messier-bugatti.png",
		caption: "Messier et Bugatti",
		description: "1995 : Agent de sécurité Velizy-Villacoublay (78) Contrôle d'accès, ronde."
	}
];

// Déclaration d"un objet carousel
let carousel = {
	rotation: 0,
	timer: null,
	speed: 3000,
	slides: [],
	nbSlides: 0,
	slideActive: 0,
	rotation: 0,
	angle: 0,
	apothem: 0
};

// Générer les slides du carousel
function addSlides(container, slides) {
	// Vider le contenu du container
	container.innerHTML = "";
	let i = 0;
	// Récupérer le nombre d"images
	carousel.nbSlides = slides.length;
	// Calculer l"angle de rotation
	carousel.angle = parseFloat(360 / carousel.nbSlides);
	console.log("Angle = " + carousel.angle);
	// Récupérer la largeur du container qui contient le caraousel
	const containerWidth = container.offsetWidth;
	console.log(containerWidth);
	// Calculer la tangente
	carousel.apothem = containerWidth / (2 * Math.tan(Math.PI / carousel.nbSlides));
	console.log("Tangente = " + carousel.apothem);
	for (const slide of slides) {
		const figure = document.createElement("figure");
		container.appendChild(figure);
		if (i === 0) {
			figure.classList.add("active");
		}
		let rotateY = carousel.angle * i;
		console.log(rotateY);
		figure.style.transform = `rotateY(${rotateY}deg) translateZ(${carousel.apothem}px)`;
		const img = document.createElement("img");
		img.src = slide.image;
		img.alt = slide.caption;
		figure.appendChild(img);
		i++;
	}
	displayDescription();
}

function rotate(rotation, angle) {
	// Incrémenter la valeur de la rotation avec celle de l"angle passé en paramètre
	rotation = rotation + angle;
	console.log("new rotation : " + rotation);
	// Modifier le style du carousel
	document.querySelector(".carousel-items").style.transform = `translateZ(-250px) rotateY(${rotation}deg)`;
	// Supprimer la classe active
	const active = document.querySelector(".active");
	if (active !== null) {
		active.classList.remove("active");
	}
	// Ajouter la classe active sur la nouvelle image mise en avant
	carousel.slides[carousel.slideActive].classList.add("active");
	// Renvoyer la nouvelle valeur de la rotation
	return rotation;
}

function nextImage() {
	console.log("click next " + carousel.slideActive);
	console.log(carousel.slides);
	// Déterminer la nouvelle slide active
	carousel.slideActive++;
	if (carousel.slideActive >= carousel.nbSlides) {
		carousel.slideActive = 0;
	}
	// Rotation du carousel
	carousel.rotation = rotate(carousel.rotation, carousel.angle * -1);
	displayDescription();
}

function previousImage() {
	console.log("click prev " + carousel.slideActive);
	// Nouvelle slide active
	carousel.slideActive--;
	if (carousel.slideActive < 0) {
		carousel.slideActive = carousel.nbSlides - 1;
	}
	// Rotation du carousel
	carousel.rotation = rotate(carousel.rotation, carousel.angle);
	displayDescription();
}

// Modifier l"icône du bouton play
function changeIcon() {
	// Récupérer l"icône du bouton play
	const icon = document.querySelector("#play i");
	icon.classList.toggle("fa-pause");
	icon.classList.toggle("fa-play");
}

// Modifier la description
function displayDescription() {
	// Remove description
	const description = document.querySelector("div.description");
	if (description !== null) {
		description.innerHTML = "";
	}
	const newDescription = document.createElement("p");
	description.appendChild(newDescription);
	newDescription.innerText = slides[carousel.slideActive].description;
}

// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
	const slidesContainer = document.querySelector(".carousel-items");
	// Créer les slides
	addSlides(slidesContainer, slides);
	// Récupérer la liste des balises HTML contenant les slides
	carousel.slides = document.querySelectorAll(".carousel-items figure");
	// Click sur le bouton précédent
	document.getElementById("prev").addEventListener("click", previousImage);
	// Click sur le bouton suivant
	document.getElementById("next").addEventListener("click", nextImage);
});