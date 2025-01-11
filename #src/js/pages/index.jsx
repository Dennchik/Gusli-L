import { buildSwiper } from '../layouts/build-swiper.js';
buildSwiper();
import { Slide } from '../layouts/services-slide.js';
Slide();

// import { observerMutation } from '../assets/observerMutation.js';
// observerMutation();
//* ----------------------------------------------------------------------------
import {
	animateTitles,
	tlServices1,
	tlServices2,
	// tlFooterHorizontal,
	// tlFooterParallel,
	// refreshScrollTrigger,
} from '../animations/animations.jsx';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
import { smoother } from '../animations/animations.jsx';

// Удаление ScrollSmoother (если это нужно вручную)
window.addEventListener('visibilitychange', () => {
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
		// tlFooterParallel();
		// tlFooterHorizontal();
		// refreshScrollTrigger();
	}
}
// }
//* ------------------------------- Showreel -----------------------------------
document.addEventListener('DOMContentLoaded', () => {
	// Укажите id вашего видео
	const video = document.querySelector('#player-id');

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

