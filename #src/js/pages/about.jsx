import { buildSwiper } from '../layouts/build-swiper.js';
buildSwiper();

import { partnersSlide } from '../layouts/partners-slide.js';
partnersSlide();

import {
	animateTitles,
	refreshScrollTrigger
} from '../animations/animations.jsx';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
if (!isMobile) {
	animateTitles(
		'.partners__title',
		'.partners__title',
		'.partners__title',
		'=150',
		'=150',
	);
	refreshScrollTrigger();
}