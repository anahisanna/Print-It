const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Récupération des éléments flèche gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajouter un event listener à la flèche gauche
arrowLeft.addEventListener('click', () => {
	console.log('Clic sur la flèche gauche');
});

// Ajouter un event listener à la flèche droite
arrowRight.addEventListener('click', () => {
	console.log('Clic sur la flèche droite');
});

// Sélection de la div contenant les bullet points
const dotsContainer = document.querySelector('.dots');

// Créer les points dynamiquement
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');

	// Si c'est le premier point, ajouter la classe 'dot_selected'
	if (i == 0) {
		dot.classList.add('dot_selected');
	}

	// Ajouter les points au conteneur
	dotsContainer.appendChild(dot);
}

// Variables pour suivre l'état actuel
let currentSlide = 0; // On commence avec la première image

// Sélection des éléments DOM
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

// Fonction pour mettre à jour l'image, le texte et les points
function updateSlide() {
	// Mettre à jour l'image
	bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	// Mettre à jour le texte
	bannerText.innerHTML = slides[currentSlide].tagLine;

	// Mettre à jour les points
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Event listeners pour les flèches
arrowLeft.addEventListener('click', () => {
	// Si nous sommes à la première image, nous ne pouvons pas reculer plus loin
	if (currentSlide > 0) {
		currentSlide--;
	} else {
		currentSlide = slides.length - 1; // Retourner à la dernière slide
	}
	updateSlide();
});

arrowRight.addEventListener('click', () => {
	// Si nous sommes à la dernière image, retourner à la première
	if (currentSlide < slides.length - 1) {
		currentSlide++;
	} else {
		currentSlide = 0; // Retourner à la première slide
	}
	updateSlide();
});

