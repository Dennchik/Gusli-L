import { LagTextFunction } from './animations/animations.jsx';
import { applyParallax } from './animations/animations.jsx';
import { Slide } from './layouts/services-slide.js';
import { partnersSlide } from './layouts/partners-slide.js';
import { smoother } from './animations/animations.jsx';
import { buildSwiper } from './layouts/build-swiper.js';
buildSwiper();

//* ----------------------------------------------------------------------------
import {
	animateTitles,
	tlServices1,
	tlServices2,
} from './animations/animations.jsx';
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const offerContent = document.querySelector('.offer-container__content');
	const serviceTitle = document.querySelector('.services__title');
	const offerCcontainer = document.querySelector('.offer-container');
	const descriptionTitle = document.querySelector('.service-description__title');
	const slidePartners = document.querySelector('.slide-partners');
	const servicesSlide = document.querySelector('.slide-services');
	const parallax = document.querySelector('.parallax');

	if (!isMobile || innerWidth > 1024) {
		LagTextFunction();
	}

	if (!isMobile) {
		smoother.effects('.services-slide__column', {
			speed: (i) => {
				return window.matchMedia('(min-width:730px)').matches
					? i % 2 === 1
						? 1.15
						: 1
					: i % 2 === 0
						? 0.9
						: 1.15;
			},
		});

		if (offerCcontainer) {
			tlServices1();
			tlServices2();
		}

		if (descriptionTitle) {
			animateTitles(
				'.service-description__title',
				'.service-description__title',
				'.service-description__title',
				'=150',
				'=150',
			);
		}

		if (serviceTitle) {
			animateTitles(
				'.services__title',
				'.services__title',
				'.services__title',
				'=150',
				'=150',
			);
		}

		if (offerContent) {
			animateTitles(
				'.offer-container__title',
				'.offer-container__title',
				'.offer-container__title',
				'=150',
				'=150',
			);
		}

		if (parallax) {
			applyParallax('.material-parallax');
		};
	}

	if (servicesSlide) {
		Slide();
	}

	if (slidePartners) {
		partnersSlide();
	}
});