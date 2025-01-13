import { LagTextFunction } from '../animations/animations.jsx';
import {
	animateTitles,
	tlServices1,
	tlServices2,
} from '../animations/animations.jsx';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
const offerContent = document.querySelector('.offer-container__content');
if (!isMobile) {
	LagTextFunction();
	if (offerContent) {
		animateTitles(
			'.services__title',
			'.services__title',
			'.services__title',
			'=150',
			'=150',
		);

		animateTitles(
			'.offer-container__title',
			'.offer-container__title',
			'.offer-container__title',
			'=150',
			'=150',
		);
	}


	tlServices1();
	tlServices2();
}