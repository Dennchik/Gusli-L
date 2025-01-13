import { buildSwiper } from '../layouts/build-swiper.js';
buildSwiper();
import { Slide } from '../layouts/services-slide.js';
Slide();
import { observerMutation } from '../assets/observerMutation.js';
observerMutation();
//* ------------------------------- Showreel -----------------------------------
import { videoPlayer } from '../assets/video-player.js';
videoPlayer();
//* ----------------------------------------------------------------------------
import {
	animateTitles,
	tlServices1,
	tlServices2,
} from '../animations/animations.jsx';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
import { smoother } from '../animations/animations.jsx';

// Удаление ScrollSmoother (если это нужно вручную)
window.addEventListener('visibilitychange', () => {
	smoother.kill();
});
//* ----------------------------------------------------------------------------
if (!isMobile || innerWidth > 1024) {
	if (smoother) {
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
	}

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
	tlServices1();
	tlServices2();
}
