import returnToSavedPosition from '../modules/return-position.js';

returnToSavedPosition();
import { buildSwiper } from '../layouts/build-swiper.js';
buildSwiper();
import { servicesSlide } from '../layouts/services-slide.js';
servicesSlide();
import { applyParallax } from '../animations/animations.jsx';

//* ----------------------------------------------------------------------------
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollSmoother);

import {
	animateTitles,
	refreshScrollTrigger,
	tlServices1,
	tlServices2,
	tlFooterHorizontal,
	tlFooterParallel,
} from '../animations/animations.jsx';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

if (!isMobile) {
	const smoother = ScrollSmoother.create({
		wrapper: '#wrapper',
		content: '#content',
		smooth: 1.5,
		effects: true,
		smoothTouch: 0.1,
	});
	applyParallax('.material-parallax');
	// Удаление ScrollSmoother (если это нужно вручную)
	window.addEventListener('unload', () => {
		smoother.kill();
	});
	if (smoother) {
		if (!isMobile || innerWidth > 1024) {
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
			tlFooterParallel();
			tlFooterHorizontal();
			refreshScrollTrigger();
		}
	}
}
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const video = document.querySelector('#player-id'); // Укажите id вашего видео

	if (video) {
		// Проверка видимости видео
		const isVideoInView = () => {
			const videoTop = video.getBoundingClientRect().top;
			return videoTop > -300;
		};

		// Автоматическое воспроизведение видео, если оно в зоне видимости
		const playVideo = async () => {
			if (isVideoInView() && video.paused) {
				try {
					await video.play();
					console.log('Видео воспроизводится');
				} catch (err) {
					if (err.name !== 'AbortError') {
						console.warn('Не удалось воспроизвести видео:', err);
					}
				}
			} else {
				console.log('Видео вне видимости, воспроизведение пропущено');
			}
		};

		// Выполняем проверку при загрузке страницы
		playVideo();

		// Обработчик клика для управления воспроизведением
		const handleVideoClick = () => {
			if (video.paused) {
				video.play().catch(err => {
					if (err.name !== 'AbortError') {
						console.warn('Не удалось воспроизвести видео:', err);
					}
				});
			} else {
				video.pause();
			}
		};

		// Обработчик события прокрутки
		const handleScroll = () => {
			const videoTop = video.getBoundingClientRect().top;

			if (videoTop < -300 && !video.paused) {
				video.pause();
			} else if (videoTop > -300 && video.paused) {
				video.play().catch(err => {
					if (err.name !== 'AbortError') {
						console.warn('Не удалось воспроизвести видео:', err);
					}
				});
			}
		};

		// Добавляем обработчики событий
		video.addEventListener('click', handleVideoClick);
		window.addEventListener('scroll', handleScroll);

		// Очистка обработчиков при выгрузке страницы
		window.addEventListener('beforeunload', () => {
			video.removeEventListener('click', handleVideoClick);
			window.removeEventListener('scroll', handleScroll);
		});
	}
});

import { buttonShow } from '../animations/anime-js.jsx';
buttonShow();
import modalOpen from '../modules/modalOpen.js';
modalOpen();