import { LagTextFunction } from './animations/animations.jsx';
import { applyParallax } from './animations/animations.jsx';
import { Slide } from './layouts/services-slide.js';
import { slideShowreel } from './layouts/showreel-slide.js';
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
	const showreel = document.querySelector('.showreel');
	const offerCcontainer = document.querySelector('.offer-container');
	const descriptionTitle = document.querySelector('.service-description__title');
	const slidePartners = document.querySelector('.slide-partners');
	const servicesSlide = document.querySelector('.slide-services');
	const parallax = document.querySelector('.parallax');
	const showreelSlide = document.querySelector('.slide-showreel');

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
				'=150'
			);
		}

		if (serviceTitle) {
			animateTitles(
				'.services__title',
				'.services__title',
				'.services__title',
				'=150',
				'=150'
			);
		}

		if (offerContent) {
			animateTitles(
				'.offer-container__title',
				'.offer-container__title',
				'.offer-container__title',
				'=150',
				'=150'
			);
		}
		if (showreel) {
			animateTitles(
				'.showreel__title',
				'.showreel__title',
				'.showreel__title',
				'=150',
				'=150'
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

	if (showreelSlide) {
		slideShowreel();
	}
});
// const videos = document.querySelectorAll('.vk-video');

// // Проходим по каждому iframe и добавляем обработчики событий
// videos.forEach(iframe => {
// 	// Ожидаем, пока iframe загрузится
// 	iframe.addEventListener('load', () => {
// 		// После загрузки, устанавливаем контроль воспроизведения
// 		const iframeWindow = iframe.contentWindow;

// 		// Используем событие "ended", если оно доступно
// 		iframeWindow.addEventListener('ended', () => {
// 			// Останавливаем воспроизведение видео, отправляем сообщение
// 			iframeWindow.postMessage({ event: 'pause' }, '*');
// 		});
// 	});
// });

// const showreelSlide = document.querySelector('.slide-showreel');
// let swiperInstance;

// if (showreelSlide) {
// 	swiperInstance = slideShowreel();
// }

// const videos = document.querySelectorAll('.slide-showreel video');

// if (swiperInstance && videos.length) {
// videos.forEach(video => {
// video.controls = true;

// // Отключаем все события слайдера при воспроизведении видео
// ['play', 'pause', 'click', 'seeking', 'seeked'].forEach(eventName => {
// 	video.addEventListener(eventName, event => {
// 		event.stopPropagation(); // Отключаем всплытие событий
// 		event.preventDefault();  // Отключаем стандартное поведение
// 	});
// });

// Зафиксировать текущий слайд при воспроизведении видео
// video.addEventListener('play', () => {
// 	// Получаем текущий активный индекс слайдера
// 	const currentIndex = swiperInstance.activeIndex;

// 	// Блокируем слайдер от перемещения
// 	swiperInstance.allowTouchMove = false;

// 	// Сохраняем индекс слайда при воспроизведении
// 	setTimeout(() => {
// 		// Убедимся, что слайдер не переключился
// 		swiperInstance.slideTo(currentIndex, 0, false);
// 	}, 10); // Небольшая задержка для предотвращения нежелательных действий
// });

// Разблокируем слайдер при паузе
// video.addEventListener('pause', () => {
// 	swiperInstance.allowTouchMove = true; // Включаем управление слайдером
// });
// });

// Обработчик для кнопок навигации
// const swiperControls = showreelSlide.querySelectorAll('.swiper-button-next, .swiper-button-prev');
// swiperControls.forEach(control => {
// 	control.addEventListener('click', event => {
// 		// Разрешаем слайдеру работать при клике на кнопки
// 		swiperInstance.allowTouchMove = true;
// 		event.stopPropagation(); // Предотвращаем всплытие событий, но только для контролов
// 	});
// });
// }